import { Component, ViewChild, ElementRef } from '@angular/core';
import { MapOptions } from 'angular2-baidu-map';
import { Storage } from '@ionic/storage';
import {Platform} from 'ionic-angular';
declare var cordova :any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  public opts: MapOptions;
  public latitude = 26.0471255;
  public longitude = 119.33022111;

  @ViewChild('mapCanvas') mapElement: ElementRef;
  constructor(private platform: Platform,public storage: Storage) {
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
  ionViewDidLoad() {
    this.platform.ready().then(
      () => {
        console.log("MyApp::constructor platform.ready");
        alert("MyApp::constructor platform.ready");
        cordova.plugins.baidumap_location.getCurrentPosition(function (result) {
          alert(JSON.stringify(result, null, 4))
          console.log("================")
          console.log(JSON.stringify(result, null, 4));
        }, function (error) {
          console.log(error+"================")
        });
      }
    );
    //navigator.geolocation.getCurrentPosition((position)=>{
      // this.opts.centerAndZoom.lng = position.coords.longitude;
      // this.opts.centerAndZoom.lat = position.coords.latitude
      //console.log(position.coords.longitude);
      // console.log("longitude"+position.coords.longitude+"\n latitude"+position.coords.latitude);
      // let mapOpts : MapOptions = {
      //   centerAndZoom: {
      //     lng: position.coords.longitude,
      //     lat: position.coords.latitude,
      //     zoom: 15
      //   },
      //   enableMapClick:true,
      //   disableDoubleClickZoom:false, 
      // };
      // this.opts = mapOpts;
      // console.log("ionViewDidLoad"+this.opts);
    //},(error) =>{
     // alert('定位錯誤code: ' + error.code + '\n' +  'message: ' + error.message + '\n');
    //});
  }
}