import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'menu-opciones',
    loadChildren: () => import('./menu-opciones/menu-opciones.module').then( m => m.MenuOpcionesPageModule)
  },
  {
    path: 'recorrido',
    loadChildren: () => import('./recorrido/recorrido.module').then( m => m.RecorridoPageModule)
  },
 
  {
    path: 'a-estudios-generales',
    loadChildren: () => import('./a-estudios-generales/a-estudios-generales.module').then( m => m.AEstudiosGeneralesPageModule)
  },
  {
    path: 'a-especialidades',
    loadChildren: () => import('./a-especialidades/a-especialidades.module').then( m => m.AEspecialidadesPageModule)
  },
  {
    path: 'a-fia-data',
    loadChildren: () => import('./a-fia-data/a-fia-data.module').then( m => m.AFiaDataPageModule)
  },
  {
    path: 'a-laboratorios',
    loadChildren: () => import('./a-laboratorios/a-laboratorios.module').then( m => m.ALaboratoriosPageModule)
  },
  {
    path: 'directorio-carreras',
    loadChildren: () => import('./directorio-carreras/directorio-carreras.module').then( m => m.DirectorioCarrerasPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
