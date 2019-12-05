import { Component, OnInit } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { VincularService } from '../../services/vincular.service';

@Component({
  selector: 'app-vincular',
  templateUrl: './vincular.page.html',
  styleUrls: ['./vincular.page.scss'],
})
export class VincularPage implements OnInit {

  constructor(private ble: BLE, public service: VincularService) { }

  ngOnInit() {
  }  

}
