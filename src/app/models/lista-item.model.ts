

export class ListaItem {
    descripcion: string;
    completado: boolean;

    constructor( descripcion: string){
        this.descripcion = descripcion;
        this.completado = false;
    }
}