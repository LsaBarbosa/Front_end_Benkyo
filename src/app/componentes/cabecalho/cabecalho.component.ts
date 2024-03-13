import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements OnInit {
  img = '../../../assets/cursos/curso/Logo.png';
  imgCursos = '../../../assets/botao/menu/CURSOS.png';

  constructor(private router: Router) {}
 
  onImageClick(): void {
    this.router.navigate(['/home']);
  }
  
  ngOnInit() {
    this.img;
    this.onImageClick;
    this.imgCursos;
  }
}
