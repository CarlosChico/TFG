import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../Models/Paciente';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

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

  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'appstore',
      name: 'Alert',
      redirectTo: '/alert'
    }
  ]

  constructor(private servicio: PacienteService, private storage: Storage) { }

  ngOnInit() {
  }

  onSubmit(){
    this.servicio.obtenerPaciente(this.paciente.sip).subscribe( data => {
      localStorage.setItem('paciente', JSON.stringify(data.sip));
    });
  }

}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;

}
