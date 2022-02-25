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
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'entrenamiento',
    loadChildren: () => import('./entrenamiento/entrenamiento.module').then( m => m.EntrenamientoPageModule)
  },
  {
    path: 'rdiario',
    loadChildren: () => import('./rdiario/rdiario.module').then( m => m.RdiarioPageModule)
  },
  {
    path: 'rsema',
    loadChildren: () => import('./rsema/rsema.module').then( m => m.RsemaPageModule)
  },
  {
    path: 'rmensual',
    loadChildren: () => import('./rmensual/rmensual.module').then( m => m.RmensualPageModule)
  },
  {
    path: 'rdeporte',
    loadChildren: () => import('./rdeporte/rdeporte.module').then( m => m.RdeportePageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
