import { Component, OnInit } from '@angular/core';
import {RESTAURANTES} from '../../../data/data';
import {Restaurante} from '../../../interfaces/res.interface';
import {ActivatedRoute} from '@angular/router';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
@Component({
  selector: 'app-detallesr',
  templateUrl: './detallesr.page.html',
  styleUrls: ['./detallesr.page.scss'],
})
export class DetallesrPage implements OnInit {
id:String;
re:any;
scannedData: any ={};
  barcodeScannerOptions: BarcodeScannerOptions;
  constructor(private route: ActivatedRoute, private barcodeScanner: BarcodeScanner) {
  this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true }
  }

  ngOnInit() {
  	this.id = this.route.snapshot.paramMap.get('id');
  	 console.log(this.id);
  	this.re = RESTAURANTES.find(p => p.name === this.id);
  }
  viewMapa(){

  }
  

}
