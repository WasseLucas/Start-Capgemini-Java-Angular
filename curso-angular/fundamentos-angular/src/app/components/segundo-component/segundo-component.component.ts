import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-component',
  templateUrl: './segundo-component.component.html',
  styleUrls: ['./segundo-component.component.css']
})
export class SegundoComponentComponent {

  nome ="Wasse Lucas";
  dataNascimento = "1995-01-01";
  urlImagem = "/assets/miranha.jpg" ;

  mostrarDataNascimento (){
    alert(`A data de nascimentop de João é: ${this.dataNascimento}`)
  }
}
