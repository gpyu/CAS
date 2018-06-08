webpackJsonp([0],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_popover_about_popover__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.conferenceDate = '2047-05-17';
    }
    AboutPage.prototype.presentPopover = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__about_popover_about_popover__["a" /* PopoverPage */]);
        popover.present({ ev: event });
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>关于</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="presentPopover($event)">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div padding class="about-info">\n\n    <h4>考勤系統</h4>\n\n\n\n    <!-- <ion-list no-lines>\n\n      <ion-item>\n\n        <ion-icon name="calendar" item-start></ion-icon>\n\n        <ion-label>Date</ion-label>\n\n        <ion-datetime displayFormat="MMM DD, YYYY" max="2056" [(ngModel)]="conferenceDate"></ion-datetime>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-icon name="pin" item-start></ion-icon>\n\n        <ion-label>Location</ion-label>\n\n        <ion-select>\n\n          <ion-option value="madison" selected>Madison, WI</ion-option>\n\n          <ion-option value="austin">Austin, TX</ion-option>\n\n          <ion-option value="chicago">Chicago, IL</ion-option>\n\n          <ion-option value="seattle">Seattle, WA</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    </ion-list> -->\n\n\n\n    <p>\n\n      学生考勤系统这款产品提供了课堂考勤、课外请假、话题讨论和消息推送等功能，这些功能不仅解决了传统课堂点名和学生请假方式的弊端，而且可以让学生对与课程相关的话题发表见解，增强理解，加深记忆，消息发布可以使得学生及时对本课程做出准备。教师不用再花时间去点名，学生签到、请求申请都变得简单，让老师、学生双方都可以得到更好的体验。\n\n    </p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__schedule_filter_schedule_filter__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_service_data_service__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
// import moment from 'moment';





var SchedulePage = (function () {
    function SchedulePage(app, loadingCtrl, modalCtrl, navCtrl, toastCtrl, confData, user, dataService) {
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.confData = confData;
        this.user = user;
        this.dataService = dataService;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracks = [];
        this.shownSessions = [];
        this.groups = [];
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        this.app.setTitle('Schedule');
        this.updateSchedule();
    };
    SchedulePage.prototype.updateSchedule = function () {
        var _this = this;
        this.dataService.get('/classNotice').subscribe(function (result) {
            console.log(result);
            if (result != null) {
                _this.shownSessions = result;
            }
            else {
                alert(123);
            }
        });
        /* this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
           this.shownSessions = data.shownSessions;
           this.groups = data.groups;
         });*/
    };
    SchedulePage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */], this.excludeTracks);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.excludeTracks = data;
                _this.updateSchedule();
            }
        });
    };
    SchedulePage.prototype.goToSessionDetail = function (sessionData) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__["a" /* SessionDetailPage */], { sessionId: sessionData.id, name: sessionData.name });
    };
    SchedulePage.prototype.openSocial = function (network, fab) {
        var loading = this.loadingCtrl.create({
            content: "Posting to " + network,
            duration: (Math.random() * 1000) + 500
        });
        loading.onWillDismiss(function () {
            fab.close();
        });
        loading.present();
    };
    SchedulePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.dataService.get('/classNotice').subscribe(function (result) {
            _this.shownSessions = result;
            setTimeout(function () {
                refresher.complete();
                var toast = _this.toastCtrl.create({
                    message: '更新成功',
                    duration: 3000
                });
                toast.present();
            }, 1000);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scheduleList', { read: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* List */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* List */])
    ], SchedulePage.prototype, "scheduleList", void 0);
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule',template:/*ion-inline-start:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\schedule\schedule.html"*/'<ion-header>\n\n  <ion-navbar no-border-bottom>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>班级公告</ion-title>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-list *ngFor="let session of shownSessions">\n\n\n\n    <ion-item-group>\n\n\n\n      <ion-item-divider sticky>\n\n        <ion-label>\n\n          {{session.name}}\n\n        </ion-label>\n\n      </ion-item-divider>\n\n\n\n      <ion-item-sliding>\n\n\n\n        <button ion-item>\n\n          <h3>{{session.time}}</h3>\n\n          <p>\n\n            {{session.description}}\n\n          </p>\n\n        </button>\n\n      </ion-item-sliding>\n\n\n\n    </ion-item-group>\n\n\n\n  </ion-list>\n\n  <!--<ion-list #scheduleList [hidden]="shownSessions === 0">\n\n\n\n    <ion-item-group *ngFor="let group of groups" [hidden]="group.hide">\n\n\n\n      <ion-item-divider sticky>\n\n        <ion-label>\n\n          {{group.time}}\n\n        </ion-label>\n\n      </ion-item-divider>\n\n\n\n      <ion-item-sliding *ngFor="let session of group.sessions" #slidingItem [attr.track]="session.tracks[0] | lowercase" [hidden]="session.hide">\n\n\n\n        <button ion-item (click)="goToSessionDetail(session)">\n\n          <h3>{{session.name}}</h3>\n\n          <p>\n\n            {{session.timeStart}} &mdash;\n\n            {{session.timeEnd}}:\n\n            {{session.location}}\n\n          </p>\n\n        </button>\n\n\n\n        <ion-item-options>\n\n          <button ion-button color="favorite" (click)="addFavorite(slidingItem, session)" *ngIf="segment === \'all\'">\n\n            收藏\n\n          </button>\n\n          <button ion-button color="danger" (click)="removeFavorite(slidingItem, session, \'Remove Favorite\')" *ngIf="segment === \'favorites\'">\n\n            移除\n\n          </button>\n\n        </ion-item-options>\n\n\n\n      </ion-item-sliding>\n\n\n\n    </ion-item-group>\n\n\n\n  </ion-list>-->\n\n\n\n  <!--<ion-list-header [hidden]="shownSessions > 0">\n\n      No Sessions Found\n\n  </ion-list-header>-->\n\n\n\n  <!-- <ion-fab bottom right #fab>\n\n    <button ion-fab><ion-icon name="share"></ion-icon></button>\n\n    <ion-fab-list side="top">\n\n      <button ion-fab color="vimeo" (click)="openSocial(\'Vimeo\', fab)"><ion-icon name="logo-vimeo"></ion-icon></button>\n\n      <button ion-fab color="google" (click)="openSocial(\'Google+\', fab)"><ion-icon name="logo-googleplus"></ion-icon></button>\n\n      <button ion-fab color="twitter" (click)="openSocial(\'Twitter\', fab)"><ion-icon name="logo-twitter"></ion-icon></button>\n\n      <button ion-fab color="facebook" (click)="openSocial(\'Facebook\', fab)"><ion-icon name="logo-facebook"></ion-icon></button>\n\n    </ion-fab-list>\n\n  </ion-fab> -->\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\schedule\schedule.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_6__providers_data_service_data_service__["a" /* DataService */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SessionDetailPage = (function () {
    function SessionDetailPage(dataProvider, navParams) {
        this.dataProvider = dataProvider;
        this.navParams = navParams;
    }
    SessionDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dataProvider.load().subscribe(function (data) {
            if (data &&
                data.schedule &&
                data.schedule[0] &&
                data.schedule[0].groups) {
                for (var _i = 0, _a = data.schedule[0].groups; _i < _a.length; _i++) {
                    var group = _a[_i];
                    if (group && group.sessions) {
                        for (var _b = 0, _c = group.sessions; _b < _c.length; _b++) {
                            var session = _c[_b];
                            if (session && session.id === _this.navParams.data.sessionId) {
                                _this.session = session;
                                break;
                            }
                        }
                    }
                }
            }
        });
    };
    SessionDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-session-detail',template:/*ion-inline-start:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\session-detail\session-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title *ngIf="session">{{session.name}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div *ngIf="session">\n\n    <h1>{{session.name}}</h1>\n\n    <h4 *ngFor="let speaker of session?.speakers">\n\n    {{speaker.name}}\n\n  </h4>\n\n    <p>\n\n      {{session.timeStart}} - {{session.timeEnd}}\n\n    </p>\n\n    <p>{{session.location}}</p>\n\n    <p>{{session.description}}</p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\session-detail\session-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], SessionDetailPage);
    return SessionDetailPage;
}());

