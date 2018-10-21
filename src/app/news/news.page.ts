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
  constructor(
    private newsService: NewsService,
    private router: Router) { }

  ngOnInit() {
    this.refresh('general');
  }

  refresh(category) {
    this.newsService
      .getData('top-headlines?country=us&category=' + category)
      .subscribe(data => {
        // console.log(data);
        this.data = data;
      });
    this.router.navigateByUrl('/news', { skipLocationChange: true }).then(() => this.router.navigate(['/news']));
    // alert(category);
  }

  gotoNewsDetail(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-detail']);
  }
}
