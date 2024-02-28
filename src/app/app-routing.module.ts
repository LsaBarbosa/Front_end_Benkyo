import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './componentes/curso/curso.component';
import { MainComponent } from './componentes/main/main.component';
import { MarinhaComponent } from './componentes/cursoPreparatorio/marinha/marinha.component';
import { ExercitoComponent } from './componentes/cursoPreparatorio/exercito/exercito.component';
import { FabComponent } from './componentes/cursoPreparatorio/fab/fab.component';
import { VestibularComponent } from './componentes/cursoPreparatorio/vestibular/vestibular.component';
import { MedComponent } from './componentes/cursoPreparatorio/vestibular/medicina/med/med.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { EfemComponent } from './componentes/cursoPreparatorio/efem/efem';
import { AdministrativasComponent } from './componentes/cursoPreparatorio/administrativas/administrativas.component';
import { JuridicasComponent } from './componentes/cursoPreparatorio/juridicas/juridicas.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { BombeiroComponent } from './componentes/cursoPreparatorio/bombeiro/bombeiro.component';
import { CnuComponent } from './componentes/cursoPreparatorio/cnu/cnu.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'cursos',
    component: CursosComponent,
  },
  {
    path: 'home',
    component: MainComponent,
  },
  {
    path: 'marinha',
    component: MarinhaComponent,
  },
  {
    path: 'exercito',
    component: ExercitoComponent,
  },
  {
    path: 'fab',
    component: FabComponent,
  },
{
path:"cnu",
component: CnuComponent
},
  {
    path: 'vestibular',
    component: VestibularComponent,
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },
  {
    path: 'efem',
    component: EfemComponent,
  },
  {
    path: 'concursos',
    component: CursosComponent,
  },
  {
    path: 'juridica',
    component: JuridicasComponent,
  },
  {
    path: 'adm',
    component: AdministrativasComponent,
  },
  {
    path: 'contato',
    component: ContatoComponent,
  },
  {
    path: 'bombeiro',
    component: BombeiroComponent,
  },
  {
    path: 'med',
    component: MedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
