import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bombeiro',
  templateUrl: './bombeiro.component.html',
  styleUrls: ['./bombeiro.component.css'],
})
export class BombeiroComponent implements OnInit {
  titleParallax_1: string = 'Bombeiro Militar';
  subtitleParallax_1: string = 'Bombeiro Militar - BM';

  textParallax_1: SafeHtml;

  linkUrl: string = '/cursos';

  constructor(private router: Router, private sanitizer: DomSanitizer) {
    this.textParallax_1 = this.sanitizer.bypassSecurityTrustHtml(`
    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">O Concurso</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    Concurso destinado ao cargo de CADETE BM do 1° ano do Curso de Formação de Oficiais para ambos os sexos.</span>

    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Escolaridade</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - Ensino médio completo no ato da matrícula do curso de formação.</span>

    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Limite de idade</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - Idade mínima: 18 anos no ato da matrícula do Curso de Formação.
    - Idade máxima: não há</span>

    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Estatura</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - Mínimo 1,54m e máximo 1,95m para ambos os sexos</span>

    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Matérias</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - Português, Matemática, Física, Química, Biologia, Geografia, História, Inglês e Sociologia.</span>

    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Mês previsto da prova escrita</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - Dezembro</span>

    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Duração e local do curso de formação</span>:<span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - 4 anos em Guadalupe/RJ</span>

    `);
  }
  navigateTo(url: string) {
    this.router.navigate([url]);
  }
  ngOnInit(): void {
    this.textParallax_1;
  }
}
