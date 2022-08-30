import { MiApiService } from '../mi-api.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-importar-producto',
  templateUrl: './importar-producto.component.html',
  styleUrls: ['./importar-producto.component.css']
})
export class ImportarProductoComponent implements OnInit {

  
  bd:any[] = [];
  public form: FormGroup;
  constructor(private fg:FormBuilder, public miApi:MiApiService) { 
    { 
      this.form = this.fg.group({
        nombre: [''],
        tipo:[''],
        cantidad:0,
        precioI:0,
        precioF:0
        
      });
     }

  }

  ngOnInit( ) { 
    { 
      this.form =this.fg.group({
        nombre: [''],
        tipo:[''],
        cantidad:0,
        precioI:0,
        precioF:0
        
      });
     }

  }
  negocio(){
    this.bd.push(this.form.value);
   this.miApi.post(`http://localhost:3000/producto`,{
      nombre: this.form.value.nombre,
      tipo: this.form.value.tipo,
      cantidad: this.form.value.cantidad,
      precioI: this.form.value.precioI,
      pecioF: this.form.value.precioF
    }).subscribe(respuesta => {console.log(respuesta); }  )
 
  
   this.form.reset()
  }


}

interface prod{
  nombre: string,
  tipo: string, 
  precio_compra:  number,
  precio__venta: number,
  cantidad: number
}