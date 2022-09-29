import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-mantenedor',
  templateUrl: './mantenedor.page.html',
  styleUrls: ['./mantenedor.page.scss'],
})
export class MantenedorPage implements OnInit {

  //variable auxiliar para probar el storage
  persona = {
    id: 1,
    rut: '11111111-1',
    nombre: 'Daddy Yankee'
  };

  constructor(private storageService: StorageService) { }

  async ngOnInit() {
    await this.storageService.agregar('personas', this.persona);
  }

}
