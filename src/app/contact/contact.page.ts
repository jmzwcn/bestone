import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

declare let AMap;

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {
  constructor(
    private geolocation: Geolocation,
    private barcodeScanner: BarcodeScanner) { }

  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude + ', ' + resp.coords.longitude);

      AMap.service('AMap.Geocoder', () => {
        const geocoder = new AMap.Geocoder({
          // city: "010"
        });
        console.log(geocoder, 'fuwu');
        const positionInfo = [resp.coords.longitude + '', resp.coords.latitude + ''];
        console.log(positionInfo);
        geocoder.getAddress(positionInfo, (status, result) => {
          console.log(status, result, '转换定位信息');
          if (status === 'complete' && result.info === 'OK') {
            // 获得了有效的地址信息:
            alert(result.regeocode.formattedAddress);
            // console.log(result.addresscomponent.building);
            // this.formattedAddress = result.regeocode.formattedAddress;
          } else {
            // 获取地址失败
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
