import { Component } from '@angular/core';
import {
  ActionSheet,
  ActionSheetController,
  Config,
  NavController
} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ConferenceData } from '../../providers/conference-data';
import { DataService } from '../../providers/data-service/data-service';
import { UserData } from '../../providers/user-data';
import {ToastController} from "_ionic-angular@3.9.2@ionic-angular/components/toast/toast-controller";
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
  public speakers: any[] = [];
  public username:string;
  shownSessions: any = [];
  constructor(
    public dataService:DataService,
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    private toast: ToastController,
    public confData: ConferenceData,
    public config: Config,
    public inAppBrowser: InAppBrowser,
    public userData: UserData
  ) {
    window.baiduLocation.startLocation(  
      function (success) {  
        document.getElementById('lng2').innerHTML = success.longitude;
        document.getElementById('lat2').innerHTML = success.latitude;
        document.getElementById('address2').innerHTML = success.address;
        
          }, function (error) {  
              /*error={code:   //code=-1,为本地错误,code>0为百度定位的错误码  msg:  //错误描述}*/
          },{//这个参数也可以不传  
              CoorType:'bd09ll', //设置坐标系默认'bd09ll'  
              IsNeedAddress:true //是否需要返回坐标的地址信息，默认是false
            }
    );

  }

ionViewDidLoad() {
    this.updateSchedule();
  }
  ionViewWillEnter(){  
    this.updateSchedule();
  }
  updateSchedule() {
    this.userData.getUsername().then((result)=>{
      this.dataService.get('/classSigninInfo/'+result).subscribe((result:any)=>{
        console.log(result)
        if(result.isSign){
          this.shownSessions = result.data;
        }else{
          
        }
      })
    })
    
  }

  getLocation(){
    let lng = document.getElementById('lng2').innerHTML;
    //let lat = document.getElementById('lat2').innerHTML;
    //let address = document.getElementById('address2').innerHTML;
    if(lng == null || lng == ''){
      this.toast.create({ message: "请先到【地图】模块获取位置信息", position: 'center', duration: 3000 }).present();
      return;
    }
  }


  siginCourse(courseid){
    let lng2 = document.getElementById('lng2').innerHTML;
    let lat2 = document.getElementById('lat2').innerHTML;
    let address2 = document.getElementById('address2').innerHTML;
    this.toast.create({ message: "当前位置："+address2, position: 'top', duration: 1000 }).present();
    this.userData.getUsername().then((result)=>{
      this.dataService.get('/classSigninInfo/signin/'+result+'&&'+lat2+'&&'+ lng2+'&&'+courseid).subscribe((result:any)=>{
        console.log(JSON.stringify(result));
        this.toast.create({ message: result.data, position: 'center', duration: 3000 }).present();
        this.toast.create({ message: '当前坐标：'+lng2+","+lat2 , position: 'top', duration: 3000 }).present();
        this.updateSchedule();
      })
    })
  }
    
}
