import { Component, OnInit } from '@angular/core';
import { MedicacionService } from '../../services/medicacion.service';
import { Medicacion } from '../../models/Medicacion';
import { Enfermedad } from '../../models/Enfermedad';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-medicacion',
  templateUrl: './medicacion.page.html',
  styleUrls: ['./medicacion.page.scss'],
})
export class MedicacionPage implements OnInit {

  enfermedad = {
    id_enfermedad: null,
    nombre_enfermedad: '',
    descripcion: ''
  };

  medicacion = {
    id_medicacion: null,
    nombre: '',
    descripcion: '',
    efectos_adversos: '',
    img: ''
  };


  constructor(private servicio: MedicacionService, private storage: Storage) { }

  ngOnInit() {
    this.servicio.obtenerEnfermedad(Number(localStorage.getItem('paciente'))).subscribe( data => {

      this.enfermedad = data;

      this.servicio.obtenerMedicacion(this.enfermedad.id_enfermedad).subscribe( medi => {

        this.medicacion = medi;

      });

    });

  }

}
