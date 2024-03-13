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
  texto1 = `EM  `;
  texto2 = ` 2023`;
  texto3 = `NÓS REALIZAMOS `;
  texto4 = `MUITOS SONHOS!`;
  img1 = '../../../assets/Home/VESTIBULAR.png';
  img2 = `../../../assets/Home/MILITAR.png`;
  img3 = `../../../assets/Home/MEDICINA.png`;
  img4 = `../../../assets/Home/CONCURSOS.png`;
  img5 = `../../../assets/Home/ENSINO MÉDIO.png`;

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
    this.img4;
    this.img5;
    this.texto1;
    this.texto2;
    this.texto3;
    this.texto4;
    this.regras;
  }
}
