import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicacion } from '../Models/Medicacion';
import { Enfermedad } from '../Models/Enfermedad';

@Injectable({
  providedIn: 'root'
})
export class MedicacionService {

  // API_URI = 'http://192.168.1.14:3000/api';
  API_URI = 'http://192.168.1.14:3000/api';

  constructor(private http: HttpClient) { }

  obtenerEnfermedad(sip: number){
    return this.http.get<Enfermedad>(`${this.API_URI}/paciente/${sip}/enfermedad`);
  }

  obtenerMedicacion(id: number){
    return this.http.get<Medicacion>(`${this.API_URI}/enfermedad/${id}/medicacion`);
  }
}
