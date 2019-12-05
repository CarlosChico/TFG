import { Component, OnInit, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { VincularService } from '../../services/vincular.service';
import { ToastController } from '@ionic/angular';
import { Dispositivo } from '../../models/Dispositivo';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.scss'],
})
export class DispositivosComponent implements OnInit {
  disp = '';

  id = '';
  name = '';

  dispositivos: Dispositivo[] = [];

  pulsera = {
    name: '',
    id: '',
    advertising: '',
    rssi: ''
  };

  constructor(public toast: ToastController, public ble: BLE, public service: VincularService, private zone: NgZone) { }

  ngOnInit() {
    this.service.vincular_actual.subscribe(mensaje => this.disp = mensaje);
  }

  async buscar() {
    this.id = '';
    this.name = '';
    const toast = await this.toast.create({
      message: 'Buscando dispositivo.',
      duration: 2000,
      position: 'top'
    });
    toast.present();
    this.ble.startScan([]).subscribe(device => {
      // console.log(device);
      // this.pulsera = device;
      // if (this.pulsera.name === 'Mi Band 3') {
      //   this.disp = this.pulsera.name + ' ' + this.pulsera.id;
      //   this.zone.run(() => {
      //     console.log('force update the screen');
      //   });
      // }

      this.dispositivos.push(device);
      this.zone.run(() => {
        console.log('force update the screen');
      });


      setTimeout(() => {
        this.ble.stopScan().then(async () => {
          const toast = await this.toast.create({
            message: 'Escaneo finalizado.',
            duration: 2000,
            position: 'top'
          });
          toast.present();

        });
        }, 5000);

    });
  }

  seleccionar(name, id) {
    this.name = name;
    this.id = id;
  }

  async vinculado() {
    this.dispositivos.length = 0;

    const toast = await this.toast.create({
      message: 'Dispositivo emparejado.',
      duration: 2000,
      position: 'top'
    });
    toast.present();

    this.zone.run(() => {
      console.log('force update the screen');
    });


  }


}
