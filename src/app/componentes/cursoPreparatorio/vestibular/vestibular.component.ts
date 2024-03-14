import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vestibular',
  templateUrl: './vestibular.component.html',
  styleUrls: ['./vestibular.component.css'],
})
export class VestibularComponent implements OnInit {
  titleParallax_1: string = ``;
  subtitleParallax_1: string = 'ENEM e UERJ';

  linkUrl: string = 'https://app.zapsign.com.br/verificar/doc/dd3856c8-fc36-4c4e-9cfb-86025149fb66';

  textParallax_1: SafeHtml;

  constructor(private router: Router, private sanitizer: DomSanitizer) {
    this.textParallax_1 = this.sanitizer.bypassSecurityTrustHtml(this.vestibular);
  }

  navigateTo(url: string) {
    window.open(url,this.linkUrl);
  }

  ngOnInit(): void {
    this.subtitleParallax_1;
    this.textParallax_1;
  }
  vestibular:string = `
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Término das Aulas</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
  \n- Um dia antes da última prova do ENEM e UERJ</span>
</span>
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Carga Horária</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
  \n- 24 horas/aulas semanais. Segunda a Sexta + Sábado
  \n- Alguns sábados serão marcados previamente
  \nsimulados e/ou aulões das 08:00 as 17:00</span>

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Escolha seu horário</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
  \n- 08:00 às 11:40 \n\n- 14:00 às 17:40 \n\n- 18:00 às 21:40</span>

  `
}
