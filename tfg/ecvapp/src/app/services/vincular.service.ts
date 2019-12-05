import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class VincularService {

  // tslint:disable-next-line: variable-name
  private mensaje_vincular = new BehaviorSubject<string>('');
  // tslint:disable-next-line: variable-name
  vincular_actual = this.mensaje_vincular.asObservable();

  constructor() { }

  cambiarMensaje(dispositivo){
    this.mensaje_vincular.next(dispositivo);
  }

}
