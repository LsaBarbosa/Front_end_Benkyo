import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons-cursos',
  templateUrl: './buttons-cursos.component.html',
  styleUrls: ['./buttons-cursos.component.css'],
})
export class ButtonsCursosComponent implements OnInit {
  img: string = '../../../assets/botao/inscreva/matricule-se.png';
  ngOnInit(): void {
    this.img;
  }
}
