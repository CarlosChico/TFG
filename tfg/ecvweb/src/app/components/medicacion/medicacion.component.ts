import { Component, OnInit } from '@angular/core';

import { ServiciosService } from '../../services/servicios.service';

import { Medicacion } from '../../models/Medicacion';

@Component({
  selector: 'app-medicacion',
  templateUrl: './medicacion.component.html',
  styleUrls: ['./medicacion.component.css']
})
export class MedicacionComponent implements OnInit {

  medicaciones:Medicacion[];

  constructor(private service: ServiciosService) {   }

  ngOnInit() {
    this.service.medicacion_actual.subscribe(medicacion => this.medicaciones = medicacion); 
    this.service.obtenerTodasMedicacion().subscribe( data => {
      this.service.cambiarMedicacion(data);
    }); 
  }

  eliminar(medicacion:number){
    this.service.eliminarMedicacion(medicacion).subscribe();
    this.service.obtenerTodasMedicacion().subscribe( data => {
      this.service.cambiarMedicacion(data);
    }); 
  }

  modificar(medicacion:number){
    localStorage.setItem("medicacion", JSON.stringify(medicacion));
  }
}
