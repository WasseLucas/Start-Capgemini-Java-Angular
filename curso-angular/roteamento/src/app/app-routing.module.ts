import { NgModule, inject } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina.component';
import { SegundaPaginaComponent } from './segunda-pagina/segunda-pagina.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaComParamentrosComponent } from './pagina-com-paramentros/pagina-com-paramentros.component';
import { PaginaProtegidaComponent } from './pagina-protegida/pagina-protegida.component';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';


const routes: Routes = [
  {path:'primeira-pagina', component: PrimeiraPaginaComponent},//Renderizando primeira pagina{Rota}
  {path:'segunda-pagina', component: SegundaPaginaComponent}, //Renderizando segunda pagina {Rota}
  {path:'pagina-com-parametros/:id',component:PaginaComParamentrosComponent},//Redirecionando pagina com parametro id
  {path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
  {path:'pagina-protegida',component:PaginaProtegidaComponent,canActivate:[authGuard]},// Redirecionando pagina protegia
  {path:'login', component:LoginComponent},
  {path:'', redirectTo: 'primeira-pagina', pathMatch: 'full'}, //Redirencionamendo da primeira pagina
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
