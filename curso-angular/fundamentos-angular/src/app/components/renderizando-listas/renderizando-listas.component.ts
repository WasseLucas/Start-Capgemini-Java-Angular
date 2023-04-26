import { Component } from '@angular/core';
import { celular } from 'src/app/types/celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {

  celulares: celular[]=[
    {id:1, nome:"Iphone X",descricao: "Apple",esgotado: false},
    {id:2, nome:"Iphone 5",esgotado: true},
    {id:3, nome:"Iphone XS",descricao: "Apple",esgotado: false}
  ]
}
