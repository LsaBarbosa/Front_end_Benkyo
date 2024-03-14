import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html',
  styleUrls: ['./botoes.component.css'],
})
export class BotoesComponent implements OnInit {
  ngOnInit(): void {
    this.imgContato;
    this.imgCursos;
    this.imgHome;
    this.imgSobre;
  }

  imgHome = '../../../assets/botao/menu/Home.png';
  imgCursos = '../../../assets/botao/menu/CURSOS.png';
  imgSobre = '../../../assets/botao/menu/SOBRE.png';
  imgContato = '../../../assets/botao/menu/CONTATO.png';
}
