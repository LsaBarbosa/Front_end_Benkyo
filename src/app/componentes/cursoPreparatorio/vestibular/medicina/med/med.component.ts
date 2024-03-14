import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-med',
  templateUrl: './med.component.html',
  styleUrls: ['./med.component.css'],
})
export class MedComponent implements OnInit {
  titleParallax_1: string = ``;
  subtitleParallax_1: string = 'Preparatório de Medicina - PRÉ-MED';

  linkUrl: string = 'https://app.zapsign.com.br/verificar/doc/eb0e6079-43f5-46d9-8e24-10bab22944d3';

  textParallax_1: SafeHtml;

  constructor(private router: Router, private sanitizer: DomSanitizer) {
    this.textParallax_1 = this.sanitizer.bypassSecurityTrustHtml(this.med);
  }

  navigateTo(url: string) {
    window.open(url,this.linkUrl);
  }
  ngOnInit(): void {
    this.subtitleParallax_1;
    this.textParallax_1;
  }

  med:string=`
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Término das Aulas</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
  \n- Um dia antes da última prova do ENEM e UERJ(2° fase)</span>

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Carga Horária</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
  \n- 40 horas semanais. Segunda a Sexta + Sábado
  \n- Alguns sábados serão marcados previamente
  \nsimulados e/ou aulões das 08:00 às 17:00</span>

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Escolha seu horário</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
  \n- 08:00 as 16:00</span>

  `
}
