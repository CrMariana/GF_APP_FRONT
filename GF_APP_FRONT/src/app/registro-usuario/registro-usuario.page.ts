import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage {
  dni: string = '';
  nombres: string = '';
  // Agrega otras propiedades para los demás campos

  constructor(private alertController: AlertController) {}

  async registrar() {
    // Verifica si todos los campos requeridos están llenos
    if (!this.dni || !this.nombres /* Agrega aquí las demás propiedades */) {
      await this.mostrarAlertaCamposVacios();
    } else {
      // Continúa con el proceso de registro si todos los campos están llenos
      // ...
    }
  }

  async mostrarAlertaCamposVacios() {
    const alert = await this.alertController.create({
      header: 'Campos Vacíos',
      message: 'Por favor, llena todos los campos.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
