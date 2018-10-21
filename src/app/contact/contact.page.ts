import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {
  constructor(private barcodeScanner: BarcodeScanner) { }

  scanQR() {
    const options: BarcodeScannerOptions = {
      //  showFlipCameraButton: true, // iOS and Android
      showTorchButton: true, // iOS and Android
    };
    this.barcodeScanner.scan(options).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      alert(barcodeData.text);
    }).catch(err => {
      console.log('Error', err);
    });
  }
}
