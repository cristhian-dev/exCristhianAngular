import { Component, OnInit } from '@angular/core';
import {ServicioMapaService} from './../series/services/servicio-mapa.service';

@Component({
  selector: 'app-componente7',
  templateUrl: './componente7.component.html',
  styleUrls: ['./componente7.component.css']
})
export class Componente7Component implements OnInit {
  
lat:number=-21.586927;
lng:number=-64.655292;

zoom:number =16;

Coordinates=[];

  constructor(private markers:ServicioMapaService) {
    this.Coordinates=markers.Coordinates;
  }
  ngOnInit() {
  }

}
