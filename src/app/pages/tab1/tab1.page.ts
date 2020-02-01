import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from '../../models/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public deseosService: DeseosService,
              private router: Router,
              private alertController: AlertController) {

  }

  //AgregarLista
  async agregarLista(){
    //this.router.navigateByUrl('/tabs/tab1/agregar');

    const alert = await this.alertController.create({
      header: 'Nueva Lista',
      inputs: [
        {
        name: 'titulo',
        type: 'text',
        placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
            
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            console.log(data);
            if (data.titulo.lenght === 0) {
              return;
            }
            //Crear lista y obtener id
            const listaId = this.deseosService.crearLista(data.titulo);
              
            // Navegar a la lista con el respectivo
            this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
          }
        }
      ]
    });

    alert.present();
  }

  listaSeleccionada(lista: Lista){
    console.log(lista);

    this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    
  }

}
