import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juridicas',
  templateUrl: './juridicas.component.html',
  styleUrls: ['./juridicas.component.css'],
})
export class JuridicasComponent implements OnInit {
  titleParallax_1: string = ''; 
  subtitleParallax_1: string = 'TSE / TRE';
  textParallax_1: SafeHtml;

  linkUrl: string = '/contato';
  constructor(private router: Router, private sanitizer: DomSanitizer) {
    this.textParallax_1 = this.sanitizer.bypassSecurityTrustHtml(this.jruidica);
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }
  ngOnInit(): void {
    this.textParallax_1;
  }

  jruidica:string =`
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">O Concurso</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
  O concurso do TSE + TRE's unificado previsto para sair ainda neste ano, 2024, incluirá a participação de diversos TRE's pelo país
</span>
<span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Escolaridade</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Nível Superior
</span>
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Matérias</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
  - Língua Portuguesa; Informática; Direito Administrativo; Regimento Interno; 
  - Noções de Arquivologia; Raciocínio Lógico; Direito Constitucional e Direito Eleitoral.
  * Matérias baseadas no último edital publicado pelo orgão.

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Cronograma</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Início das aulas: 23/01/2024
 - Término das aulas: 04/05/2024
 - Aulas: Segunda-feira a Quinta-Feira, das 18:30 às 21:30, e Sábado, das 8:00 às 13:00.
</span>
 `

}
