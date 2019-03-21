import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {NologinGuard} from './guards/nologin.guard';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'usuario', loadChildren: './pages/usuario/usuario.module#UsuarioPageModule',canActivate:[AuthGuard] },
  { path: 'restaurantes', loadChildren: './pages/restaurantes/restaurantes.module#RestaurantesPageModule' },
  { path: 'registro', loadChildren: './pages/registro/registro.module#RegistroPageModule' },
  { path: 'iniciar', loadChildren: './pages/iniciar/iniciar.module#IniciarPageModule', canActivate:[NologinGuard]},
  { path: 'detallesr/:id', loadChildren: './pages/detallesr/detallesr.module#DetallesrPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
