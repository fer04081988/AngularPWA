import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { google } from "google-maps";

@Component({
  selector: 'app-mapa-autoservicios',
  templateUrl: './mapa-autoservicios.component.html',
  styleUrls: ['./mapa-autoservicios.component.scss']
})

export class MapaAutoserviciosComponent implements AfterViewInit {
  faArrowLeft = faArrowLeft;

  title = 'angular-gmap';
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 19.3046325;
  lng = -99.2059748;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
   center: this.coordinates,
   zoom: 14
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
    this.mapOptions);
    this.marker.setMap(this.map);
  }

  constructor() { }

 }

