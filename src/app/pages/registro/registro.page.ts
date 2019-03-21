import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
info = {}
nombre:string
documento:string
username:string
password:string
  constructor(public afAuth:AngularFireAuth, private router:Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  async guardar() {
    console.log(this.info);
    const {nombre, documento, username,password}= this
   // if(password !== cpassword){
    //	return console.log("contraseñas no coinciden");
    //}
    try {
    const res= await this.afAuth.auth.createUserWithEmailAndPassword(username+'@hotmail.com',
    	password)
    console.log(res)
} catch(error){
console.dir(error)
}


  }
}
