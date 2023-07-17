import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-com-paramentros',
  templateUrl: './pagina-com-paramentros.component.html',
  styleUrls: ['./pagina-com-paramentros.component.css']
})
export class PaginaComParamentrosComponent implements OnInit {

  id:number | null = null;
  nome:string | null  = "";
  idade:number | null = null;

  constructor(private route : ActivatedRoute){} // 

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.id = Number(params.get("id"));
      }
    );
    this.route.queryParamMap.subscribe(
      params => {
        this.nome =  params.get("nome");
        this.idade = Number(params.get("idade"))
      }
    )
  }

}
