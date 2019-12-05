import { Component, OnInit } from '@angular/core';
import { Enfermedad } from '../../models/Enfermedad';
import { ServiciosService } from '../../services/servicios.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-enfermedades',
  templateUrl: './enfermedades.component.html',
  styleUrls: ['./enfermedades.component.css']
})
export class EnfermedadesComponent implements OnInit {

  //enfermedades:Enfermedad[];
  enfermedades1:Enfermedad[];

  descrp:string;
  id:number;

  constructor(private servicio:ServiciosService, private router:Router) { }

  ngOnInit() {
    this.servicio.enfermedades_actual.subscribe(enfermedades => this.enfermedades1 = enfermedades);  
    this.servicio.obtenerEnfermedades().subscribe( data => {
      //this.enfermedades = data;
      this.enfermedades1 = data
      this.servicio.cambiarEnfermedades(this.enfermedades1);
      this.seleccionar(this.enfermedades1[0].id_enfermedad);
    });
  }

  seleccionar(id:number){
    this.servicio.obtenerUnaEnfermedad(id).subscribe( data =>{
      this.descrp = data.descripcion;
      this.id = data.id_enfermedad;
    });
  }

  eliminar(){
    this.servicio.eliminarEnfermedad(this.id).subscribe();
    this.servicio.obtenerEnfermedades().subscribe( data => {
      //this.enfermedades = data;
      this.enfermedades1 = data;
      this.servicio.cambiarEnfermedades(this.enfermedades1);
      this.seleccionar(this.enfermedades1[0].id_enfermedad);      
    });
  }

}
