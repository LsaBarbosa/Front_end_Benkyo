import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publi',
  templateUrl: './publi.component.html',
  styleUrls: ['./publi.component.css'],
})
export class PubliComponent {
  textParallax_1: SafeHtml;
  textParallax_2: SafeHtml;
  textParallax_3: SafeHtml;
  constructor(private router: Router, private sanitizer: DomSanitizer) {
    this.textParallax_1 = this.sanitizer.bypassSecurityTrustHtml(`
    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Ensino humanizado</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.4rem"> com os </span><span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">melhores professores</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.4rem"> da região</span>

    `);
    this.textParallax_2 = this.sanitizer.bypassSecurityTrustHtml(`
    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">
    * Projetos
    * Aulões específicos
    * Mentorias individuais
    * Simulados</span>

    `);
    this.textParallax_3 = this.sanitizer.bypassSecurityTrustHtml(`
    <span style="color:  var(--branco);font-weight: bold; font-family: 'Montserrat', sans-serif">Benefícios e bônus podem mudar</span><span style="color:  var(--branco);font-weight: 400;font-family: 'Montserrat', sans-serif "> de acordo com o preparatório escolhido</span>
    `);
  }
}
