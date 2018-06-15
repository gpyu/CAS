import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';

import { Http, Response, RequestOptionsArgs, RequestMethod, Headers, Request } from '@angular/http';
import { LoadingController, Loading, AlertController, Alert, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/fromPromise';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class DataService {

  // Base Url for API
  //private baseUrl: string = (location.hostname === "localhost") ? 'http://172.17.170.164:8080/jeecg/rest/' : 'http://172.17.170.164:8080/jeecg/rest/';
   private baseUrl: string = (location.hostname === "localhost") ? 'http://47.106.117.191/rest/' : 'http://47.106.117.191/rest/';
  // private baseUrl: string = (location.hostname === "localhost") ? 'http://127.0.0.1:8080/jeecg/rest/' : 'http://127.0.0.1:8080/jeecg/rest/';
  // Spinner for loader
  private spinner: Loading;

  // alert box
  private alert: Alert;

  // default error popups
  private errorPopup: boolean = true;

  // cache flag
  public cached: boolean = true;

  /**
   * Default Headers used in all requests.
   */
  public headers: any = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  constructor(
    protected http: Http,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private storage: Storage,
    private network: Network
  ) {

    // check device is online
    console.log('Data Service Initialize');
  }

  /**
   * Show loading spinner
   *
   * @param loadingText Loading text
   */
  public withLoader( loadingText: string = 'Loading...' ) {
    this.spinner = this.loadingCtrl.create({ content: loadingText, dismissOnPageChange: true});
    return this;
  }

  /**
   * Dont show popups on error
   */
  public noErrorPopup() {
    this.errorPopup = false;
    return this;
  }

  /**
   * Ignore cache and make fresh refresh
   */
  public fresh() {
    this.cached = false;
    return this;
  }

  /**
   * Make a `get` request
   *
   * @param url url to hit
   * @param options options for request
   */
  public get(url: string, options?: RequestOptionsArgs): Observable<any> {
    return this.request(RequestMethod.Get, url, {}, options);
  }

  /**
   * Make a `post` request
   *
   * @param url url to hit
   * @param body json data to be sent as post
   * @param options options for request
   * @returns It returns an Observable from the request.
   */
  public post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
    return this.request(RequestMethod.Post, url, body, options);
  }

  /**
   * Make a `put` request
   *
   * @param url url to hit
   * @param body json data to be sent as post
   * @param options options for request
   * @returns It returns an Observable from the request.
   */
  public put(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
    return this.request(RequestMethod.Put, url, body, options);
  }

  /**
   * Make a `delete` request
   *
   * @param url url to hit
   * @param options options for request
   * @returns It returns an Observable from the request.
   */
  public delete(url: string, options?: RequestOptionsArgs): Observable<any> {
    return this.request(RequestMethod.Delete, url, null, options);
  }

  /**
   * Make a `patch` request
   *
   * @param url url to hit
   * @param body json data to be sent as post
   * @param options options for request
   * @returns It returns an Observable from the request.
   */
  public patch(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
    return this.request(RequestMethod.Patch, url, body, options);
  }

  /**
   * Make a `head` request
   *
   * @param url url to hit
   * @param options options for request
   * @returns It returns an Observable from the request.
   */
  public head(url: string, options?: RequestOptionsArgs): Observable<any> {
    return this.request(RequestMethod.Head, url, null, options);
  }


  /**
   * This makes request and and shows loader if asked
   *
   * @param method RequestMethod to be used
   * @param url  URL for request
   * @param body body can be json object which will be stringify
   * @param options Any RequestOptionsArgs you want to pass
   * @returns It returns an Observable from the request.
   */
  private request(method: RequestMethod, url: string, body?: any, options?: RequestOptionsArgs) {
    let requestOptions = Object.assign({
      method: method,
      url: this.generateUrl(url),
      body: JSON.stringify(body)
    }, this.generateOptions(options));

    // check network state, online get from api
    if(this.network.type === 'none') {
      let toast = this.toastCtrl.create({
        message: 'Internet connection appears offline.',
        duration: 5000,
        showCloseButton: true,
        dismissOnPageChange: true
      });

      toast.present();
    }

    // check if loader needs to be shown
    if(this.spinner) this.spinner.present();

    // check if its a fresh request, dont return cache

    // Add General headers
    if (!requestOptions.headers) {
      requestOptions.headers = new Headers();
    }

    return this.getAuthToken().flatMap( data => {
      if(data) {
        requestOptions.headers.append('X-AUTH-TOKEN',  data);
      }
      // make request
      return this.http.request( new Request(requestOptions) )
        .map(this.responseHandler, this)
        .catch( this.handleError.bind(this) );
    });
  }

  /**
   * Generate url for all requests. It uses baseUrl if url doesn't start with 'http'' or 'www'.
   * @param url     Url string
   * @returns       Generated url string
   */
  protected generateUrl(url: string): string {
    return !!(url && url.match(/^((?:http(|s):\/\/www\.)|(?:http:\/\/))/)) ? url : this.baseUrl + url;
  }

  /**
   * Handler which transform response to JavaScript format if response exists.
   * @param resp     Http response
   * @returns        Http response
   */
  protected responseHandler(resp: Response): Response {
    // rest spinner
    this.destroySpinner();

    if (!!resp.text()) {
      return resp.json();
    }

    return resp;
  }

  private destroySpinner() {
    if( this.spinner ) this.spinner.dismiss();
    this.spinner = undefined;
  }

  /**
   * Return auth token from promise
   */
  private getAuthToken() {
    return Observable.fromPromise(this.storage.get('tokens'));
  }

  /**
   * Handle error occured during request
   * @param error error observer
   */
  private handleError (error: Response | any) {
    // rest spinner
    this.destroySpinner();

    // Handle validation and Auth error
    let errMsg: string = '';
    let alertTitle: string;

    if (error instanceof Response) {

      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);

      // Unauthorized
      if( error.status >= 400 ) {

        // if validation error
        if( error.status === 422 ) {
          alertTitle = 'Invalid';
          // build a string from laravel validation error response
          for( let feild in body ) {
            let errFeild = body[feild];
            errMsg += `<p> ${errFeild[0]} </p>`
          }
        } else {
          alertTitle = error.statusText || 'Error';
          errMsg = err;
        }
      }

      // show the alert
      if (  this.errorPopup ) {
        // create new alert
        this.alert = this.alertCtrl.create({
          title: alertTitle,
          subTitle: errMsg,
          buttons: ['Dismiss']
        });

        if( error.status !== 0 ) {
          this.alert.present();
        }

        this.alert = undefined;
      }

    } else {
      errMsg = error.message ? error.message : error.toString();
      console.log(errMsg);
    }

    // handle error
    return Observable.throw(error);
  }

  /**
   * Handler which generate options for all requests from headers.
   * @param options   Request options arguments
   * @returns         Request options arguments
   */
  protected generateOptions(options: RequestOptionsArgs = {}): RequestOptionsArgs {
    if (!options.headers) {
      options.headers = new Headers();
    }

    Object.keys(this.headers)
      .filter((key) => this.headers.hasOwnProperty(key))
      .forEach((key) => {
        options.headers.append(key, this.headers[key]);
      });

    return options;
  }

  


  public login(username: string, password: string):Promise<JSON> {
    return new Promise((resolve, reject) => {
      var data = {
        username: username,
        password: password
      };
      this.http.post(this.baseUrl + 'tokens', data).subscribe((result: any) => {
          resolve(result.json());
          this.storage.set('tokens',result.json());
          this.storage.set('username',data.username);
          this.storage.set('hasSeenTutorial',true);
        },
        (error) => {
          reject(error.json());
        });
    });
  }
}
