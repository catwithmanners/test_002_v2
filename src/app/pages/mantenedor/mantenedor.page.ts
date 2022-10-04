import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-mantenedor',
  templateUrl: './mantenedor.page.html',
  styleUrls: ['./mantenedor.page.scss'],
})
export class MantenedorPage implements OnInit {

  //variables para trabajar mi storage
  datos: any[] = [];
  KEY_PERSONAS = 'personas';
  dato = {
    id: '',
    rut: '',
    nombre: ''
  };

  constructor(private storageService: StorageService, private loading: LoadingController) { }

  async ngOnInit() {
    await this.cargarDatos();
  }

  //Métodos necesarios para trabajar el storage
  async cargarDatos(){
    this.datos = await this.storageService.getDatos(this.KEY_PERSONAS);
  }
  async registrar(){
    this.dato.id = '';
    var res = await this.storageService.agregar(this.KEY_PERSONAS,this.dato);
    if (res) {
      alert('Registrado');
      await this.cargarDatos();
    }
  }
  async eliminar(identificador){
    await this.storageService.eliminar(this.KEY_PERSONAS, identificador);
    await this.cargandoPantalla('Eliminando...');
    await this.cargarDatos();
  }

  async cargar(identificador){
    this.dato= await this.storageService.getDato(this.KEY_PERSONAS, identificador);
  }
  async modificar(){
    await this.storageService.actualizar(this.KEY_PERSONAS, this.dato);
    await this.cargarDatos();
  }

  //LOADING:
  async cargandoPantalla(message){
    const cargando = await this.loading.create({
      message,
      duration: 3000,
      spinner: 'lines-sharp'
    });

    cargando.present();
  }


}
