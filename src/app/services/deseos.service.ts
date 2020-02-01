import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  
  //Lista de tipo Clasecreada:Lista
  listas: Lista[] = [];

  constructor() {

    this.cargarStorage();

    //Listas
    //const lista1  = new Lista('Objetivos a Realizar');
    //const lista2 = new Lista('Tareas Universidad');

    //Insertar listas en el arreglo
    //this.listas.push(lista1,lista2);
   }

   //Crear Lista
   crearLista(titulo: string){

    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
   }

   //Storage
   guardarStorage(){//JSON.stringify-> pasar a string
      localStorage.setItem('data', JSON.stringify(this.listas));
   } 

   cargarStorage(){
      if (localStorage.getItem('data')) {//si existe
        this.listas = JSON.parse(localStorage.getItem('data'));
      }else {
        this.listas = [];
      }
    
   }
}
 