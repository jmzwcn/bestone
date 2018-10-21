import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

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
    private barcodeScanner: BarcodeScanner) { }

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

  scanQR() {
    const options: BarcodeScannerOptions = {
      showTorchButton: true, // iOS and Android
    };
    this.barcodeScanner.scan(options).then(barcodeData => {
      // console.log('Barcode data', barcodeData);
      alert(barcodeData.text);
    }).catch(err => {
      console.log('Error', err);
    });
  }
}
