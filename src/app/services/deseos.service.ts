import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  
  //Lista de tipo Clasecreada:Lista
  listas: Lista[] = [];

  constructor() {
    console.log('Servicio inicializado');
    
   }
}