//# sourceMappingURL=session-detail.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_service_data_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_data__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







;
var SpeakerListPage = (function () {
    function SpeakerListPage(
        // private platform: Platform,
        dataService, actionSheetCtrl, navCtrl, confData, config, inAppBrowser, userData) {
        this.dataService = dataService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.confData = confData;
        this.config = config;
        this.inAppBrowser = inAppBrowser;
        this.userData = userData;
        this.speakers = [];
        this.latitude = 26.0471255;
        this.longitude = 119.33022111;
        this.opts = {
            centerAndZoom: {
                lng: this.longitude,
                lat: this.latitude,
                zoom: 15
            },
            enableMapClick: true,
            disableDoubleClickZoom: false,
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
    SpeakerListPage.prototype.getLocation = function () {
        window.baiduLocation.startLocation(function (success) {
            alert(success.latitude + "," + success.longitude + "," + success.address);
        }, function (error) {
            /*
                error={
                        code:   //code=-1,为本地错误,code>0为百度定位的错误码
                        msg:  //错误描述
                }
            */
        }, {
            CoorType: 'bd09ll',
            IsNeedAddress: false //是否需要返回坐标的地址信息，默认是false  
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
    };
    SpeakerListPage.prototype.ionViewDidLoad = function () {
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
    };
    SpeakerListPage.prototype.goToSessionDetail = function (session) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__["a" /* SessionDetailPage */], { sessionId: session.id });
    };
    SpeakerListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speaker-list',template:/*ion-inline-start:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\speaker-list\speaker-list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>签到</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="outer-content speaker-list">\n\n  <ion-card-content class="outer-content">\n\n    <button ion-item   (click)="getLocation()">\n\n      <h3>location</h3>\n\n    </button>\n\n    <!-- <ion-list>\n\n      <button ion-item *ngFor="let session of sessions" (click)="goToSessionDetail(session)">\n\n        <h3>{{session.name}}</h3>\n\n      </button>\n\n\n\n      <button ion-item (click)="goToSpeakerDetail(speaker)">\n\n        <h3>About {{speaker.name}}</h3>\n\n      </button>\n\n    </ion-list> -->\n\n  </ion-card-content>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\speaker-list\speaker-list.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__providers_data_service_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_data_service_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__["a" /* ConferenceData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__["a" /* ConferenceData */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Config */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Config */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__providers_user_data__["a" /* UserData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_user_data__["a" /* UserData */]) === "function" && _g || Object])
    ], SpeakerListPage);
    return SpeakerListPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=speaker-list.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapPage = (function () {
    function MapPage(platform, storage) {
        this.platform = platform;
        this.storage = storage;
        this.latitude = 26.0471255;
        this.longitude = 119.33022111;
        this.opts = {
            centerAndZoom: {
                lng: this.longitude,
                lat: this.latitude,
                zoom: 15
            },
            enableMapClick: true,
            disableDoubleClickZoom: false,
        };
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.platform.ready().then(function () {
            console.log("MyApp::constructor platform.ready");
            alert("MyApp::constructor platform.ready");
            cordova.plugins.baidumap_location.getCurrentPosition(function (result) {
                alert(JSON.stringify(result, null, 4));
                console.log("================");
                console.log(JSON.stringify(result, null, 4));
            }, function (error) {
                console.log(error + "================");
            });
        });
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
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mapCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\map\map.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>地图</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="map-page">\n\n  <!-- <div style="height: 100%; width: 100%" #mapCanvas id="map_canvas"></div>\n\n    <div #map id="map_container"></div>\n\n    <div id="btn_location">\n\n    <button ion-button  class="btn_loaction" (click)="getLocationByBrowser()">浏览器定位</button>\n\n    <button ion-button  class="btn_loaction" (click)="getLocationByIp()">IP定位</button>\n\n    <button ion-button  class="btn_loaction" (click)="getLocationByCity()">城市定位</button>\n\n    <button ion-button  class="btn_loaction" (click)="getLocationByLatLon()">经纬度定位</button>\n\n    <button ion-button  class="btn_loaction" (click)="getLocation()">GPS点击定位</button>\n\n  </div> -->\n\n  <baidu-map [options]="opts" ></baidu-map>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\map\map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverPage = (function () {
    function PopoverPage(viewCtrl, navCtrl, app, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
    }
    PopoverPage.prototype.support = function () {
        this.app.getRootNav().push('SupportPage');
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.close = function (url) {
        window.open(url, '_blank');
        this.viewCtrl.dismiss();
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-list>\n      <button ion-item (click)=\"close('http://ionicframework.com/docs/v2/getting-started')\">Learn Ionic</button>\n      <button ion-item (click)=\"close('http://ionicframework.com/docs/v2')\">Documentation</button>\n      <button ion-item (click)=\"close('http://showcase.ionicframework.com')\">Showcase</button>\n      <button ion-item (click)=\"close('https://github.com/ionic-team/ionic')\">GitHub Repo</button>\n      <button ion-item (click)=\"support()\">Support</button>\n    </ion-list>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=about-popover.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountPage = (function () {
    function AccountPage(alertCtrl, nav, userData) {
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.userData = userData;
    }
    AccountPage.prototype.ngAfterViewInit = function () {
        this.getUsername();
    };
    AccountPage.prototype.updatePicture = function () {
        console.log('Clicked to update picture');
    };
    // Present an alert with the current username populated
    // clicking OK will update the username and display it
    // clicking Cancel will close the alert and do nothing
    AccountPage.prototype.changeUsername = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Username',
            buttons: [
                'Cancel'
            ]
        });
        alert.addInput({
            name: 'username',
            value: this.username,
            placeholder: 'username'
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                _this.userData.setUsername(data.username);
                _this.getUsername();
            }
        });
        alert.present();
    };
    AccountPage.prototype.getUsername = function () {
        var _this = this;
        this.userData.getUsername().then(function (username) {
            _this.username = username;
        });
    };
    AccountPage.prototype.changePassword = function () {
        console.log('Clicked to change password');
    };
    AccountPage.prototype.logout = function () {
        this.userData.logout();
        this.nav.setRoot('LoginPage');
    };
    AccountPage.prototype.support = function () {
        this.nav.push('SupportPage');
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\account\account.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>个人信息</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n  <div padding-top text-center *ngIf="username">\n\n    <img src="http://www.gravatar.com/avatar?d=mm&s=140" alt="avatar">\n\n    <h2>{{username}}</h2>\n\n\n\n    <ion-list inset>\n\n      <!-- <button ion-item (click)="updatePicture()">Update Picture</button> -->\n\n      <!-- <button ion-item (click)="changeUsername()">Change Username</button> -->\n\n      <!-- <button ion-item (click)="changePassword()">Change Password</button> -->\n\n      <!-- <button ion-item (click)="support()">Support</button> -->\n\n      <button ion-item (click)="logout()">注销</button>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\account\account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_angular_3_9_2_ionic_angular_components_toast_toast_controller__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_service_data_service__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(navCtrl, userData, dataService, toast, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.dataService = dataService;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.login = { username: '', password: '' };
        this.submitted = false;
    }
    LoginPage.prototype.onLogin = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            var loader_1 = this.loadingCtrl.create({
                content: "登录中...",
                duration: 30000
            });
            loader_1.present();
            this.dataService.login(this.login.username, this.login.password).then(function (result) {
                loader_1.dismiss();
                _this.toast.create({ message: '登录成功', position: 'botton', duration: 3000 }).present();
                _this.userData.login(_this.login.username, result);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__["a" /* TabsPage */]);
            }).catch(function (error) {
                _this.toast.create({ message: '抱歉，网络异常：' + error.toString(), duration: 3000 }).present();
            });
        }
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\login\login.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>登录</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<div class="logo">\n\n		<img src="assets/img/appicon.svg" alt="Ionic logo">\n\n	</div>\n\n\n\n	<form #loginForm="ngForm" novalidate>\n\n		<ion-list no-lines>\n\n			<ion-item>\n\n				<ion-label stacked color="primary">用户名</ion-label>\n\n				<ion-input [(ngModel)]="login.username" name="username" type="text" #username="ngModel" spellcheck="false" autocapitalize="off"\n\n					required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n\n				用户名必填\n\n			</p>\n\n\n\n			<ion-item>\n\n				<ion-label stacked color="primary">密码</ion-label>\n\n				<ion-input [(ngModel)]="login.password" name="password" type="password" #password="ngModel" required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n\n				密码必填\n\n			</p>\n\n		</ion-list>\n\n\n\n		<ion-row responsive-sm>\n\n			<ion-col>\n\n				<button ion-button (click)="onLogin(loginForm)" type="submit" block>登录</button>\n\n			</ion-col>\n\n			<!--<ion-col>\n\n				<button ion-button (click)="onSignup()" color="light" block>注册</button>\n\n			</ion-col>-->\n\n		</ion-row>\n\n	</form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_6__providers_data_service_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_angular_3_9_2_ionic_angular_components_toast_toast_controller__["a" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleFilterPage = (function () {
    function ScheduleFilterPage(confData, navParams, viewCtrl) {
        var _this = this;
        this.confData = confData;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.tracks = [];
        // passed in array of track names that should be excluded (unchecked)
        var excludedTrackNames = this.navParams.data;
        this.confData.getTracks().subscribe(function (trackNames) {
            trackNames.forEach(function (trackName) {
                _this.tracks.push({
                    name: trackName,
                    isChecked: (excludedTrackNames.indexOf(trackName) === -1)
                });
            });
        });
    }
    ScheduleFilterPage.prototype.resetFilters = function () {
        // reset all of the toggles to be checked
        this.tracks.forEach(function (track) {
            track.isChecked = true;
        });
    };
    ScheduleFilterPage.prototype.applyFilters = function () {
        // Pass back a new array of track names to exclude
        var excludedTrackNames = this.tracks.filter(function (c) { return !c.isChecked; }).map(function (c) { return c.name; });
        this.dismiss(excludedTrackNames);
    };
    ScheduleFilterPage.prototype.dismiss = function (data) {
        // using the injected ViewController this page
        // can "dismiss" itself and pass back data
        this.viewCtrl.dismiss(data);
    };
    ScheduleFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule-filter',template:/*ion-inline-start:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\schedule-filter\schedule-filter.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">Cancel</button>\n\n    </ion-buttons>\n\n\n\n    <ion-title>\n\n      Filter Sessions\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button (click)="applyFilters()" strong>Done</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n\n\n  <ion-list>\n\n    <ion-list-header>Tracks</ion-list-header>\n\n\n\n    <ion-item *ngFor="let track of tracks" [attr.track]="track.name | lowercase">\n\n      <span item-start class="dot"></span>\n\n      <ion-label>{{track.name}}</ion-label>\n\n      <ion-toggle [(ngModel)]="track.isChecked" color="secondary"></ion-toggle>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    <button ion-item (click)="resetFilters()" detail-none class="reset-filters">\n\n      Reset All Filters\n\n    </button>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\schedule-filter\schedule-filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* ViewController */]])
    ], ScheduleFilterPage);
    return ScheduleFilterPage;
}());

