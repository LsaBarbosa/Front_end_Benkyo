import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css'],
})
export class SobreComponent implements OnInit {
  titleParallax_1: string = 'O Começo';
  titleParallax_2: string = 'O Percurso';
  titleParallax_3: string = 'O Benkyô';
  subtitleParallax_1: string = 'Curso Visão';
  subtitleParallax_2: string = 'A Caminhada foi longa';
  subtitleParallax_3: string = 'Estudar';

  textParallax_1: SafeHtml;
  textParallax_2: SafeHtml;
  textParallax_3: SafeHtml;

  constructor(private router: Router, private sanitizer: DomSanitizer) {
    this.textParallax_1 = this.sanitizer.bypassSecurityTrustHtml(`
    <span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">No ano de 1980, o nobre sonho do mestre</span><span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem"> Kenji Nishio</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem"> de iniciar em Piabetá um curso preparatório que oportunizasse a aprovação de jovens à carreira militar se concretizava.</span>
    `);

    this.textParallax_2 = this.sanitizer.bypassSecurityTrustHtml(`
    <span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">Inicialmente, denominado pelos própios alunos como</span> <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">curso visão</span>, <span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem"> na rua Japonês, depois da rua Santa Elisa.

    Em 2011 numa proposta de ação social, na igreja Batista Monte Verde em Pau Grande.</span>

    <span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">Finalmente, fixamos nossas instalações na rua Magé como curso</span> <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Benkyô</span>

    `);

    this.textParallax_3 = this.sanitizer.bypassSecurityTrustHtml(`
    <span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">Benkyô que significa estudar em japonês, representa a essência do nosso objetivo

    Nosso espaço é novo, mas o ensino humanizado, a excelente qualidade profissional da equipe e o desejo de colaborar na sua aprovação permanecem.

    Profissionais experientes e ambiente acolhedor, além de sermos movidos pelo sentimento de dar aos nossos alunos a qualidade necessária para aprovação nas carreiras militares, vestibulares e concursos públicos em geral

    Se o seu objetivo é conquistar uma dessas áreas, venha conhecer o curso</span> <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Benkyô</span>!

    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Nosso maior compromisso é com seu sucesso !</span>
    `);
  }

  ngOnInit(): void {
    this.textParallax_1;
    this.textParallax_3;
    this.textParallax_3;
  }
}
