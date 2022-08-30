import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportarProductoComponent } from './importar-producto/importar-producto.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VentasComponent } from './ventas/ventas.component';

const routes: Routes = [
  {
path: '',
component: HomeComponent
  },
  {
    path: 'importar',
    component: ImportarProductoComponent

  },
  {
    path: 'ventas',
    component: VentasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