//# sourceMappingURL=schedule-filter.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = (function () {
    function SignupPage(navCtrl, userData) {
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.signup = { username: '', password: '' };
        this.submitted = false;
    }
    SignupPage.prototype.onSignup = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.signup(this.signup.username);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__["a" /* TabsPage */]);
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\signup\signup.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n		<ion-title>Signup</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="login-page">\n\n\n\n	<div class="logo">\n\n		<img src="assets/img/appicon.svg" alt="Ionic Logo">\n\n	</div>\n\n\n\n	<form #signupForm="ngForm" novalidate>\n\n		<ion-list no-lines>\n\n			<ion-item>\n\n				<ion-label stacked color="primary">Username</ion-label>\n\n				<ion-input [(ngModel)]="signup.username" name="username" type="text" #username="ngModel" required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n\n				Username is required\n\n			</p>\n\n\n\n			<ion-item>\n\n				<ion-label stacked color="primary">Password</ion-label>\n\n				<ion-input [(ngModel)]="signup.password" name="password" type="password" #password="ngModel" required>\n\n				</ion-input>\n\n			</ion-item>\n\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n\n				Password is required\n\n			</p>\n\n		</ion-list>\n\n\n\n		<div padding>\n\n			<button ion-button (click)="onSignup(signupForm)" type="submit" block>Create</button>\n\n		</div>\n\n	</form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu, storage) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__["a" /* TabsPage */]).then(function () {
            _this.storage.set('hasSeenTutorial', 'true');
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\tutorial\tutorial.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n\n    <ion-buttons end *ngIf="showSkip">\n\n      <button ion-button (click)="startApp()" color="primary">跳过</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-bounce>\n\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n\n\n    <ion-slide>\n\n      <img src="assets/img/ica-slidebox-img-1.png" class="slide-image"/>\n\n      <h2 class="slide-title">\n\n       <b>课堂考勤系统</b>\n\n      </h2>\n\n      <p>\n\n        准确 详细 智能的记录学生出勤状态\n\n      </p>\n\n    </ion-slide>\n\n\n\n    <ion-slide >\n\n      <img src="assets/img/ica-slidebox-img-3.png" class="slide-image"/>\n\n      <h2 class="slide-title" >考勤系统?</h2>\n\n      <p>课程信息随时查</p>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img src="assets/img/ica-slidebox-img-2.png" class="slide-image"/>\n\n      <h2 class="slide-title">考勤系统?</h2>\n\n      <p>打卡签到更方便</p>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n\n      <h2 class="slide-title">准备好了吗?</h2>\n\n      <button ion-button icon-end large clear (click)="startApp()">\n\n        开始\n\n        <ion-icon name="arrow-forward"></ion-icon>\n\n      </button>\n\n    </ion-slide>\n\n\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\tutorial\tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_popover_about_popover__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_account_account__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_map_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_schedule_schedule__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_schedule_filter_schedule_filter__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_session_detail_session_detail__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_speaker_detail_speaker_detail__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_speaker_list_speaker_list__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_tabs_page_tabs_page__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tutorial_tutorial__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_support_support__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_conference_data__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_user_data__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_data_service_data_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_local_storage_local_storage__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular2_baidu_map__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_popover_about_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_session_detail_session_detail__["a" /* SessionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_support_support__["a" /* SupportPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_27_angular2_baidu_map__["a" /* BaiduMapModule */].forRoot({ ak: '0SjHi0DxOKBbBxGGnxcQbOyVE0iB7TFi' }),
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* ConferenceApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_20__pages_tabs_page_tabs_page__["a" /* TabsPage */], name: 'TabsPage', segment: 'tabs-page' },
                        { component: __WEBPACK_IMPORTED_MODULE_14__pages_schedule_schedule__["a" /* SchedulePage */], name: 'Schedule', segment: 'schedule' },
                        { component: __WEBPACK_IMPORTED_MODULE_16__pages_session_detail_session_detail__["a" /* SessionDetailPage */], name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
                        { component: __WEBPACK_IMPORTED_MODULE_15__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */], name: 'ScheduleFilter', segment: 'scheduleFilter' },
                        { component: __WEBPACK_IMPORTED_MODULE_19__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */], name: 'SpeakerList', segment: 'speakerList' },
                        { component: __WEBPACK_IMPORTED_MODULE_18__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */], name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
                        { component: __WEBPACK_IMPORTED_MODULE_13__pages_map_map__["a" /* MapPage */], name: 'Map', segment: 'map' },
                        { component: __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */], name: 'About', segment: 'about' },
                        { component: __WEBPACK_IMPORTED_MODULE_21__pages_tutorial_tutorial__["a" /* TutorialPage */], name: 'Tutorial', segment: 'tutorial' },
                        { component: __WEBPACK_IMPORTED_MODULE_22__pages_support_support__["a" /* SupportPage */], name: 'SupportPage', segment: 'support' },
                        { component: __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */], name: 'LoginPage', segment: 'login' },
                        { component: __WEBPACK_IMPORTED_MODULE_11__pages_account_account__["a" /* AccountPage */], name: 'AccountPage', segment: 'account' },
                        { component: __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__["a" /* SignupPage */], name: 'SignupPage', segment: 'signup' }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_about_popover_about_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_session_detail_session_detail__["a" /* SessionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_support_support__["a" /* SupportPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_23__providers_conference_data__["a" /* ConferenceData */],
                __WEBPACK_IMPORTED_MODULE_24__providers_user_data__["a" /* UserData */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_25__providers_data_service_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_26__providers_local_storage_local_storage__["a" /* LocalStorageProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service_data_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserData = (function () {
    function UserData(events, storage, http, dataService) {
        this.events = events;
        this.storage = storage;
        this.http = http;
        this.dataService = dataService;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
        this.TOKENS = 'tokens';
    }
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    ;
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    ;
    UserData.prototype.login = function (username, tokens) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.storage.set('lastLoginDate', Date());
        this.setUsername(username);
        this.storage.set(this.TOKENS, tokens);
        this.events.publish('user:login');
    };
    ;
    UserData.prototype.signup = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.storage.set('lastLoginDate', new Date());
        this.setUsername(username);
        this.events.publish('user:signup');
    };
    ;
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.getTokens = function () {
        return this.storage.get(this.TOKENS).then(function (value) {
            return value;
        });
    };
    UserData.prototype.setLongitude = function (key) {
        this.storage.set('longitude', key);
    };
    ;
    UserData.prototype.getLongitude = function () {
        return this.storage.get('longitude').then(function (value) {
            return value;
        });
    };
    UserData.prototype.setLatitude = function (key) {
        this.storage.set('latitude', key);
    };
    ;
    UserData.prototype.getLatitude = function () {
        return this.storage.get('latitude').then(function (value) {
            return value;
        });
    };
    UserData.prototype.setMapOption = function (key) {
        this.storage.set('mapOption', key);
    };
    ;
    UserData.prototype.getMapOption = function () {
        return this.storage.get('mapOption').then(function (value) {
            return value;
        });
    };
    UserData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__data_service_data_service__["a" /* DataService */]])
    ], UserData);
    return UserData;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_account__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_map_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_schedule_schedule__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_speaker_list_speaker_list__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_conference_data__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_user_data__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { SignupPage } from '../pages/signup/signup';




