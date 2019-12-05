import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { DatosService } from './datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // name: string = 'Ryan Ray';
  // age: number;
  // adress: {
  //   street: string;
  //   city: string;
  // };
  // hobbies: string[];

  // constructor(){
  //   this.age = 28;
  //   this.adress = {
  //     street: 'Baker Street 2345',
  //     city: 'London'
  //   }
  //   this.hobbies = ['swimming', 'cooking'];
  // }

  name: string = 'John Carter'; 
  age: number = 28;
  users: string[] = ['ryan', 'joe', 'cameron'];
  pacientes = [];
  medico = [];

  constructor(private service: DatosService) {
    this.service.obtenerPacientes().subscribe(data => {
      this.pacientes = data;
    });
  }

  sayHello() {
    alert('hello!');
  }
  deleteUser(user){
    for(let i = 0; i < this.users.length; i++){
      if(user == this.users[i]){
        this.users.splice(i,1);
      }
    }
  }

  agregarUsuario(newUser){
    this.users.push(newUser.value);
    newUser.value = '';
    newUser.focus();
    return false;
  }
}
