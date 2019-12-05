import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';

import { Ritmo } from '../../models/Ritmo';

@Component({
  selector: 'app-ritmos',
  templateUrl: './ritmos.component.html',
  styleUrls: ['./ritmos.component.css']
})
export class RitmosComponent implements OnInit {

  ritmos:Ritmo[];  
  fechas:string[];
  superior:number;
  inferior:number;

  constructor(private service: ServiciosService) {
    this.service.obtenerRitmos(Number(localStorage.getItem("paciente"))).subscribe( data => {
      this.ritmos = data;
    });
   }

  ngOnInit() {
    this.service.obtenerUmbralSuperior(Number(localStorage.getItem("paciente"))).subscribe( data => {
      console.log(data);
      this.superior = data.ritmo; 
    });
    this.service.obtenerUmbralInferior(Number(localStorage.getItem("paciente"))).subscribe( data => {
      this.inferior = data.ritmo; 
    });
  }

}
