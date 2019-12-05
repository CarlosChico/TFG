import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-nueva-enfermedad',
  templateUrl: './nueva-enfermedad.component.html',
  styleUrls: ['./nueva-enfermedad.component.css']
})
export class NuevaEnfermedadComponent implements OnInit {

  enfermedad = {
    "id_enfermedad": null,
    "nombre_enfermedad": "",
    "descripcion": ""
  }

  constructor(private servicio: ServiciosService, private router:Router) { }

  ngOnInit() {
  }

  anadir(){
    delete this.enfermedad.id_enfermedad;
    this.servicio.anadirEnfermedad(this.enfermedad).subscribe();
    this.router.navigate(['/enfermedades']);
  }

}
