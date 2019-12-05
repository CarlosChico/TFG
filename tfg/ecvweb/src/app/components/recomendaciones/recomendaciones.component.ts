import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';
import { Recomendacion } from '../../models/Recomendacion';


@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {

  recomendaciones:Recomendacion[];

  constructor(private servicio:ServiciosService) { }

  ngOnInit() {
    this.servicio.obtenerRecomendaciones().subscribe( data=> {
      this.servicio.cambiarRecomendaciones(data);
    });
    this.servicio.recomendaciones_actual.subscribe(recomendaciones => this.recomendaciones = recomendaciones); 
  }

  eliminar(id:number){
    this.servicio.eliminarRecomendacion(id).subscribe();
    this.recargar();
  }

  recargar(){
    this.servicio.obtenerRecomendaciones().subscribe( data=> {
      this.servicio.cambiarRecomendaciones(data);
    });
  }

}
