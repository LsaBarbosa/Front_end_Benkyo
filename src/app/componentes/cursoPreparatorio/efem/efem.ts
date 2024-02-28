import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-efem',
  templateUrl: './efem.html',
  styleUrls: ['./efem.component.css'],
})
export class EfemComponent implements OnInit {
  titleParallax_1: string = ``;
  titleParallax_2: string = ``;
  titleParallax_3: string = ``;
  titleParallax_4: string = ``;
  subtitleParallax_1: string = 'Escolas Federais do Ensino Médio - EFEM';

  linkUrl: string = '/cursos';

  textParallax_1: SafeHtml;

  constructor(private router: Router, private sanitizer: DomSanitizer) {
    this.textParallax_1 = this.sanitizer.bypassSecurityTrustHtml(`
    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Término das Aulas</span>
    <span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - Um dia antes da última prova
    </span>
    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Carga Horária</span>
    <span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - 16 horas/aulas semanais. Terça, Quartas e Quinta
    - Algumas Segundas-Feiras serão marcados previamente
    simulados e/ou aulões das 14:00 às 17:00
    </span>
    <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Escolha Seu Horário</span>
    <span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
    - 14:00 às 17:00
    - 18:00 às 21:00
    </span>

    `);
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }
  ngOnInit(): void {
    this.textParallax_1;
    this.subtitleParallax_1;
  }
}
