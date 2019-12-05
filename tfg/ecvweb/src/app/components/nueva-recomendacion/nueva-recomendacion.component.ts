import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';
import { Recomendacion } from '../../models/Recomendacion';

@Component({
  selector: 'app-nueva-recomendacion',
  templateUrl: './nueva-recomendacion.component.html',
  styleUrls: ['./nueva-recomendacion.component.css']
})
export class NuevaRecomendacionComponent implements OnInit {

  recomendacion = {
    "id_recomendacion":null,
    "titulo":"",
    "descripcion":"",
    "img":"",
  }

  img:string;

  constructor(private servicio:ServiciosService) { }

  ngOnInit() {
  }
  
  cambio(e){
    this.img = e.target.files[0].name;
  }

  anadir(){
    delete this.recomendacion.id_recomendacion;
    this.recomendacion.img = this.img;
    this.servicio.anadirRecomendacion(this.recomendacion).subscribe();
  }

}
