import { Component } from '@angular/core';
import { LoggerService } from 'src/app/service/logger.service';

@Component({
  selector: 'app-exemplos-servico2',
  templateUrl: './exemplos-servico2.component.html',
  styleUrls: ['./exemplos-servico2.component.css']
})
export class ExemplosServico2Component {

  descricao = "";

  constructor(public logger: LoggerService){

  }

  adicionarProduto(){
    this.logger.logar(`o produto com a descrição ${this.descricao} foi adicionado`)
  }

}
