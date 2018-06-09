import { Component } from '@angular/core';

import {
  ActionSheet,
  ActionSheetController,
  // ActionSheetOptions,
  Config,
  NavController
} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ConferenceData } from '../../providers/conference-data';

 import { SessionDetailPage } from '../session-detail/session-detail';
import { DataService } from '../../providers/data-service/data-service';
import { UserData } from '../../providers/user-data';
 //import { SpeakerDetailPage } from '../speaker-detail/speaker-detail';
//  import {Platform} from 'ionic-angular';
 import { MapOptions } from 'angular2-baidu-map';
//  declare var baidumap_location :any;

// TODO remove
export interface ActionSheetButton {
  text?: string;
  role?: string;
  icon?: string;
  cssClass?: string;
  handler?: () => boolean|void;
};

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html'
})
export class SpeakerListPage {
  public actionSheet: ActionSheet;
  public opts:MapOptions;
  public speakers: any[] = [];
  public username:string;
  public latitude = 26.0471255;
  public longitude = 119.33022111;
  
  constructor(
    // private platform: Platform,
    public dataService:DataService,
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public confData: ConferenceData,
    public config: Config,
    public inAppBrowser: InAppBrowser,
    public userData: UserData
  ) {
    this.opts = {
      centerAndZoom: {
        lng: this.longitude,
        lat: this.latitude,
        zoom: 15
      },
      enableMapClick:true,
      disableDoubleClickZoom:false,
    };
    
  }


  // ngOnInit(): void {
  //   this.platform.ready().then(
  //     () => {
  //       console.log("MyApp::constructor platform.ready2");
  //       baidumap_location.getCurrentPosition(function (result) {
  //         alert(JSON.stringify(result, null, 4))
  //         console.log("================")
  //         console.log(JSON.stringify(result, null, 4));
  //       }, function (error) {
  //         console.log(error);
  //       });
  //     }
  //   );


  // }
  getLocation(){
    // let lat = this.latitude;
    // let lon = this.longitude;


  window.baiduLocation.startLocation(  
    function (success) { 
      alert(JSON.stringify(success));
            alert(success.latitude + "," + success.longitude+","+success.address);  
        }, function (error) {  
            /*
                 error={
                        code:   //code=-1,为本地错误,code>0为百度定位的错误码
                        msg:  //错误描述
                 }
            */
        },{//这个参数也可以不传  
            CoorType:'bd09ll', //设置坐标系默认'bd09ll'  
            IsNeedAddress:false //是否需要返回坐标的地址信息，默认是false  
        });
    // baidu_location.getCurrentPosition(function(data){
    //       console.log("success");
    //       alert(JSON.stringify(data));
    //     console.log(JSON.stringify(data));
    // }, function(data){
    // console.log("fail");
    // console.log(data);
    // alert(JSON.stringify(data));
    // });
    // navigator.geolocation.getCurrentPosition((position)=>{
    //   this.opts.centerAndZoom.lng = position.coords.longitude;
    //   this.opts.centerAndZoom.lat = position.coords.latitude
    //   console.log(position.coords.longitude);
    //   console.log("longitude"+position.coords.longitude+"\n latitude"+position.coords.latitude);
    //   let mapOpts : MapOptions = {
    //     centerAndZoom: {
    //       lng: position.coords.longitude,
    //       lat: position.coords.latitude,
    //       zoom: 15
    //     },
    //     enableMapClick:true,
    //     disableDoubleClickZoom:false, 
    //   };
    //   this.opts = mapOpts;
    //   console.log("ionViewDidLoad"+this.opts);
    // },(error) =>{
    //  alert('定位錯誤code: ' + error.code + '\n' +  'message: ' + error.message + '\n');
    // });
  }
  ionViewDidLoad() {


    // baidumap_location.getCurrentPosition(function (result) {
    //   alert(JSON.stringify(result, null, 4))
    //   console.log("================")
    //   console.log(JSON.stringify(result, null, 4));
    // }, function (error) {
    //   console.log(error+"================")
    // });

    // this.userData.getUsername().then((result)=>{
    //   this.username = result;
    //   this.dataService.get('/classSigninInfo/'+this.username).subscribe((result:any)=>{
    //     this.speakers = result;
    //   })
    // });

    
    // this.confData.getSpeakers().subscribe((speakers: any[]) => {
    //   this.speakers = speakers;
    // });
  }

  goToSessionDetail(session: any) {
    this.navCtrl.push(SessionDetailPage, { sessionId: session.id });
  }

  // goToSpeakerDetail(speaker: any) {
    // this.navCtrl.push(SpeakerDetailPage, { speakerId: speaker.id });
  // }

  // goToSpeakerTwitter(speaker: any) {
    // this.inAppBrowser.create(
    //   `https://twitter.com/${speaker.twitter}`,
    //   '_blank'
    // );
  // }

  // openSpeakerShare(speaker: any) {
  //   let actionSheet = this.actionSheetCtrl.create({
  //     title: 'Share ' + speaker.name,
  //     buttons: [
  //       {
  //         text: 'Copy Link',
  //         handler: () => {
  //           console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
  //           if ( (window as any)['cordova'] && (window as any)['cordova'].plugins.clipboard) {
  //             (window as any)['cordova'].plugins.clipboard.copy(
  //               'https://twitter.com/' + speaker.twitter
  //             );
  //           }
  //         }
  //       } as ActionSheetButton,
  //       {
  //         text: 'Share via ...'
  //       } as ActionSheetButton,
  //       {
  //         text: 'Cancel',
  //         role: 'cancel'
  //       } as ActionSheetButton
  //     ]
  //   } as ActionSheetOptions);

  //   actionSheet.present();
  // }

  // openContact(speaker: any) {
  //   let mode = this.config.get('mode');

  //   let actionSheet = this.actionSheetCtrl.create({
  //     title: 'Contact ' + speaker.name,
  //     buttons: [
  //       {
  //         text: `Email ( ${speaker.email} )`,
  //         icon: mode !== 'ios' ? 'mail' : null,
  //         handler: () => {
  //           window.open('mailto:' + speaker.email);
  //         }
  //       } as ActionSheetButton,
  //       {
  //         text: `Call ( ${speaker.phone} )`,
  //         icon: mode !== 'ios' ? 'call' : null,
  //         handler: () => {
  //           window.open('tel:' + speaker.phone);
  //         }
  //       } as ActionSheetButton
  //     ]
  //   } as ActionSheetOptions);

  //   actionSheet.present();
  // }
}
