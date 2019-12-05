import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Paciente } from './models/Paciente';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
    
  }

  obtenerPacientes(){
    return this.http.get<Paciente[]>(`${this.API_URI}/paciente`);
  }

  obtenerUnPaciente(sip: number){
    return this.http.get<Paciente>(`${this.API_URI}/paciente/${sip}`);
  }

  borrarPaciente(sip: number){
    return this.http.delete(`${this.API_URI}/paciente/${sip}`);
  }

  registroPaciente(paciente: Paciente){
    return this.http.post(`${this.API_URI}/paciente`, paciente);
  }

}
