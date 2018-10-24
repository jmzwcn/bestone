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
    let category = this.activatedRoute.snapshot.params.category;
    if (!category) {
      category = 'general';
    }
    this.newsService
      .getData('top-headlines?country=us&category=' + category)
      .subscribe(data => {
        this.data = data;
      });
  }

  gotoNewsDetail(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-detail']);
  }
}
