import { Component, OnInit } from '@angular/core';
import {RESTAURANTES} from '../../../data/data';
import {Restaurante} from '../../../interfaces/res.interface';
import {Router} from '@angular/router';
@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage implements OnInit {
resta:any[]= [];
  constructor(private router: Router) { 
  this.resta= RESTAURANTES.slice(0);
}

  ngOnInit() {
  }
openNavDetailsPage(resta:Restaurante) {
  console.log('voy a ir a otro lado');
  this.router.navigate(['detallesr/',resta.name]);
  }
}