// import { SupportPage } from '../pages/support/support';


var ConferenceApp = (function () {
    function ConferenceApp(events, userData, menu, platform, confData, storage, splashScreen) {
        var _this = this;
        this.events = events;
        this.userData = userData;
        this.menu = menu;
        this.platform = platform;
        this.confData = confData;
        this.storage = storage;
        this.splashScreen = splashScreen;
        // List of pages that can be navigated to from the left menu
        // the left menu only works after login
        // the login page disables the left menu
        this.appPages = [
            { title: '公告', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_10__pages_schedule_schedule__["a" /* SchedulePage */], index: 0, icon: 'calendar' },
            { title: '签到', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_11__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */], index: 1, icon: 'contacts' },
            { title: '地图', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_7__pages_map_map__["a" /* MapPage */], index: 2, icon: 'map' },
            { title: '关于', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */], index: 3, icon: 'information-circle' }
        ];
        this.loggedInPages = [
            { title: '个人信息', name: 'AccountPage', component: __WEBPACK_IMPORTED_MODULE_5__pages_account_account__["a" /* AccountPage */], icon: 'person' },
            // { title: '其他', name: 'SupportPage', component: SupportPage, icon: 'help' },
            { title: '注销', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: '登录', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
        ];
        // Check if the user has already seen the tutorial
        this.storage.get('hasSeenTutorial')
            .then(function (hasSeenTutorial) {
            _this.storage.get("lastLoginDate").then(function (lastLoginDate) {
                var hours = Math.floor((new Date().getTime() - Date.parse(lastLoginDate)) / (3600 * 1000));
                if (hasSeenTutorial) {
                    _this.storage.get('hasLoggedIn').then(function (hasLoggedIn) {
                        if (hasLoggedIn && hours > 1) {
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */];
                            // load the conference data
                            confData.load();
                        }
                        else {
                            _this.userData.logout();
                            _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
                        }
                    });
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__["a" /* TutorialPage */];
                }
                _this.platformReady();
            });
        });
        // decide which menu items should be hidden by current login status stored in local storage
        this.userData.hasLoggedIn().then(function (hasLoggedIn) {
            _this.enableMenu(hasLoggedIn === true);
        });
        this.enableMenu(true);
        this.listenToLoginEvents();
    }
    ConferenceApp.prototype.openPage = function (page) {
        var params = {};
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            // Set the root of the nav with params if it's a tab index
            this.nav.setRoot(page.name, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            this.userData.logout();
        }
    };
    ConferenceApp.prototype.openTutorial = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__["a" /* TutorialPage */]);
    };
    ConferenceApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    ConferenceApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    ConferenceApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
        });
    };
    ConferenceApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
    ], ConferenceApp.prototype, "nav", void 0);
    ConferenceApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\project\CAS\project\mobile\class-attendance-system\src\app\app.template.html"*/'<ion-split-pane>\n\n\n\n  <!-- logged out menu -->\n\n  <ion-menu id="loggedOutMenu" [content]="content">\n\n\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>菜单</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content class="outer-content">\n\n\n\n      <ion-list>\n\n        <ion-list-header>\n\n          导航\n\n        </ion-list-header>\n\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n\n\n      <ion-list>\n\n        <ion-list-header>\n\n          个人中心\n\n        </ion-list-header>\n\n        <button ion-item menuClose *ngFor="let p of loggedOutPages" (click)="openPage(p)">\n\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n\n\n      <ion-list>\n\n        <ion-list-header>\n\n          其他\n\n        </ion-list-header>\n\n        <button ion-item menuClose (click)="openTutorial()">\n\n          <ion-icon item-start name="hammer"></ion-icon>\n\n          展示\n\n        </button>\n\n      </ion-list>\n\n    </ion-content>\n\n\n\n  </ion-menu>\n\n\n\n  <!-- logged in menu -->\n\n  <ion-menu id="loggedInMenu" [content]="content">\n\n\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>菜单</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content class="outer-content">\n\n\n\n      <ion-list>\n\n        <ion-list-header>\n\n          导航\n\n        </ion-list-header>\n\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n\n\n      <ion-list>\n\n        <ion-list-header>\n\n          个人中心\n\n        </ion-list-header>\n\n        <button ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n\n\n      <ion-list>\n\n        <ion-list-header>\n\n          其他\n\n        </ion-list-header>\n\n        <button ion-item menuClose (click)="openTutorial()">\n\n          <ion-icon item-start name="hammer"></ion-icon>\n\n          展示\n\n        </button>\n\n      </ion-list>\n\n\n\n    </ion-content>\n\n\n\n  </ion-menu>\n\n\n\n  <!-- main navigation -->\n\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n\n\n</ion-split-pane>\n\n'/*ion-inline-end:"C:\project\CAS\project\mobile\class-attendance-system\src\app\app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_13__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_12__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], ConferenceApp);
    return ConferenceApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeakerDetailPage = (function () {
    function SpeakerDetailPage(dataProvider, navCtrl, navParams) {
        this.dataProvider = dataProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SpeakerDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.dataProvider.load().subscribe(function (data) {
            if (data && data.speakers) {
                for (var _i = 0, _a = data.speakers; _i < _a.length; _i++) {
                    var speaker = _a[_i];
                    if (speaker && speaker.id === _this.navParams.data.speakerId) {
                        _this.speaker = speaker;
                        break;
                    }
                }
            }
        });
    };
    SpeakerDetailPage.prototype.goToSessionDetail = function (session) {
        this.navCtrl.push('SessionDetailPage', { sessionId: session.id });
    };
    SpeakerDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speaker-detail',template:/*ion-inline-start:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\speaker-detail\speaker-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{speaker?.name}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="speaker-detail">\n\n  <div text-center *ngIf="speaker">\n\n    <img [src]="speaker.profilePic" [alt]="speaker.name"><br>\n\n\n\n    <button ion-button icon-only clear small color="twitter">\n\n      <ion-icon name="logo-twitter"></ion-icon>\n\n    </button>\n\n    <button ion-button icon-only clear small color="github">\n\n      <ion-icon name="logo-github"></ion-icon>\n\n    </button>\n\n    <button ion-button icon-only clear small color="instagram">\n\n      <ion-icon name="logo-instagram"></ion-icon>\n\n    </button>\n\n  </div>\n\n\n\n  <p>{{speaker?.about}}</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\speaker-detail\speaker-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], SpeakerDetailPage);
    return SpeakerDetailPage;
}());

