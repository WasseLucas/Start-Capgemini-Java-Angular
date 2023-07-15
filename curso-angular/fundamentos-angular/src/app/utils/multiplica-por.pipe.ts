import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicaPor'
})
//função pipe para multiplicar um valor
export class MultiplicaPorPipe implements PipeTransform {

  transform(valor: number,multiplicador: number): unknown {
    return valor * multiplicador ;
  }
};

