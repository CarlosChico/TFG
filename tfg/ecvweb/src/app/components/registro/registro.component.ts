import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/models/Medico';
import { ServiciosService } from '../../services/servicios.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  medico: Medico = {
    colegiado: null,
    nombre: '',
    apellidos: '',
    pwd: ''
  }

  constructor(private datosService: ServiciosService, private router: Router) { }

  ngOnInit() {

  }

  registroMedico() {
    this.guardarLocalStorage(this.medico.nombre, this.medico.apellidos, this.medico.colegiado);
    this.datosService.anadirMedico(this.medico).subscribe(
      res => { 
      },
      err => console.error
    );
  }

  guardarLocalStorage(nombr, apelli, cole){
    let nombre: string = nombr;
    let apellidos: string = apelli;
    let colegiado: number = cole;

    let nombrecompleto:string = "Bienvenido, " + nombre +" "+  apellidos;

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellidos", apellidos);
    localStorage.setItem("colegiado", JSON.stringify(colegiado));

    console.log(localStorage.getItem("nombre") + ", " +localStorage.getItem("apellidos"));
    
    this.router.navigateByUrl('/pacientes');

  }

}
