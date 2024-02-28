import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.css'],
})
export class FabComponent implements OnInit {
  titleParallax_1: string = 'Escola de Especialistas';
  subtitleParallax_1: string = 'Escola de Especialistas da Aeronáutica- EEAR';
  textParallax_1: SafeHtml;

  titleParallax_2: string = 'Academia da Força Aérea';
  subtitleParallax_2: string = 'Academia da Força Aérea - AFA';
  textParallax_2: SafeHtml;

  titleParallax_3: string = 'Escola Preparatória de Cadetes do Ar';
  subtitleParallax_3: string = 'Escola Preparatória de Cadetes do Ar - EPCAR';
  textParallax_3: SafeHtml;

  linkUrl: string = '/cursos';
  constructor(private router: Router, private sanitizer: DomSanitizer) {
    this.textParallax_1 = this.sanitizer.bypassSecurityTrustHtml(`
    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">O Concurso</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    Forma Sargentos, de ambos os sexos, com nível de Educação Superior de Graduação Tecnológica em diversas áreas para atuação direta nas atividades de proteção do território brasileiro tais como Infantaria, Cavalaria, Artilharia, Engenharia, Comunicações, Material Bélico, Intendência Topografia, Aviação, Músico, Saúde, dentre outras</span>

    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Escolaridade</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - Ensino médio completo no ato da matrícula do curso de formação.</span>

    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Limite de idade</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - Idade mínima: 17 anos até 31/12/2025 (ano da matrícula)
    - Idade máxima: 24 anos (área geral) e 26 anos (saúde e músico) até 31/12/2025 (ano da matrícula)</span>

    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Estatura</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - Sexo masculino: mínimo 1,60 m de altura, sendo que esta limitação não se aplica aos candidatos com até 17 (dezessete) anos de idade incompletos, desde que possuam a altura mínima de 1,57 m e exame especializado revele a possibilidade do crescimento;
    - Sexo feminino: mínimo 1,55 m de altura.</span>

    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Matérias</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - Português, Redação, Literatura, Inglês, Matemática, História, Geografia do Brasil,
    - Teoria Musical (somente para músico) e Enfermagem (somente para área da saúde).</span>

    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Mês previsto da prova escrita</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - Setembro/Outubro</span>

    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Duração e local do curso de formação</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - 2 anos em regime de internato em diversos locais do Brasil.</span>
    `);
    this.textParallax_2 = this.sanitizer.bypassSecurityTrustHtml(`
    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">O Concurso</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    Curso de Formação de Oficiais Aviadores, Intendentes, para ambos os sexos, e de Infantaria, somente para o sexo masculino, da Força Aérea Brasileira.</span>

    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Escolaridade</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - Ensino médio completo no ato da matrícula do curso de formação.</span>

    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Limite de idade</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - Idade mínima: 17 anos até 31/12/2025 (ano da matrícula)
    - Idade máxima: 22 anos até 31/12/2025 (ano da matrícula)</span>

    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Estatura</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - Sexo masculino: mínimo 1,60 m de altura
    - Sexo feminino: mínimo 1,55 m de altura.
    - Para o ingresso no Curso de Formação de Oficiais Aviadores, a estatura mínima de 1,64m e máxima de 1,87m, para ambos os sexos, em virtude dos requisitos antropométricos exigidos pelo fabricante da cadeira de ejeção que equipa a aeronave T-27 Tucano, utilizada na Instrução de Voo da AFA. (NR) – Portaria DIRSA n°39/SECSDTEC, de 31 de março de 2016.</span>

    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Matérias</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - Português, Redação, Matemática, Física e Inglês</span>

    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Mês previsto da prova escrita</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - Junho</span>

    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Duração e local do curso de formação</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - 4 anos em regime de internato em Pirassununga/SP</span>
    `);
    this.textParallax_3 = this.sanitizer.bypassSecurityTrustHtml(`
    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">O Concurso</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    Destina-se a preparar jovens de ambos os sexos para o ingresso no Curso de Formação de Oficiais Aviadores na AFA, equivalente ao Ensino Médio Regular que abrange instruções nos Campos Geral e Militar</span>

    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Escolaridade</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - Ensino fundamental completo no ato da matrícula do curso de formação.</span>

    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Limite de idade</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - Idade mínima: 14 anos até 31/12/2025 (ano da matrícula)
    - Idade máxima: 18 anos  até 31/12/2025 (ano da matrícula)</span>

    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Estatura</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - Mínimo 1,60m e máximo 1,87m para ambos os sexos</span>

    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Matérias</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - Português, Redação, Matemática e Inglês</span>

    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Mês previsto da prova escrita</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - Julho</span>

    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Duração e local do curso de formação</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - 3 anos em regime de internato em Barbacena/MG </span>
    `);
  }
  navigateTo(url: string) {
    this.router.navigate([url]);
  }
  ngOnInit(): void {
    this.textParallax_1;
    this.textParallax_2;
    this.textParallax_3;
  }
}
