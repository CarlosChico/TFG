import { Component, OnInit } from '@angular/core';

import { ServiciosService } from '../../services/servicios.service';

import { Medico } from '../../models/Medico';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  colegiado:string;

  constructor(private service: ServiciosService) {  }

  ngOnInit() {
    this.service.colegiado_actual.subscribe( colegiado => this.colegiado = colegiado );    
  }
}
