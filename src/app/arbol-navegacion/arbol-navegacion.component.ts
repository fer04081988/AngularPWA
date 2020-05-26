import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faMapMarked } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import data from '../../assets/tiendas.json';



@Component({
  selector: 'app-arbol-navegacion',
  templateUrl: './arbol-navegacion.component.html',
  styleUrls: ['./arbol-navegacion.component.scss']
})
export class ArbolNavegacionComponent implements OnInit {

  faSearch = faSearch;
  faMapMarked = faMapMarked;
  sucursales = [];
  Autoservicios = [];
  Formatos = [];
  Zonas = [];
  Tienda = [];
  filter = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}