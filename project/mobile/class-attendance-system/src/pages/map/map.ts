import { Component, ViewChild, ElementRef } from '@angular/core';
import { MapOptions } from 'angular2-baidu-map';
import { Storage } from '@ionic/storage';
import {ToastController} from "_ionic-angular@3.9.2@ionic-angular/components/toast/toast-controller";
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  public opts: MapOptions;
  public latitude = 26.079391;
  public longitude = 119.309794;

  @ViewChild('mapCanvas') mapElement: ElementRef;
  constructor(
    private toast: ToastController,
    public storage: Storage) {
    this.opts = {
      centerAndZoom: {
        lng: this.longitude,
        lat: this.latitude,
        zoom: 19,
      
      },
      enableMapClick:true,
      disableDoubleClickZoom:true,
    };
   
  }

  ionViewWillEnter(){  
    console.log("2.0 ionViewWillEnter 顾名思义，当将要进入页面时触发");  
    
     window.baiduLocation.startLocation(  
      function (success) {  
        document.getElementById('lng').innerHTML = success.longitude;
        document.getElementById('lat').innerHTML = success.latitude;
        document.getElementById('address').innerHTML = success.address;

       
          }, function (error) {  
              /*error={code:   //code=-1,为本地错误,code>0为百度定位的错误码  msg:  //错误描述}*/
          },{//这个参数也可以不传  
              CoorType:'bd09ll', //设置坐标系默认'bd09ll'  
              IsNeedAddress:true //是否需要返回坐标的地址信息，默认是false
            }
    );
  }  
  ionViewDidLoad() {
    
  }

  getLocationInfo(){
    
  }

  setLocation(){
    let lng = document.getElementById('lng').innerHTML;
    let lat = document.getElementById('lat').innerHTML;
    let address = document.getElementById('address').innerHTML;
    this.toast.create({ message: "当前位置："+address, position: 'center', duration: 3000 }).present();
    this.opts = {
      centerAndZoom: {
        lng: parseFloat(lng),
        lat: parseFloat(lat),
        zoom: 19
      },
      enableMapClick:true,
      disableDoubleClickZoom:false,
    };
  }

}