import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import {Events, NavController, ToastController} from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(public navCtrl: NavController,
              public userData: UserData,
              public events: Events,
              private toast: ToastController) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username, this.login.password)
        .then((result: any) => {
          this.toast.create({ message: result, position: 'botton', duration: 30000 }).present();
          this.userData.setToken(result);
          this.events.publish('user:login');
        })
        .catch((error: any) => {
          this.toast.create({ message: '登录错误。 异常: ' + error.error, position: 'botton', duration: 3000 }).present();

      });

    }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
}
