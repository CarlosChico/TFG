import { Component, OnInit } from '@angular/core';
import { Medicacion } from 'src/app/models/Medicacion';
import { ServiciosService } from 'src/app/services/servicios.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-modificar-medicacion',
  templateUrl: './modificar-medicacion.component.html',
  styleUrls: ['./modificar-medicacion.component.css']
})
export class ModificarMedicacionComponent implements OnInit {

  medicacion = {
    "id_medicacion": null,
    "nombre": '',
    "descripcion": '',
    "efectos_adversos": '',
    "img": ''
  };

  medicaciones:Medicacion[];

  med:Medicacion;

  img:string;

  constructor(private service: ServiciosService, private router: Router) { }

  ngOnInit() {
    this.service.medicacion_actual.subscribe(medicacion => this.medicaciones = medicacion); 
    this.service.obtenerUnaMedicacion(Number(localStorage.getItem("medicacion"))).subscribe(data => {
      this.med = data;
    })
  }

  cambio(e){
    this.img = e.target.files[0].name;
  }

  modificar(){
    delete this.medicacion.id_medicacion;
    this.medicacion.img = this.img;
    console.log(this.medicacion);
    this.service.modificarMedicacion(localStorage.getItem("medicacion"), this.medicacion).subscribe();
    this.router.navigate(['/medicaciones']);
  }
}
