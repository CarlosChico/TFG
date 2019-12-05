import { Component, OnInit } from '@angular/core';

import { ServiciosService } from '../../services/servicios.service';
import { Paciente } from '../../models/Paciente';


@Component({
  selector: 'app-pacientes-info',
  templateUrl: './pacientes-info.component.html',
  styleUrls: ['./pacientes-info.component.css']
})
export class PacientesInfoComponent implements OnInit {

  paciente: Paciente;
  sip:string;

  constructor(private service: ServiciosService) {   }

  ngOnInit() {
    this.service.paciente_actual.subscribe(paciente => this.paciente = paciente);  
  }
}
