import { Component, OnInit } from '@angular/core';
import { RecomendacionesService } from '../../services/recomendaciones.service';
import { Recomendacion } from '../../Models/Recomendacion';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.page.html',
  styleUrls: ['./recomendaciones.page.scss'],
})
export class RecomendacionesPage implements OnInit {

  recomendaciones: Recomendacion[] = [];

  constructor(private servicio: RecomendacionesService) { }

  ngOnInit() {
    this.servicio.obtenerRecomendaciones().subscribe( data => {
      this.recomendaciones = data;
    });
  }
}