//# sourceMappingURL=speaker-detail.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupportPage = (function () {
    function SupportPage(navCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.submitted = false;
    }
    SupportPage.prototype.ionViewDidEnter = function () {
        var toast = this.toastCtrl.create({
            message: 'This does not actually send a support request.',
            duration: 3000
        });
        toast.present();
    };
    SupportPage.prototype.submit = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.supportMessage = '';
            this.submitted = false;
            var toast = this.toastCtrl.create({
                message: 'Your support request has been sent.',
                duration: 3000
            });
            toast.present();
        }
    };
    // If the user enters text in the support question and then navigates
    // without submitting first, ask if they meant to leave the page
    SupportPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        // If the support message is empty we should just navigate
        if (!this.supportMessage || this.supportMessage.trim().length === 0) {
            return true;
        }
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: 'Leave this page?',
                message: 'Are you sure you want to leave this page? Your support message will not be submitted.'
            });
            alert.addButton({ text: 'Stay', handler: reject });
            alert.addButton({ text: 'Leave', role: 'cancel', handler: resolve });
            alert.present();
        });
    };
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\support\support.html"*/'<ion-header>\n\n\n\n	<ion-navbar>\n\n		<button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n		<ion-title>Support</ion-title>\n\n	</ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n	<div class="logo">\n\n		<img src="assets/img/appicon.svg" alt="Ionic Logo">\n\n	</div>\n\n\n\n	<form #submitForm="ngForm" novalidate (ngSubmit)="submit(submitForm)">\n\n		<ion-list no-lines>\n\n			<ion-item>\n\n				<ion-label stacked color="primary">Enter your support message below</ion-label>\n\n				<ion-textarea [(ngModel)]="supportMessage" name="supportQuestion" #supportQuestion="ngModel" rows="6" required></ion-textarea>\n\n			</ion-item>\n\n		</ion-list>\n\n\n\n		<p ion-text [hidden]="supportQuestion.valid || submitted === false" color="danger" padding-left>\n\n			Support message is required\n\n		</p>\n\n\n\n		<div padding>\n\n			<button ion-button block type="submit">Submit</button>\n\n		</div>\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\support\support.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ToastController */]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LocalStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LocalStorageProvider = (function () {
    function LocalStorageProvider() {
        this.storage = window.localStorage;
        console.log('Hello LocalStorageProvider Provider');
    }
    LocalStorageProvider.prototype.get = function (key, defaultValue) {
        var value = this.storage.getItem(key);
        try {
            value = JSON.parse(value);
        }
        catch (error) {
            value = null;
        }
        if (value == null && defaultValue) {
            value = defaultValue;
        }
        return value;
    };
    LocalStorageProvider.prototype.set = function (key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    };
    LocalStorageProvider.prototype.remove = function (key) {
        this.storage.removeItem(key);
    };
    LocalStorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageProvider);
    return LocalStorageProvider;
}());

