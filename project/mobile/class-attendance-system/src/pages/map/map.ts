import { Component, ViewChild, ElementRef } from '@angular/core';
import { MapOptions } from 'angular2-baidu-map';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  public opts: MapOptions;
  public latitude = 26.0471255;
  public longitude = 119.33022111;
  @ViewChild('mapCanvas') mapElement: ElementRef;
  constructor(public storage: Storage) {
    
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
    // navigator.geolocation.getCurrentPosition((position)=>{
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
    //   alert('定位錯誤code: ' + error.code + '\n' +  'message: ' + error.message + '\n');
    // });
  }
}