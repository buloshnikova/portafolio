import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent implements OnInit {

  producto: any = undefined;
  cod: string = undefined;

  constructor( private route: ActivatedRoute, private _ps: ProductosService) {
    route.params.subscribe( parametros => {
      this._ps.cargar_producto(parametros['id'])
      .subscribe( data => {
        this.cod = parametros['id'];
        this.producto = data.json();
      });
    });
  }

  ngOnInit() {
  }

}