//# sourceMappingURL=local-storage.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_service_data_service__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConferenceData = (function () {
    function ConferenceData(http, user, dateService) {
        this.http = http;
        this.user = user;
        this.dateService = dateService;
    }
    ConferenceData.prototype.load = function () {
        if (this.data) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.data);
        }
        else {
            this.data = this.http.get('/rest/classNotice');
            console.log(this.data);
            return this.data;
        }
    };
    ConferenceData.prototype.processData = function (data) {
        var _this = this;
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking speakers to sessions
        this.data = data.json();
        this.data.tracks = [];
        // loop through each day in the schedule
        this.data.schedule.forEach(function (day) {
            // loop through each timeline group in the day
            day.groups.forEach(function (group) {
                // loop through each session in the timeline group
                group.sessions.forEach(function (session) {
                    session.speakers = [];
                    if (session.speakerNames) {
                        session.speakerNames.forEach(function (speakerName) {
                            var speaker = _this.data.speakers.find(function (s) { return s.name === speakerName; });
                            if (speaker) {
                                session.speakers.push(speaker);
                                speaker.sessions = speaker.sessions || [];
                                speaker.sessions.push(session);
                            }
                        });
                    }
                    if (session.tracks) {
                        session.tracks.forEach(function (track) {
                            if (_this.data.tracks.indexOf(track) < 0) {
                                _this.data.tracks.push(track);
                            }
                        });
                    }
                });
            });
        });
        return this.data;
    };
    ConferenceData.prototype.getTimeline = function (dayIndex, queryText, excludeTracks, segment) {
        var _this = this;
        if (queryText === void 0) { queryText = ''; }
        if (excludeTracks === void 0) { excludeTracks = []; }
        if (segment === void 0) { segment = 'all'; }
        return this.load().map(function (data) {
            var day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            var queryWords = queryText.split(' ').filter(function (w) { return !!w.trim().length; });
            day.groups.forEach(function (group) {
                group.hide = true;
                group.sessions.forEach(function (session) {
                    // check if this session should show or not
                    _this.filterSession(session, queryWords, excludeTracks, segment);
                    if (!session.hide) {
                        // if this session is not hidden then this group should show
                        group.hide = false;
                        day.shownSessions++;
                    }
                });
            });
            return day;
        });
    };
    ConferenceData.prototype.filterSession = function (session, queryWords, excludeTracks, segment) {
        var matchesQueryText = false;
        if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach(function (queryWord) {
                if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                    matchesQueryText = true;
                }
            });
        }
        else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
        }
        // if any of the sessions tracks are not in the
        // exclude tracks then this session passes the track test
        var matchesTracks = false;
        session.tracks.forEach(function (trackName) {
            if (excludeTracks.indexOf(trackName) === -1) {
                matchesTracks = true;
            }
        });
        // if the segement is 'favorites', but session is not a user favorite
        // then this session does not pass the segment test
        var matchesSegment = false;
        if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
                matchesSegment = true;
            }
        }
        else {
            matchesSegment = true;
        }
        // all tests must be true if it should not be hidden
        session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
    };
    ConferenceData.prototype.getSpeakers = function () {
        return this.load().map(function (data) {
            return data.speakers.sort(function (a, b) {
                var aName = a.name.split(' ').pop();
                var bName = b.name.split(' ').pop();
                return aName.localeCompare(bName);
            });
        });
    };
    ConferenceData.prototype.getTracks = function () {
        return this.load().map(function (data) {
            return data.tracks.sort();
        });
    };
    ConferenceData.prototype.getMap = function () {
        return this.load().map(function (data) {
            return data.map;
        });
    };
    ConferenceData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_6__data_service_data_service__["a" /* DataService */]])
    ], ConferenceData);
    return ConferenceData;
}());

