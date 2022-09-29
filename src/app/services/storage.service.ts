import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  //Variables:
  datos: any[] = [];

  constructor(private storage: Storage) { 
    storage.create();
  }

  //Métodos del crud del storage:
  async agregar(key, dato){
    this.datos = await this.storage.get(key) || [];
    var datoEncontrado = await this.getDato(key, dato.id);
    if (datoEncontrado == undefined){
      this.datos.push(dato);
      await this.storage.set(key, this.datos);
      return true;
    }
    return false;
  }

  async getDato(key, identificador){
    this.datos = await this.storage.get(key) || [];
    return this.datos.find(dato => dato.id == identificador);
  }

  getDatos(){

  }

  eliminar(){

  }

  actualizar(){

  }

}
