import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Paciente } from '../models/Paciente';
import { Medico } from '../models/Medico';
import { Pulsera } from '../models/pulsera';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { }

  // API_URI = 'http://192.168.1.14:3000/api';
  API_URI = 'http://192.168.1.14:3000/api';

  //192.168.1.14

  registrarPaciente(paciente: Paciente){
      return this.http.post(`${this.API_URI}/paciente`, paciente);
  }

  obtenerPaciente(sip: number){
      return this.http.get<Paciente>(`${this.API_URI}/paciente/${sip}`);
  }

  obtenerMedicos(){
    return this.http.get<Medico[]>(`${this.API_URI}/medico`);
  }

  obtenerTodosRegistros(sip: number){
    return this.http.get<Pulsera[]>(`${this.API_URI}/pulsera/${sip}`);
  }

  obtenerUmbral(sip: number){
    return this.http.get<Pulsera[]>(`${this.API_URI}/umbral/${sip}`);
  }


}
