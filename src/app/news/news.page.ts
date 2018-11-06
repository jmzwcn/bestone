import { Component, ChangeDetectorRef } from '@angular/core';
import { NewsService } from '../news.service';
import { Router, Params } from '@angular/router';
import { AlertController, PopoverController, NavController } from '@ionic/angular';

import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage {
  data: any;
  category = 'general';
  constructor(
    private newsService: NewsService,
    private router: Router,
    private alertController: AlertController,
    private popoverController: PopoverController,
    private ref: ChangeDetectorRef) {
    this.refresh();
  }

  refresh() {
    this.newsService
      .getData('top-headlines?country=us&category=' + this.category)
      .subscribe(data => {
        this.data = data;
        this.data.articles = this.data.articles.filter(article => article.content);
      });
  }

  gotoNewsDetail(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-detail']);
  }


  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: '全网热搜',
      inputs: [
        {
          name: 'keyword',
          type: 'text',
          placeholder: 'LeBron James'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            this.search(data.keyword);
          }
        }
      ]
    });
    await alert.present();
  }

  search(keyword) {
    this.newsService
      .getData('everything?q=' + keyword)
      .subscribe(data => {
        this.data = data;
        this.data.articles = this.data.articles.filter(article => article.content);
        this.ref.detectChanges();
      });
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });

    await popover.present();
    const result = await popover.onDidDismiss();
    this.category = result.data;
    this.refresh();
  }
}
