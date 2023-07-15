import { Component } from '@angular/core';
import { LoggerService } from 'src/app/service/logger.service';

@Component({
  selector: 'app-exemplos-servico1',
  templateUrl: './exemplos-servico1.component.html',
  styleUrls: ['./exemplos-servico1.component.css']
})
export class ExemplosServico1Component {

  nome = ' ';

  constructor(private logger:LoggerService) {

  }

  adicionarNome(){
    this.logger.logar(`O nome  ${this.nome} foi adicionado`)
    //console.log(``)
  }

}
