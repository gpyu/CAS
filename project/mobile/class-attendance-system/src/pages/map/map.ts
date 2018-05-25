import { Component, ViewChild, ElementRef } from '@angular/core';
import { MapOptions } from 'angular2-baidu-map';


@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  opts: MapOptions;
  latitude = 31.245554;
  longitude = 121.506191;
  aa = '123123';
  @ViewChild('mapCanvas') mapElement: ElementRef;
  constructor() {
    this.opts = {
      centerAndZoom: {
        lng: this.longitude,
        lat: this.latitude,
        zoom: 15
      }
    }
    
    // lng: 119.197302,
    // lat: 26.065064,
  }
  ionViewDidLoad() {
    var onError = function (error) {
      alert('code: ' + error.code + '\n' +  'message: ' + error.message + '\n');
    };
    var onSuccess = function (position) {
      let opts = {
        centerAndZoom: {
          lng: position.coords.longitude.toFixed(6),
          lat: position.coords.latitude.toFixed(6),
          zoom: 15
        }
      };
    }
    let a = '';
    let l = '';
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position.coords.longitude.toFixed(6));
      a = position.coords.longitude.toFixed(6);
      l = position.coords.latitude.toFixed(6);
      console.log(position.coords.latitude.toFixed(6));
    },onError);

  }

}
// opts = {
//   centerAndZoom: {
//     lng: position.coords.longitude.toFixed(6),
//     lat: position.coords.latitude.toFixed(6),
//     zoom: 15
//   }
// };

      // alert('Latitude: ' + position.coords.latitude + '\n' +
      //   'Longitude: ' + position.coords.longitude + '\n' +
      //   'Altitude: ' + position.coords.altitude + '\n' +
      //   'Accuracy: ' + position.coords.accuracy + '\n' +
      //   'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
      //   'Heading: ' + position.coords.heading + '\n' +
      //   'Speed: ' + position.coords.speed + '\n' +
      //   'Timestamp: ' + position.timestamp + '\n');