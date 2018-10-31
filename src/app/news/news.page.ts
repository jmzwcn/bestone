import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  // keyword: String = 'James';
  data: any;
  constructor(
    private newsService: NewsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    const category = this.activatedRoute.snapshot.params.category;
    if (category) {
      this.newsService.category = category;
    }
    this.newsService
      .getData('top-headlines?country=us&category=' + this.newsService.category)
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
      header: '全互联网搜索',
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
            console.log(data.keyword);
            // this.refresh();
          }
        }
      ]
    });
    await alert.present();
  }

}
