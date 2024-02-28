import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  endereco = 'Rua Magé, 132 - Piabetá';
  gps = 'https://maps.app.goo.gl/Naqe3gBsaw7FR9fn7';
}
