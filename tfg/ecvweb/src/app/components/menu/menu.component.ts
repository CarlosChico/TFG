import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  colegiado:string;

  constructor(private service: ServiciosService) { }

  ngOnInit() {
    this.service.colegiado_actual.subscribe( colegiado => this.colegiado = colegiado );    
  }

  borrarStorage(){
    localStorage.clear();
  }

  nuevoSip(){
    this.service.cambiarColegiado("");
  }

}
