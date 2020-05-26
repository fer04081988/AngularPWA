import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ArbolNavegacionComponent } from './arbol-navegacion/arbol-navegacion.component';
import { MapaAutoserviciosComponent } from './mapa-autoservicios/mapa-autoservicios.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'arbolNavegacion', component: ArbolNavegacionComponent },
  { path: 'mapaAutoservicios', component: MapaAutoserviciosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, ArbolNavegacionComponent, MapaAutoserviciosComponent];
