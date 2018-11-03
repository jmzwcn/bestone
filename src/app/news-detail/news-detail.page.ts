import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  article;
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.article = this.newsService.currentArticle;
  }

  onBack() {
    this.router.navigate(['/news/' + this.newsService.category]);
   // this.article = null;
  }
}
