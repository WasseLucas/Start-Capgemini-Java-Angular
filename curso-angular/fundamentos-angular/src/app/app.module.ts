import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponentComponent } from './components/primeiro-component/primeiro-component.component';
import { SegundoComponentComponent } from './components/segundo-component/segundo-component.component';
import { MultiplicaPorPipe } from '../app/utils/multiplica-por.pipe';
import { PipeCustimizadoComponent } from './components/pipe-custimizado/pipe-custimizado.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { RenderizandoListasComponent } from './components/renderizando-listas/renderizando-listas.component';
import { PersonalizadoComponent } from './components/personalizado/personalizado.component';
import { ComponentePaiComponent } from './components/componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './components/componente-filho/componente-filho.component';
import { ExemplosServico1Component } from './components/exemplos-servico1/exemplos-servico1.component';
import { ExemplosServico2Component } from './components/exemplos-servico2/exemplos-servico2.component';
import { CicloDeVidaComponent } from './components/ciclo-de-vida/ciclo-de-vida.component';
import { CicloDeVidaPaiComponent } from './components/ciclo-de-vida-pai/ciclo-de-vida-pai.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponentComponent,
    SegundoComponentComponent,
    MultiplicaPorPipe,
    PipeCustimizadoComponent,
    TwoWayDataBindingComponent,
    RenderizandoListasComponent,
    PersonalizadoComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    ExemplosServico1Component,
    ExemplosServico2Component,
    CicloDeVidaComponent,
    CicloDeVidaPaiComponent,
    CardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
