import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-home',
  templateUrl: './button-home.component.html',
  styleUrls: ['./button-home.component.css']
})
export class ButtonHomeComponent implements OnInit {
  img: string = '../../../assets/botao/inscreva/matricule-se.png';
  ngOnInit(): void {
    this.img;
  }
}
