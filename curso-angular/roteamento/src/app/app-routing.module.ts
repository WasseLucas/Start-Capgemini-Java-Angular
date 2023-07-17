import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaComParamentrosComponent } from './pagina-com-paramentros/pagina-com-paramentros.component';


const routes: Routes = [
  {path:'primeira-pagina', component: PrimeiraPaginaComponent},//Renderizando primeira pagina{Rota}
  {path:'segunda-pagina', component: SegundaPaginaComponent}, //Renderizando segunda pagina {Rota}
  {path:'', redirectTo: 'primeira-pagina', pathMatch: 'full'}, //Redirencionamendo da primeira pagina
  {path:'pagina-com-parametros/:id',component:PaginaComParamentrosComponent},//Redirecionando pagina com parametro id
  {path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
  {path:'**',component: PaginaNaoEncontradaComponent},//Redirencionando page not found
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
