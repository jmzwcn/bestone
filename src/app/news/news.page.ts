import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  category = 'general';
  data: any;
  constructor(
    private newsService: NewsService,
    private router: Router) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.newsService
      .getData('top-headlines?country=us&category=' + this.category)
      .subscribe(data => {
        this.data = data;
      });
    // this.router.navigate(['/']);
  }

  gotoNewsDetail(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-detail']);
  }
}
