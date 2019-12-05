import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DispositivosComponent } from './dispositivos/dispositivos.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    HeaderComponent,
    DispositivosComponent
  ],
  exports: [
    HeaderComponent,
    DispositivosComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
