import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { NewsPage } from './news/news.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertCtrl: AlertController,
    private newsPage: NewsPage,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.platform.backButton.subscribe(async () => {
      const alert = await this.alertCtrl.create({
        header: '',
        message: '您确定要退出<strong>App</strong>吗?',
        buttons: [
          {
            text: '取消',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }
          }, {
            text: '确定',
            handler: () => {
              console.log('Confirm Okay');
              navigator['app'].exitApp();
            }
          }
        ]
      });
      await alert.present();
    });
  }

  refresh(category) {
    this.newsPage.refresh(category);
  }
}
