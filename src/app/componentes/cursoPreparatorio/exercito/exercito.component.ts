import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercito',
  templateUrl: './exercito.component.html',
  styleUrls: ['./exercito.component.css'],
})
export class ExercitoComponent implements OnInit {
  titleParallax_1: string = 'Escola de Sargento das Armas';
  titleParallax_2: string = 'Escola de Cadetes';
  subtitleParallax_1: string = 'Escola de Sargento das Armas - ESA';
  subtitleParallax_2: string = 'Escola de Cadetes do Exército - ESPECEX';

  textParallax_1: SafeHtml;
  textParallax_2: SafeHtml;

  linkUrl: string = '/cursos';
  constructor(private router: Router, private sanitizer: DomSanitizer) {
    this.textParallax_1 = this.sanitizer.bypassSecurityTrustHtml(this.esa);
    this.textParallax_2 = this.sanitizer.bypassSecurityTrustHtml(this.especex);
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }
  ngOnInit(): void {
    this.textParallax_1;
    this.textParallax_2;
  }

  esa:string=`
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">O Concurso</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 Forma Sargentos, de ambos os sexos, com nível de Educação Superior de Graduação Tecnológica em diversas áreas para atuação direta nas atividades de proteção do território brasileiro tais como Infantaria, Cavalaria, Artilharia, Engenharia, Comunicações, Material Bélico, Intendência Topografia, Aviação, Músico, Saúde, dentre outras
</span>
<span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Escolaridade</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Ensino médio completo no ato da matrícula do curso de formação.
</span>
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Limite de idade</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Idade mínima: 17 anos até 31/12/2025 (ano da matrícula)
 - Idade máxima: 24 anos (área geral) e 26 anos (saúde e músico) até 31/12/2025 (ano da matrícula)
</span>
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Estatura</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Sexo masculino: mínimo 1,60 m de altura, sendo que esta limitação não se aplica aos candidatos com até 17 (dezessete) anos de idade incompletos, desde que possuam a altura mínima de 1,57 m e exame especializado revele a possibilidade do crescimento;
 - Sexo feminino: mínimo 1,55 m de altura.
</span>
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Matérias</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Português, Redação, Literatura, Inglês, Matemática, História, Geografia do Brasil,
 - Teoria Musical (somente para músico) e Enfermagem (somente para área da saúde).

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Mês previsto da prova escrita</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Setembro/Outubro
</span>
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Duração e local do curso de formação</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - 2 anos em regime de internato em diversos locais do Brasil.
</span>

 `
  especex:string=`
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">O Concurso</span> <span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 Curso de Formação de Oficiais das Armas, com graduação de Bacharel em Ciências Militares, para ambos os sexos, do Quadro de Cavalaria, Artilharia, Engenharia, Comunicações, Intendência e Material Bélico do Exército Brasileiro.
</span>
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Escolaridade</span> <span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Ensino médio completo no ato da matrícula do curso de formação.
</span>
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Limite de idade</span> <span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Idade mínima: 17 anos até 31/12/2025 (ano da matrícula)
 - Idade máxima: 24 anos até 31/12/2025 (ano da matrícula)
</span>
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Estatura</span> <span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Sexo masculino: mínimo 1,60 m de altura, sendo que esta limitação não se aplica aos candidatos com até 16 anos de idade, desde que possuam a altura mínima de 1,57 m e exame especializado revele a possibilidade do crescimento;
 - Sexo feminino: mínimo 1,55 m de altura.
</span>
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Matérias</span> <span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Português, Redação, Física, Química, Matemática, Geografia, História e Inglês
</span>
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Mês previsto da prova escrita</span> <span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Setembro
</span>
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Duração e local do curso de formação</span> <span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - 5 anos em regime de internato
 - 1° ano em Campinas/SP e os 4 últimos anos em Resende/RJ
</span>

 `
}
