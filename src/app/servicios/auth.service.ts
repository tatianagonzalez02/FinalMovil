import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {promise} from 'protractor';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth:AngularFireAuth, private router: Router) { }

  login(email:string, password:string){
  	return new Promise((resolve,rejected)=>{
this.afauth.auth.signInWithEmailAndPassword(email,password).then(user=>{
	resolve(user);
  		//console.log('Estas logeado'+res)
  	}).catch(err => rejected(err));

  	})
  	
  }
  logout(){
    this.afauth.auth.signOut().then(()=>{
      this.router.navigate(['/iniciar']);
    });
  }
}
