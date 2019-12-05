import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Medico } from '../../Models/Medico';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  paciente = {
    "sip": null,
    "nombre": '',
    "apellidos": '',
    "pwd": '',
    "edad": null,
    "peso": null,
    "genero": '',
    "medico": null
  }
  medicos: number[] = [];

  constructor(private servicio: PacienteService, private storage: Storage) { }

  ngOnInit() {
  }

  onSumbit() {
    localStorage.setItem('paciente', JSON.stringify(this.paciente.sip));

    let random: number;

    this.servicio.obtenerMedicos().subscribe( data => {
      for(let i = 0; i < data.length; i++){
        console.log(data[i].colegiado);
        this.medicos.push(data[i].colegiado);
      }

      random = this.medicos[Math.floor(Math.random() * this.medicos.length)];

      this.paciente.medico = random;

      this.servicio.registrarPaciente(this.paciente).subscribe();
    });
  }

}
