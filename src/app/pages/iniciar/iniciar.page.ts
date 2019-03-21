import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
//import {AngularFireAuth} from '@angular/fire/auth';
//import {auth} from 'firebase/app';
import {AuthService} from '../../servicios/auth.service';
@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
})
export class IniciarPage implements OnInit {
info = {}
username: string=""
password:string=""
  constructor(public authService: AuthService,
    private router:Router, private navCtrl: NavController) { }

  ngOnInit() {
  }
  
ingresar() {

  this.authService.login(this.username,this.password).then(res => {
  this.router.navigateByUrl('/usuario');
    }).catch(err => alert('Los datos son incorrectos o no existe el usuario'))
   }   
  
}
