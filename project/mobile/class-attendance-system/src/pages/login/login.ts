import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';
import { SignupPage } from '../signup/signup';
import {ToastController} from "_ionic-angular@3.9.2@ionic-angular/components/toast/toast-controller";
import { DataService } from '../../providers/data-service/data-service';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData,
              public dataService:DataService,
              private toast: ToastController,
              public loadingCtrl: LoadingController
            ) { }

  onLogin(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      let loader = this.loadingCtrl.create({
        content: "登录中...",
        duration: 30000
      });
      loader.present();
      this.dataService.login(this.login.username,this.login.password).then((result: any) => {
        loader.dismiss();
        this.toast.create({ message: '登录成功', position: 'botton', duration: 3000 }).present();
        this.userData.login(this.login.username,result);
        this.navCtrl.push(TabsPage);
      }).catch((error: any) => {
        this.toast.create({ message: '抱歉，网络异常：'+error.toString(), duration: 3000 }).present();
    });
    }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
}
