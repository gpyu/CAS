import { Component, ViewChild, ElementRef } from '@angular/core';
import { MapOptions } from 'angular2-baidu-map';
import { Storage } from '@ionic/storage';
// import {Platform} from 'ionic-angular';
// declare var cordova :any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  public opts: MapOptions;
  public latitude = 26.067811;
  public longitude = 119.207798;

  @ViewChild('mapCanvas') mapElement: ElementRef;
  constructor(
    // private platform: Platform,
    public storage: Storage) {
    this.opts = {
      centerAndZoom: {
        lng: this.longitude,
        lat: this.latitude,
        zoom: 15
      },
      enableMapClick:true,
      disableDoubleClickZoom:false,
    };

      // window.baiduLocation.startLocation(  
      //   function (success) { 
      //     this.opts.centerAndZoom.lat = success.latitude;
      //     this.opts.centerAndZoom.lng = success.longitude;
      //           console.log(success.latitude + "," + success.longitude+","+success.address);  
      //       }, function (error) {  
      //           /*
      //               error={
      //                       code:   //code=-1,为本地错误,code>0为百度定位的错误码
      //                       msg:  //错误描述
      //               }
      //           */
      //       },{//这个参数也可以不传  
      //           CoorType:'bd09ll', //设置坐标系默认'bd09ll'  
      //           IsNeedAddress:false //是否需要返回坐标的地址信息，默认是false  
      //       });
    
  }
  ionViewDidLoad() {
   
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
}