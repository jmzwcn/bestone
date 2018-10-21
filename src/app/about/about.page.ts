import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {
  constructor(private barcodeScanner: BarcodeScanner) { }

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
