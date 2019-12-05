import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Medico } from '../models/Medico';
import { Paciente } from '../models/Paciente';
import { Enfermedad } from '../models/Enfermedad';
import { Ritmo } from '../models/Ritmo';
import { Medicacion } from '../models/Medicacion';
import { Recomendacion } from '../models/Recomendacion';
import { Umbral } from '../models/Umbral';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private mensaje_colegiado = new BehaviorSubject<string>(""); 
  colegiado_actual = this.mensaje_colegiado.asObservable();

  private mensaje_paciente = new BehaviorSubject<Paciente>( null ); 
  paciente_actual = this.mensaje_paciente.asObservable();

  private mensaje_medicacion = new BehaviorSubject<Medicacion[]>( null ); 
  medicacion_actual = this.mensaje_medicacion.asObservable();

  private mensaje_enfermedades = new BehaviorSubject<Enfermedad[]>( null ); 
  enfermedades_actual = this.mensaje_enfermedades.asObservable();

  private mensaje_recomendaciones = new BehaviorSubject<Recomendacion[]>( null ); 
  recomendaciones_actual = this.mensaje_recomendaciones.asObservable();

  constructor(private http: HttpClient) { }

  API_URI = 'http://localhost:3000/api';


  // MEDICO------------------------------------------------------------------

  buscarMedico(colegiado:number){
    return this.http.get<Medico>(`${this.API_URI}/medico/${colegiado}`);
  }

  anadirMedico(medico: Medico){
    return this.http.post(`${this.API_URI}/medico`, medico);
  }

  datosMedico(colegiado){
    return this.http.get<Medico>(`${this.API_URI}/medico/${colegiado}`);
  }

  obtenerPacientes(colegiado){
    return this.http.get<Paciente[]>(`${this.API_URI}/medico/${colegiado}/paciente`);
  }



  //PACIENTE--------------------------------------------------------------------------

  buscarPaciente(sip:number){
    return this.http.get<Paciente>(`${this.API_URI}/paciente/${sip}`);
  }

  pacienteEnfermedad(paciente:number){
    return this.http.get<Enfermedad>(`${this.API_URI}/paciente/${paciente}/enfermedad`);
  }

  obtenerRitmos(paciente:number){
    return this.http.get<Ritmo[]>(`${this.API_URI}/umbral/${paciente}`);
  }

  obtenerUmbralSuperior(paciente:number){
    return this.http.get<Umbral>(`${this.API_URI}/paciente/${paciente}/umbral_superior`);
  }

  obtenerUmbralInferior(paciente:number){
    return this.http.get<Umbral>(`${this.API_URI}/paciente/${paciente}/umbral_inferior`);
  }

  //MEDICACION
  obtenerTodasMedicacion(){
    return this.http.get<Medicacion[]>(`${this.API_URI}/medicacion`);
  }

  obtenerUnaMedicacion(id:number){
    return this.http.get<Medicacion>(`${this.API_URI}/medicacion/${id}`);
  }

  anadirMedicacion(medicacion:Medicacion){
    return this.http.post(`${this.API_URI}/medicacion`, medicacion);
  }

  eliminarMedicacion(medicacion:number){
    return this.http.delete(`${this.API_URI}/medicacion/${medicacion}`);
  }

  modificarMedicacion(id:string, medicacion:Medicacion){
    return this.http.put(`${this.API_URI}/medicacion/${id}`, medicacion);
  }


  //ENFERMEDADES
  obtenerEnfermedades(){
    return this.http.get<Enfermedad[]>(`${this.API_URI}/enfermedad`);
  }

  obtenerUnaEnfermedad(id:number){
    return this.http.get<Enfermedad>(`${this.API_URI}/enfermedad/${id}`);
  }

  anadirEnfermedad(enfermedad:Enfermedad){
    return this.http.post(`${this.API_URI}/enfermedad`, enfermedad);
  }

  eliminarEnfermedad(id:number){
    return this.http.delete(`${this.API_URI}/enfermedad/${id}`);
  }

  //RECOMENDACIONES
  obtenerRecomendaciones(){
    return this.http.get<Recomendacion[]>(`${this.API_URI}/recomendacion`);
  }

  anadirRecomendacion(recomendacion:Recomendacion){
    return this.http.post(`${this.API_URI}/recomendacion`, recomendacion);
  }

  eliminarRecomendacion(id:number){
    return this.http.delete(`${this.API_URI}/recomendacion/${id}`);
  }

  //FUNCIONES ENVIAR INFO
  cambiarColegiado(colegiado:string){
    this.mensaje_colegiado.next(colegiado);
  }

  cambiarPaciente(paciente:Paciente){
    this.mensaje_paciente.next(paciente);
  }

  cambiarMedicacion(medicacion:Medicacion[]){
    this.mensaje_medicacion.next(medicacion);
  }

  cambiarEnfermedades(enfermedades:Enfermedad[]){
    this.mensaje_enfermedades.next(enfermedades);
  }

  cambiarRecomendaciones(recomendaciones:Recomendacion[]){
    this.mensaje_recomendaciones.next(recomendaciones);
  }
}
