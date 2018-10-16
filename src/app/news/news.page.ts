import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  data: any;
  slideOpts = {
    effect: 'cube'
  };
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService
      .getData('top-headlines?language=en')
      .subscribe(data => {
        console.log(data);
        this.data = data;
      });
  }

  onGotoNewsDetail(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-detail']);
  }
}
