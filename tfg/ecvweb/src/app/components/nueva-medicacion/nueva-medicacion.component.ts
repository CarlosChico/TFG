import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ServiciosService } from '../../services/servicios.service';
import { Medicacion } from 'src/app/models/Medicacion';

@Component({
  selector: 'app-nueva-medicacion',
  templateUrl: './nueva-medicacion.component.html',
  styleUrls: ['./nueva-medicacion.component.css']
})
export class NuevaMedicacionComponent implements OnInit {

  medicacion = {
    "id_medicacion": null,
    "nombre": '',
    "descripcion": '',
    "efectos_adversos": '',
    "img": ''
  };

  medicaciones:Medicacion[];

  img:string;

  constructor(private service: ServiciosService, private router: Router) { }

  ngOnInit() {
    this.service.medicacion_actual.subscribe(medicacion => this.medicaciones = medicacion); 
  }

  cambio(e){
    this.img = e.target.files[0].name;
  }

  anadir(){
    delete this.medicacion.id_medicacion;
    this.medicacion.img = this.img;
    console.log(this.medicacion);
    this.service.anadirMedicacion(this.medicacion).subscribe();
    this.router.navigate(['/medicaciones']);
  }
}
