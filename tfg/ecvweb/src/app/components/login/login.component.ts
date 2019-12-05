import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServiciosService } from '../../services/servicios.service';

import { Medico } from 'src/app/models/Medico';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: ServiciosService) {   }

  formulario = {
    colegiado: null,
    contrasena: ""
  }

  sip:string;

  medico:Medico;

  ngOnInit() {
  }

  login(){
    localStorage.setItem("colegiado", this.formulario.colegiado);
    this.service.buscarMedico( this.formulario.colegiado ).subscribe( data => {
      if(data != null){
        this.medico = data;
        this.service.cambiarColegiado("Bienvenido/a " + this.medico.nombre + " " + this.medico.apellidos);
      }
    })
  }  
}
