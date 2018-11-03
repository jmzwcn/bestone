import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var AMap;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  @ViewChild('map_container') map_container: ElementRef;
  map: any; // 地图对象

  constructor(private geolocation: Geolocation) {
  }

  ionViewDidEnter() {
    this.map = new AMap.Map(this.map_container.nativeElement, {
      view: new AMap.View2D({ // 创建地图二维视口
        zoom: 11, // 设置地图缩放级别
        rotateEnable: true,
        center: [116.2314939, 40.2071555], // 设置地图中心点坐标
        showBuildingBlock: true
      })
    });
  }
}
