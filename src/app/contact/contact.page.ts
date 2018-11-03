import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

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
      alert(resp.coords.latitude + ', ' + resp.coords.longitude);
      // resp.coords.latitude
      // resp.coords.longitude
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
