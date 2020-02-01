import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  
  lista: Lista;
  nombreItem: string = '';

  constructor(private deseosService: DeseosService, private route: ActivatedRoute) {
    
    //Obtener id
    const listaId = this.route.snapshot.paramMap.get('listaId');
    //Enviar el id al servicio- para obtener la lista
    this.lista = this.deseosService.obtenerLista(listaId);
    
    
  }

  ngOnInit() {
  }
  
  //Agregar un item
  agregarItem(){
    if (this.nombreItem.length === 0) {//no esta nada escrito
      return;
    }
  
    

    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);

    this.nombreItem = '';
    this.deseosService.guardarStorage();
  }
  
  //Cambio del checkBox
  cambioCheck( item:ListaItem){
    const pendientes = this.lista.items
                            .filter(itemData => !itemData.completado)
                            .length;
    
    if (pendientes === 0) {
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    }else {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }
                            


    this.deseosService.guardarStorage();
    console.log(this.deseosService.listas);
    
    
  }

}
