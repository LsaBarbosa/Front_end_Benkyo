import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marinha',
  templateUrl: './marinha.component.html',
  styleUrls: ['./marinha.component.css'],
})
export class MarinhaComponent implements OnInit {
  titleParallax_1: string = 'Colégio Naval';
  titleParallax_2: string = 'Aprendiz de Marinheiro';
  titleParallax_3: string = 'Fuzileiro Naval';
  titleParallax_4: string =
    'Escola de Formação de Oficiais da Marinha Mercante';
  subtitleParallax_1: string = 'Colégio Naval - CN';
  subtitleParallax_2: string = 'Escola de Aprendizes de Marinheiros - EAM';
  subtitleParallax_3: string = 'Fuzileiro Naval - FN';
  subtitleParallax_4: string =
    'Escola de Formação de Oficiais da Marinha Mercante – EFOMM';

  textParallax_1: SafeHtml;
  textParallax_2: SafeHtml;
  textParallax_3: SafeHtml;
  textParallax_4: SafeHtml;

  linkUrl: string = '/cursos';

  constructor(private router: Router, private sanitizer: DomSanitizer) {
    this.textParallax_1 = this.sanitizer.bypassSecurityTrustHtml(this.cn);
    this.textParallax_2 = this.sanitizer.bypassSecurityTrustHtml(this.eam);
    this.textParallax_3 = this.sanitizer.bypassSecurityTrustHtml(this.fn);
    this.textParallax_4 = this.sanitizer.bypassSecurityTrustHtml(this.efom);
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }
  ngOnInit(): void {
    this.textParallax_1;
    this.textParallax_2;
    this.textParallax_3;
    this.textParallax_4;
  }

  cn:string=`
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">O Concurso</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 Destina-se a preparar jovens de ambos os sexos para o ingresso na Escola Naval, equivalente ao Ensino Médio Regular que abrange instruções nos Campos Geral e Militar-Naval.</span>

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Escolaridade</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Ensino fundamental completo no ato da matrícula do curso de formação.</span>

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Limite de idade</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Idade mínima: 15 anos até 30/06/2025 (ano da matrícula)
 - Idade máxima: 17 anos até 30/06/2025 (ano da matrícula)</span>

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Estatura</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Mínimo 1,54m e máximo 1,95m para ambos os sexos</span>

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Matérias</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Português, Matemática, Inglês, Ciências (Física e Química), Estudos Sociais (História e Geografia) e Redação.</span>

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Mês previsto da prova escrita</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Maio</span>

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Duração e local do curso de formação</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - 3 anos em Angra dos Reis/RJ</span>
 `
  eam:string=`
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">O Concurso</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 Concurso destinado à de Formação de Marinheiros para a Ativa (C-FMN), para ambos os sexos, no qual serão ministradas disciplinas do Ensino Básico e do Ensino Militar-Naval, cujo propósito é formar Marinheiros e Marinheiras para o Corpo de Praças da Marinha na área profissional de Eletroeletrônica, Apoio e Mecânica.</span>

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Escolaridade</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Ensino médio completo no ato da matrícula do curso de formação.</span>

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Limite de idade</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Idade mínima: 18 anos até 30/06/2025 (ano da matrícula)
 - Idade máxima: 21 anos até 30/06/2025 (ano da matrícula)</span>

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Matérias</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Português, Inglês, Matemática e Ciências (Física e Química)</span>

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Mês previsto da prova escrita</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Abril</span>

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Duração e local do curso de formação</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
  - 48 semanas em Florianópolis/SC ou em Fortaleza/CE ou em Vila Velha/ES</span>
 `
  fn:string=`
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">O Concurso</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 Curso destinado à formação de Soldados Fuzileiros Navais(C-FSD-FN), para ambos os sexos. Após a formação, o SD Fuzileiro assumirá compromisso por tempo de serviço no serviço ativo da Marinha por período de 2 anos, podendo ser prorrogado até chegar a Suboficial, desde que cumpridos requisitos da legislação em vigor.</span>

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Escolaridade</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Ensino médio completo no ato da matrícula do curso de formação</span>

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Limite de idade</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Idade mínima: 18 anos até 30/06/2025 (ano da matrícula)
 - Idade máxima: 21 anos até 30/06/2025 (ano da matrícula)</span>

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Matérias</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Português e Matemática</span>

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Mês previsto da prova escrita</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Maio</span>

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Duração e local do curso de formação</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Aproximadamente 17 semanas no CIAMPA/RJ.</span>
 `
  efom:string=`
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">O Concurso</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 Concurso destinado à Formação de Oficial de Máquinas da Marinha Mercante (FOMQ) e de Náutica da Marinha Mercante (FONT), para ambos os sexos, com graduação em Bacharel de Ciências Náuticas  (2° Tenente da Reserva).

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Escolaridade</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Ensino médio completo no ato da matrícula do curso de formação.</span>

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Limite de idade</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Idade mínima: 17 anos até 01/01/2025 (ano da matrícula)
 - Idade máxima: 23 anos até 01/01/2025 (ano da matrícula)</span>

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Matérias</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Português, Física, Matemática, Inglês e Redação</span>

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Mês previsto da prova escrita</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Agosto</span>

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Duração e local do curso de formação</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - 3 anos no Rio de Janeiro/RJ ou em Belém/PA</span>
 `
}
