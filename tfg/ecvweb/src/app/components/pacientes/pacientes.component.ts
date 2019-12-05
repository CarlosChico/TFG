import { Component, OnInit, Input } from '@angular/core';

import { Paciente } from 'src/app/models/Paciente';

import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})

export class PacientesComponent implements OnInit {

  pacientes = [];

  paciente:Paciente;

  colegiado:string;
  sip:string;

  constructor(private service: ServiciosService) {
    this.service.obtenerPacientes(localStorage.getItem("colegiado")).subscribe( data => {
      console.log(data);
     this.pacientes = data;
     console.log(this.pacientes[0].sip);
    });
   }

  ngOnInit() {
    this.service.colegiado_actual.subscribe(colegiado => this.colegiado = colegiado); 
    this.service.paciente_actual.subscribe(paciente => this.paciente = paciente);    
  }

  obtenerPaciente(paciente:Paciente){
    localStorage.setItem("paciente", JSON.stringify(paciente.sip));
    this.service.cambiarPaciente(paciente);
  }
}
