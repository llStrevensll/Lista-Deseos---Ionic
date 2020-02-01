import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  //ViewChild 
  //@ViewChild( IonList ) lista: IonList;
  @ViewChild( IonList, null) lista: IonList;
  //Para saber si esta en terminados o en pendientes
  @Input() terminada = true;
  
  
  
  constructor(public deseosService: DeseosService, private router: Router, private alertController: AlertController) { }

  ngOnInit() {}
  
  //Lista seleccionada
  listaSeleccionada(lista: Lista){
    if (this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }

  }
  //Editar lista
  async editarLista(lista){

      const alert = await this.alertController.create({
        header: 'Editar Lista',
        inputs: [
          {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'Nombre de la lista'
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Cancelar');   
              this.lista.closeSlidingItems();
            }
          },
          {
            text: 'Actualizar',
            handler: (data) => {
              console.log(data);
              if (data.titulo.lenght === 0) {
                return;
              }
              
              lista.titulo = data.titulo;
              this.deseosService.guardarStorage();
              this.lista.closeSlidingItems();
            }
          }
        ]
      });
  
      alert.present();
  }


   //borrarLista
  borrarLista( lista: Lista){
      
    this.deseosService.borrarLista(lista);
  }
}
