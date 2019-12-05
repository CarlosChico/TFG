import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recomendacion } from '../Models/Recomendacion';

@Injectable({
  providedIn: 'root'
})
export class RecomendacionesService {

  // API_URI = 'http://192.168.1.14:3000/api';
  API_URI = 'http://192.168.1.14:3000/api';

  constructor(private http: HttpClient) { }

  

  obtenerRecomendaciones(){
    return this.http.get<Recomendacion[]>(`${this.API_URI}/recomendacion`);
  }
}
