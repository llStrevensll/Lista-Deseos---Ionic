import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  
  //Lista de tipo Clasecreada:Lista
  listas: Lista[] = [];

  constructor() {
    //Listas
    const lista1  = new Lista('Objetivos a Realizar');
    const lista2 = new Lista('Tareas Universidad');

    //Insertar listas en el arreglo
    this.listas.push(lista1,lista2);

    
    
   }
}
 