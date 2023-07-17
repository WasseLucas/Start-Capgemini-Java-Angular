import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';


const routes: Routes = [
  {path:'primeira-pagina', component: PrimeiraPaginaComponent},//Renderizando primeira pagina{Rota}
  {path:'segunda-pagina', component: SegundaPaginaComponent}, //Renderizando segunda pagina {Rota}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
