import { Component, OnInit } from '@angular/core';

import { ServiciosService } from '../../services/servicios.service';
import { Paciente } from '../../models/Paciente';
import { Enfermedad } from '../../models/Enfermedad';

@Component({
  selector: 'app-enfermedad-padecida',
  templateUrl: './enfermedad-padecida.component.html',
  styleUrls: ['./enfermedad-padecida.component.css']
})
export class EnfermedadPadecidaComponent implements OnInit {

  enfermedad:Enfermedad;

  constructor(private service: ServiciosService) {
    console.log(Number(localStorage.getItem("paciente")));
    this.service.pacienteEnfermedad(Number(localStorage.getItem("paciente"))).subscribe( data => {
      this.enfermedad = data;
    })
  }

  ngOnInit() {

  }

}
