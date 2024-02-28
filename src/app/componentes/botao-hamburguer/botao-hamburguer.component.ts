import { Component, Renderer2, ElementRef } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-botao-hamburguer',
  templateUrl: './botao-hamburguer.component.html',
  styleUrls: ['./botao-hamburguer.component.css'],
})
export class BotaoHamburguerComponent {
  iconBars = faBars;
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  fecharMenuHamburguer() {
    const checkbox = this.el.nativeElement.querySelector(
      '#navi-toggle'
    ) as HTMLInputElement;

    if (checkbox.checked) {
      checkbox.checked = false;
    }
  }
}
