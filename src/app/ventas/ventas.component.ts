import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MiApiService } from '../mi-api.service';
//import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  public bd:any = [];
  public temp:any = [];
  public producto:string='';
  constructor(public http:HttpClient, public miApi:MiApiService) { }
 public precio:number = 0;
 public cant:number = 0;
  ngOnInit(): void {
    
    this.cargaData();
  
  }
  public cargaData(){
    const url = `http://localhost:3000/producto`;
    this.miApi.get(url)
    .subscribe(respueta =>{ 
    
      this.bd = respueta;
    } )
  }
  procesar()
  {
    let sol,ganacias,fondo;
    // let pos = this.bd.indexOf(this.producto);
    // console.log(this.producto);
    // console.log(pos);
    
   for(let i of this.bd)
   {
    //console.log(i.nombre);
    if(i.nombre == this.producto)
     {
      
      console.log(i.nombre);
      sol = this.precio * this.cant;
      console.log("Venta: "+ sol);
     
      fondo = i.precioI * this.cant;
      ganacias = sol - (fondo);
      console.log("Fondo: "+ fondo);
      console.log("Ganancias: "+ ganacias);
      this.temp.push({"Producto": this.producto, "Ventas": sol, "Fondo": fondo, "Ganancias": ganacias})
      break;
     
     }
   }
   
  }
  
}
