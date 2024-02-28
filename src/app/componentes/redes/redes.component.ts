import { Component } from '@angular/core';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css'],
})
export class RedesComponent {
  whatsappIcon = faWhatsapp;
  instagramIcon = faInstagram;
  contatoIcon = faPhone;
  contatoIcon_2 = faPhone;
  location = faLocationDot;

  telefone: string = '+5521991861970';
  msg: string = 'Gostaria de informações sobre o pré-Militar';
  msg2: string =
    'Gostaria de informações sobre o pré-Vestibular e Concursos públicos';
  telefone2: string = '+5521987288860';

  enviarMensagem() {
    const mensagemURI = `whatsapp://send?phone=${
      this.telefone
    }&text=${encodeURIComponent(this.msg)}`;
    window.location.href = mensagemURI;
  }
  enviarMensagem2() {
    const mensagemURI = `whatsapp://send?phone=${
      this.telefone2
    }&text=${encodeURIComponent(this.msg2)}`;
    window.location.href = mensagemURI;
  }

  abrirInstagram() {
    const instagramUrl = 'https://www.instagram.com/benkyopreparatorio/';
    window.open(instagramUrl, '_blank');
  }

  abrirMapa() {
    const mapsUrl =
      "https://www.google.com/maps/place/22%C2%B036'31.5%22S+43%C2%B010'30.7%22W/@-22.6087287,-43.1754431,21z/data=!4m4!3m3!8m2!3d-22.6087436!4d-43.1751796?entry=ttu";
    window.open(mapsUrl, '_blank');
  }

  fazerChamada() {
    const numeroTelefone = '20503526';

    const chamadaUri = `tel:${numeroTelefone}`;
    window.location.href = chamadaUri;
  }
  fazerChamada2() {
    const numeroTelefone = '27394936';

    const chamadaUri = `tel:${numeroTelefone}`;
    window.location.href = chamadaUri;
  }
}
