import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {
  camposVacios: boolean = false;
  dni: string = ''; // Declaración de la propiedad DNI
  password: string = ''; // Declaración de la propiedad contraseña

  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  async validarCampos() {
    // Verifica si los campos están vacíos
    if (!this.dni || !this.password) {
      const alert = await this.alertController.create({
        header: 'Campos Vacíos',
        message: 'Por favor, llena todos los campos.',
        buttons: ['OK'],
      });
  
      await alert.present();
    } else {
      // Realiza otras validaciones si es necesario
      // Si todos los campos están llenos y las validaciones pasan, continúa con el inicio de sesión.
      // ...
    }
  }
  
}
