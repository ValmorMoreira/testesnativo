import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  resp_coords: any;
  latitude: any;
  longitude: any;


  constructor(public navCtrl: NavController,
     private geolocation: Geolocation
    ) {

  }

  ionViewDidLoad() {
    this.geolocation.getCurrentPosition()
      .then((resp) => {
        this.resp_coords = resp.coords;
        this.latitude = this.resp_coords.latitude;
        this.longitude = this.resp_coords.longitude;
        console.log(resp);
      }).catch((error) => {
        console.log('Erro ao recuperar sua posição')
        console.log(error);
      });

      let watch = this.geolocation.watchPosition();
      watch.subscribe((resp) => {
        this.resp_coords = resp.coords;
        this.latitude = this.resp_coords.latitude;
        this.longitude = this.resp_coords.longitude;
      },(error) => {
      console.log(error);
    });
  }
  

}
