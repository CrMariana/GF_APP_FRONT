import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-busquedad-placa',
  templateUrl: './busquedad-placa.page.html',
  styleUrls: ['./busquedad-placa.page.scss'],
})
export class BusquedadPlacaPage implements OnInit {
  yearInput: number | null = null; // Variable para almacenar el año ingresado

  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  async buscarPorAnio() {
    if (this.yearInput !== null) {
      if (this.yearInput >= 1999 && this.yearInput <= 2017) {
        // El año está dentro del rango permitido, muestra una alerta de búsqueda exitosa
        const alert = await this.alertController.create({
          header: 'Búsqueda exitosa',
          message: `Búsqueda para el año ${this.yearInput}`,
          buttons: ['OK']
        });

        await alert.present();
      } else {
        // El año está fuera del rango permitido, muestra una alerta de error de rango
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'El año debe estar entre 1999 y 2017',
          buttons: ['OK']
        });

        await alert.present();
      }
    } else {
      // El año ingresado es nulo o no es un número, muestra una alerta de error de formato
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Ingrese un año válido (formato: AAAA)',
        buttons: ['OK']
      });

      await alert.present();
    }
  }
}
