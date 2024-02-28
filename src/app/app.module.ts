import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { MainComponent } from './componentes/main/main.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CursosComponent } from './componentes/curso/curso.component';
import { FormsModule } from '@angular/forms';
import { BotoesComponent } from './componentes/botoes/botoes.component';
import { HttpClientModule } from '@angular/common/http';
import { MarinhaComponent } from './componentes/cursoPreparatorio/marinha/marinha.component';
import { ExercitoComponent } from './componentes/cursoPreparatorio/exercito/exercito.component';
import { FabComponent } from './componentes/cursoPreparatorio/fab/fab.component';
import { VestibularComponent } from './componentes/cursoPreparatorio/vestibular/vestibular.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { EfemComponent } from './componentes/cursoPreparatorio/efem/efem';
import { ButtonsCursosComponent } from './componentes/buttons-cursos/buttons-cursos.component';
import { ConcursosComponent } from './componentes/cursoPreparatorio/concursos/concursos.component';
import { PmComponent } from './componentes/cursoPreparatorio/pm/pm.component';
import { BombeiroComponent } from './componentes/cursoPreparatorio/bombeiro/bombeiro.component';
import { JuridicasComponent } from './componentes/cursoPreparatorio/juridicas/juridicas.component';
import { AdministrativasComponent } from './componentes/cursoPreparatorio/administrativas/administrativas.component';
import { BotaoHamburguerComponent } from './componentes/botao-hamburguer/botao-hamburguer.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RedesComponent } from './componentes/redes/redes.component';
import { MedComponent } from './componentes/cursoPreparatorio/vestibular/medicina/med/med.component';
import { PubliComponent } from './componentes/curso/publi/publi.component';
import { CnuComponent } from './componentes/cursoPreparatorio/cnu/cnu.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    MainComponent,
    FooterComponent,
    CursosComponent,
    BotoesComponent,
    MarinhaComponent,
    ExercitoComponent,
    FabComponent,
    VestibularComponent,
    SobreComponent,
    EfemComponent,
    ButtonsCursosComponent,
    ConcursosComponent,
    PmComponent,
    BombeiroComponent,
    JuridicasComponent,
    AdministrativasComponent,
    BotaoHamburguerComponent,
    ContatoComponent,
    RedesComponent,
    MedComponent,
    PubliComponent,
    CnuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
