import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import {Router, RouterEvent} from '@angular/router';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import {AuthService} from '../../servicios/auth.service';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
word=String;
selectedPath = '';
 scannedData: any ={};
  barcodeScannerOptions: BarcodeScannerOptions;
  constructor(private router:Router, private navCtrl: NavController,
  	public loadingController: LoadingController,private route: ActivatedRoute,
  	 private barcodeScanner: BarcodeScanner, public authservice: AuthService) {
  	 

  this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true }
   }

  ngOnInit() {
  }
  
salir(){
this.authservice.logout();

}
viewQR(){
  	this.barcodeScanner.scan().then((barcodeData) => {
      //alert('Barcode data ' + JSON.stringify(barcodeData));
      this.scannedData = barcodeData;
      //this.iap.create(this.scannedData.text, '_system');
      if((this.scannedData)=="GANASTE"){
      	alert('Felicidades has ganado una cena. No olvides presentar tu documento');
      }else{
      	alert('Esta vez No ganaste. Gracias por visitarnos!')
      }
    }).catch(err => {
      console.log('Error', err);
    });
  }

viewPerfil(){
this.router.navigateByUrl(`/usuario`);
}

viewRestaurantes(){
this.router.navigateByUrl(`/restaurantes`);
}
}
