import { Injectable } from '@angular/core';

import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Http} from "@angular/http";


@Injectable()
export class UserData {
  _favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_LOGIN_TOKEN = 'HAS_LOGIN_TOKEN';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
  private API_URL = 'http://localhost:8080/jeecg/rest/'
  constructor(
    public events: Events,
    public storage: Storage,
    public http: Http
  ) {}

  hasFavorite(sessionName: string): boolean {
    return (this._favorites.indexOf(sessionName) > -1);
  };

  addFavorite(sessionName: string): void {
    this._favorites.push(sessionName);
  };

  removeFavorite(sessionName: string): void {
    let index = this._favorites.indexOf(sessionName);
    if (index > -1) {
      this._favorites.splice(index, 1);
    }
  };

  login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      var data = {
        username: username,
        password: password
      };
      this.http.post(this.API_URL + 'tokens', data).subscribe((result: any) => {
            resolve(result.json());
          },
          (error) => {
            reject(error.json());
          });
    });
  }
  /*
  login(username: string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:login');
  };
*/
  signup(username: string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
    this.events.publish('user:signup');
  };

  logout(): void {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
    this.events.publish('user:logout');
  };

  setUsername(username: string): void {
    this.storage.set('username', username);
  };

  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  };

  checkHasSeenTutorial(): Promise<string> {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
    });
  };

  setToken(token: string): void {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.storage.set(this.HAS_LOGIN_TOKEN, token);
  };
  getToken(): Promise<string> {
    return this.storage.get(this.HAS_LOGIN_TOKEN).then((value) => {
      return value;
    });
  };
  isLogin():Promise<string> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value;
    });
  };
}
