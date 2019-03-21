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
export class NologinGuard implements CanActivate {
  constructor(private router: Router, private afaut: AngularFireAuth){}

  canActivate(
  	next: ActivatedRouteSnapshot,
  	state: RouterStateSnapshot): Observable<boolean> |
  Promise<boolean> | boolean{

  	return this.afaut.authState.pipe(map(auth => {
  		if(isNullOrUndefined(auth)){
  			return true;
  		}else{
  			this.router.navigate(['/usuario'])
  			return false;
  			  		}
//console.log(auth);
//return false;
  	}))
  	
  }
}
