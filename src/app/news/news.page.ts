import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  data: any;
  constructor(
    private newsService: NewsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

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
}
