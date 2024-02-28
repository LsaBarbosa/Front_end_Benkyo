import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  regras = '../../../assets/Home/Regras no edital.png';
  img1 = '../../../assets/Home/TítuloVertical.png';
  texto = `Turmas 2024 com até`;
  texto2 = `100% de DESCONTO!`;
  img2 = `../../../assets/Home/Inscreva-se copiar.png`;
  img3 = `../../../assets/cursos/curso/Logo.png`;

  linkUrl: string =
    'https://docs.google.com/forms/d/1MADURrn6DuXn4ETXExXhRqFMofw41fXtttuBS-vtGn0/edit';
  constructor(private router: Router) {}

  navigateTo(url: string) {
    window.open(url, this.linkUrl);
  }

  ngOnInit(): void {
    this.img1;
    this.img2;
    this.img3;
    this.texto;
    this.texto2;
    this.regras;
  }
}
