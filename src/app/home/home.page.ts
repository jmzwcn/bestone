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
    // this.map.center([116.2314939, 40.2071555]);
  }

  ionViewDidEnter() {
    this.map = new AMap.Map(this.map_container.nativeElement, {
      view: new AMap.View2D({ // 创建地图二维视口
        zoom: 11, // 设置地图缩放级别
        rotateEnable: true,
        // center: [116.2314939, 40.2071555], // 设置地图中心点坐标
        showBuildingBlock: true
      })
    });
    // AMap.service('AMap.Geolocation', () => {
    //   const geolocation = new AMap.Geolocation({});
    //   this.map.addControl(geolocation);
    // });
  }

  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      AMap.service('AMap.Geocoder', () => {
        const positionInfo = [resp.coords.longitude + '', resp.coords.latitude + ''];
        this.map.setCenter(positionInfo);

        const geocoder = new AMap.Geocoder({});
        geocoder.getAddress(positionInfo, (status, result) => {
          if (status === 'complete' && result.info === 'OK') {
            const marker = new AMap.Marker({
              map: this.map,
              position: positionInfo
            });
            marker.setLabel({
              offset: new AMap.Pixel(20, 20), // 修改label相对于maker的位置
              content: result.regeocode.formattedAddress
            });
          } else {
            console.log('获取地址失败');
          }
        });
      });

    }).catch((error) => {
      console.log('Error getting location', error);
    });

    //  let watch = this.geolocation.watchPosition();
    //  watch.subscribe((data) => {
    //   // data can be a set of coordinates, or an error (if an error occurred).
    //   // data.coords.latitude
    //   // data.coords.longitude
    //  });
  }
}
