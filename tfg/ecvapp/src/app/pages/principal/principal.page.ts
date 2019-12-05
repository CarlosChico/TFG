import { Component, OnInit } from '@angular/core';
import { Pulsera } from '../../models/Pulsera';
import { PacienteService } from '../../services/paciente.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  pulsera: Pulsera[] = [];
  umbral: Pulsera[] = [];

  constructor(private servicio: PacienteService, private storage: Storage) { }

  ngOnInit() {
    this.servicio.obtenerTodosRegistros(Number(localStorage.getItem('paciente'))).subscribe( data => {
      this.pulsera = data;
    });

    this.servicio.obtenerUmbral(Number(localStorage.getItem('paciente'))).subscribe( data => {
      this.umbral = data;
    });
  }

}