//# sourceMappingURL=conference-data.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_mergeMap__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_mergeMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DataService = (function () {
    function DataService(http, loadingCtrl, alertCtrl, toastCtrl, storage, network) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.network = network;
        // Base Url for API
        //private baseUrl: string = (location.hostname === "localhost") ? 'http://172.17.170.164:8080/jeecg/rest/' : 'http://172.17.170.164:8080/jeecg/rest/';
        this.baseUrl = (location.hostname === "localhost") ? 'http://47.106.117.191/rest/' : 'http://47.106.117.191/rest/';
        // default error popups
        this.errorPopup = true;
        // cache flag
        this.cached = true;
        /**
         * Default Headers used in all requests.
         */
        this.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        // check device is online
        console.log('Data Service Initialize');
    }
    /**
     * Show loading spinner
     *
     * @param loadingText Loading text
     */
    DataService.prototype.withLoader = function (loadingText) {
        if (loadingText === void 0) { loadingText = 'Loading...'; }
        this.spinner = this.loadingCtrl.create({ content: loadingText, dismissOnPageChange: true });
        return this;
    };
    /**
     * Dont show popups on error
     */
    DataService.prototype.noErrorPopup = function () {
        this.errorPopup = false;
        return this;
    };
    /**
     * Ignore cache and make fresh refresh
     */
    DataService.prototype.fresh = function () {
        this.cached = false;
        return this;
    };
    /**
     * Make a `get` request
     *
     * @param url url to hit
     * @param options options for request
     */
    DataService.prototype.get = function (url, options) {
        return this.request(__WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestMethod */].Get, url, {}, options);
    };
    /**
     * Make a `post` request
     *
     * @param url url to hit
     * @param body json data to be sent as post
     * @param options options for request
     * @returns It returns an Observable from the request.
     */
    DataService.prototype.post = function (url, body, options) {
        return this.request(__WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestMethod */].Post, url, body, options);
    };
    /**
     * Make a `put` request
     *
     * @param url url to hit
     * @param body json data to be sent as post
     * @param options options for request
     * @returns It returns an Observable from the request.
     */
    DataService.prototype.put = function (url, body, options) {
        return this.request(__WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestMethod */].Put, url, body, options);
    };
    /**
     * Make a `delete` request
     *
     * @param url url to hit
     * @param options options for request
     * @returns It returns an Observable from the request.
     */
    DataService.prototype.delete = function (url, options) {
        return this.request(__WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestMethod */].Delete, url, null, options);
    };
    /**
     * Make a `patch` request
     *
     * @param url url to hit
     * @param body json data to be sent as post
     * @param options options for request
     * @returns It returns an Observable from the request.
     */
    DataService.prototype.patch = function (url, body, options) {
        return this.request(__WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestMethod */].Patch, url, body, options);
    };
    /**
     * Make a `head` request
     *
     * @param url url to hit
     * @param options options for request
     * @returns It returns an Observable from the request.
     */
    DataService.prototype.head = function (url, options) {
        return this.request(__WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestMethod */].Head, url, null, options);
    };
    /**
     * This makes request and and shows loader if asked
     *
     * @param method RequestMethod to be used
     * @param url  URL for request
     * @param body body can be json object which will be stringify
     * @param options Any RequestOptionsArgs you want to pass
     * @returns It returns an Observable from the request.
     */
    DataService.prototype.request = function (method, url, body, options) {
        var _this = this;
        var requestOptions = Object.assign({
            method: method,
            url: this.generateUrl(url),
            body: JSON.stringify(body)
        }, this.generateOptions(options));
        // check network state, online get from api
        if (this.network.type === 'none') {
            var toast = this.toastCtrl.create({
                message: 'Internet connection appears offline.',
                duration: 5000,
                showCloseButton: true,
                dismissOnPageChange: true
            });
            toast.present();
        }
        // check if loader needs to be shown
        if (this.spinner)
            this.spinner.present();
        // check if its a fresh request, dont return cache
        // Add General headers
        if (!requestOptions.headers) {
            requestOptions.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        }
        return this.getAuthToken().flatMap(function (data) {
            if (data) {
                requestOptions.headers.append('X-AUTH-TOKEN', data);
            }
            // make request
            return _this.http.request(new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Request */](requestOptions))
                .map(_this.responseHandler, _this)
                .catch(_this.handleError.bind(_this));
        });
    };
    /**
     * Generate url for all requests. It uses baseUrl if url doesn't start with 'http'' or 'www'.
     * @param url     Url string
     * @returns       Generated url string
     */
    DataService.prototype.generateUrl = function (url) {
        return !!(url && url.match(/^((?:http(|s):\/\/www\.)|(?:http:\/\/))/)) ? url : this.baseUrl + url;
    };
    /**
     * Handler which transform response to JavaScript format if response exists.
     * @param resp     Http response
     * @returns        Http response
     */
    DataService.prototype.responseHandler = function (resp) {
        // rest spinner
        this.destroySpinner();
        if (!!resp.text()) {
            return resp.json();
        }
        return resp;
    };
    DataService.prototype.destroySpinner = function () {
        if (this.spinner)
            this.spinner.dismiss();
        this.spinner = undefined;
    };
    /**
     * Return auth token from promise
     */
    DataService.prototype.getAuthToken = function () {
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].fromPromise(this.storage.get('tokens'));
    };
    /**
     * Handle error occured during request
     * @param error error observer
     */
    DataService.prototype.handleError = function (error) {
        // rest spinner
        this.destroySpinner();
        // Handle validation and Auth error
        var errMsg = '';
        var alertTitle;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_http__["f" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            // Unauthorized
            if (error.status >= 400) {
                // if validation error
                if (error.status === 422) {
                    alertTitle = 'Invalid';
                    // build a string from laravel validation error response
                    for (var feild in body) {
                        var errFeild = body[feild];
                        errMsg += "<p> " + errFeild[0] + " </p>";
                    }
                }
                else {
                    alertTitle = error.statusText || 'Error';
                    errMsg = err;
                }
            }
            // show the alert
            if (this.errorPopup) {
                // create new alert
                this.alert = this.alertCtrl.create({
                    title: alertTitle,
                    subTitle: errMsg,
                    buttons: ['Dismiss']
                });
                if (error.status !== 0) {
                    this.alert.present();
                }
                this.alert = undefined;
            }
        }
        else {
            errMsg = error.message ? error.message : error.toString();
            console.log(errMsg);
        }
        // handle error
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(error);
    };
    /**
     * Handler which generate options for all requests from headers.
     * @param options   Request options arguments
     * @returns         Request options arguments
     */
    DataService.prototype.generateOptions = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        if (!options.headers) {
            options.headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        }
        Object.keys(this.headers)
            .filter(function (key) { return _this.headers.hasOwnProperty(key); })
            .forEach(function (key) {
            options.headers.append(key, _this.headers[key]);
        });
        return options;
    };
    DataService.prototype.login = function (username, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var data = {
                username: username,
                password: password
            };
            _this.http.post(_this.baseUrl + 'tokens', data).subscribe(function (result) {
                resolve(result.json());
                _this.storage.set('tokens', result.json());
                _this.storage.set('username', data.username);
                _this.storage.set('hasSeenTutorial', true);
            }, function (error) {
                reject(error.json());
            });
        });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["s" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */]])
    ], DataService);
    return DataService;
}());

//# sourceMappingURL=data-service.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schedule_schedule__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__speaker_list_speaker_list__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_map__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(navParams) {
        // set the root pages for each tab
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__schedule_schedule__["a" /* SchedulePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__speaker_list_speaker_list__["a" /* SpeakerListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__map_map__["a" /* MapPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\tabs-page\tabs-page.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" name="conference">\n\n  <ion-tab [root]="tab1Root" tabTitle="公告" tabIcon="calendar" tabUrlPath="conference-schedule"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="签到" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="定位" tabIcon="map"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="关于" tabIcon="information-circle"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\project\CAS\project\mobile\class-attendance-system\src\pages\tabs-page\tabs-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs-page.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.js.map