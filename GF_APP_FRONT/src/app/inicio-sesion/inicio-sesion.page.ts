import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa el servicio Router
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {
  dni: string = '';
  password: string = '';
  camposVacios: boolean = false; // Inicializa la variable camposVacios como false

  constructor(
    private router: Router, // Inyecta el servicio Router
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  async validarCampos() {
    if (!this.dni || !this.password) {
      const alert = await this.alertController.create({
        header: 'Campos Vacíos',
        message: 'Por favor, llena todos los campos.',
        buttons: ['OK'],
      });
  
      await alert.present();
    } else {
      // Si los campos están llenos, redirige al usuario a la página "menu-opciones"
      this.router.navigate(['/menu-opciones']);
    }
  }
  
}
