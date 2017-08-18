import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos: any[] = [];
  cargando = false;

  constructor( private http: Http) {
    this.cargar_productos();
  }

  public cargar_producto(cod: string) {
    return this.http.get(`https://paginaweb-fd187.firebaseio.com/productos/${cod}.json`);
  }

  public cargar_productos() {
    if ( this.productos.length === 0 ) {
      this.cargando = true;
      this.http.get('https://paginaweb-fd187.firebaseio.com/productos_idx.json')
      .subscribe( data => {
        setTimeout( () => {
          this.productos = data.json();
          this.cargando = false;
        }, 1000);
      });
    }
  }
}
