import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import {isNullOrUndefined} from 'util';

import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
	constructor(private router: Router, private afaut: AngularFireAuth){
    
  }
  canActivate(
  	next: ActivatedRouteSnapshot,
  	state: RouterStateSnapshot): Observable<boolean> |
  Promise<boolean> | boolean{

  	return this.afaut.authState.pipe(map(auth => {
  		if(isNullOrUndefined(auth)){
  			this.router.navigate(['/iniciar'])
  			return false;
  		}else{
  			return true
  		}
//console.log(auth);
//return false;
  	}))
  	
  }
}
