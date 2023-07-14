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


@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponentComponent,
    SegundoComponentComponent,
    MultiplicaPorPipe,
    PipeCustimizadoComponent,
    TwoWayDataBindingComponent,
    RenderizandoListasComponent

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
