import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface BotaoInfo {
  clicado: boolean;
  imagemInicial: string;
  imagemClicada: string;
}

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
})
export class CursosComponent {
  galeriaAberta = false;
  categoriaAtual: string = '';
  cursos: any[] = [];
  descricaoBotaoAtual: SafeHtml = this.sanitizer.bypassSecurityTrustHtml('');
  descricaoBotaoAtual_2: SafeHtml = this.sanitizer.bypassSecurityTrustHtml('');
  descricaoBotaoAtual_3: SafeHtml = this.sanitizer.bypassSecurityTrustHtml('');
  descricaoBotaoAtual_4: SafeHtml = this.sanitizer.bypassSecurityTrustHtml('');

  img = '../../../assets/cursos/curso/Contorno.png';
  caminhoImg = '../../../assets/cursos/curso/Caminho.png';
  logo = '../../../assets/cursos/curso/Logo.png';
  textoGaleriaAtual: string = '';
  linkUrl: string = '/cursos';

  abrirGaleria(categoria: any) {
    this.resetarEstadosBotoes();
    this.botaoInfo[categoria].clicado = true;
    if (this.galeriaAberta && this.categoriaAtual === categoria) {
      this.fecharGaleria();
    } else {
      this.galeriaAberta = true;
      this.categoriaAtual = categoria;
      this.cursos = this.getcursosPorCategoria(categoria);
      this.atualizarDescricaoBotao(categoria);
      this.botaoInfo[categoria].clicado = true;
      this.textoGaleriaAtual = this.getTextoGaleria(categoria);
    }
  }

  getTextoGaleria(categoria: string): string {
    switch (categoria) {
      case 'Militar':
        return 'CARREIRA MILITAR';
      case 'Vestibular':
        return 'UNIVERSIDADES PÚBLICAS';
      case 'Efem':
        return 'ESCOLAS FEDERAIS DO ENSINO MÉDIO';
      case 'Concursos':
        return 'CONCURSOS PÚBLICOS';

      default:
        return 'Texto Padrão';
    }
  }

  fecharGaleria() {
    this.galeriaAberta = false;
    this.categoriaAtual = '';
    this.cursos = [];
    this.atualizarDescricaoBotao('');
    this.resetarEstadosBotoes();
  }

  constructor(private sanitizer: DomSanitizer) {
    this.atualizarDescricaoBotao('Militar');
    this.atualizarDescricaoBotao('Vestibular');
    this.atualizarDescricaoBotao('Efem');
    this.atualizarDescricaoBotao('Concurso');
  }

  botaoInfo: { [key: string]: BotaoInfo } = {
    Militar: {
      clicado: false,
      imagemInicial: '../../../assets/botao/off/Pré-Militar.png',
      imagemClicada: '../../../assets/botao/on/Pré-Militar - On.png',
    },

    Vestibular: {
      clicado: false,
      imagemInicial: '../../../assets/botao/off/Pré-Vest.png',
      imagemClicada: '../../../assets/botao/on/Pré-Vest - On.png',
    },
    Efem: {
      clicado: false,
      imagemInicial: '../../../assets/botao/off/Pré-EFEM.png',
      imagemClicada: '../../../assets/botao/on/Pré-EFEM - ON.png',
    },
    Concursos: {
      clicado: false,
      imagemInicial: '../../../assets/botao/off/Concursos.png',
      imagemClicada: '../../../assets/botao/on/Concursos - ON.png',
    },
  };

  resetarEstadosBotoes() {
    Object.values(this.botaoInfo).forEach((botao) => {
      botao.clicado = false;
    });
  }
  atualizarDescricaoBotao(categoria: string) {
    if (categoria === 'Militar') {
      this.descricaoBotaoAtual = this.sanitizer.bypassSecurityTrustHtml(
        this.descricaoMilitar
      );
      this.descricaoBotaoAtual_2 = this.sanitizer.bypassSecurityTrustHtml(
        this.descricaoMilitar_2
      );
      this.descricaoBotaoAtual_3 = this.sanitizer.bypassSecurityTrustHtml(
        this.descricaoMilitar_3
      );
      this.descricaoBotaoAtual_4 = this.sanitizer.bypassSecurityTrustHtml(
        this.descricaoMilitar_4
      );
    } else if (categoria === 'Vestibular') {
      this.descricaoBotaoAtual = this.sanitizer.bypassSecurityTrustHtml(
        this.descricaoVestibular
      );
      this.descricaoBotaoAtual_2 = this.sanitizer.bypassSecurityTrustHtml(
        this.descricaoVestibular_2
      );
      this.descricaoBotaoAtual_3 = this.sanitizer.bypassSecurityTrustHtml(
        this.descricaoVestibular_3
      );
      this.descricaoBotaoAtual_4 = this.sanitizer.bypassSecurityTrustHtml(
        this.descricaoVestibular_4
      );
    } else if (categoria === 'Efem') {
      this.descricaoBotaoAtual = this.sanitizer.bypassSecurityTrustHtml(
        this.descricaoEfem
      );
      this.descricaoBotaoAtual_2 = this.sanitizer.bypassSecurityTrustHtml(
        this.descricaoEfem_2
      );
      this.descricaoBotaoAtual_3 = this.sanitizer.bypassSecurityTrustHtml(
        this.descricaoEfem_3
      );
      this.descricaoBotaoAtual_4 = this.sanitizer.bypassSecurityTrustHtml(
        this.descricaoEfem_4
      );
    } else if (categoria === 'Concursos') {
      this.descricaoBotaoAtual = this.sanitizer.bypassSecurityTrustHtml(
        this.descricaoConcurso
      );
      this.descricaoBotaoAtual_2 = this.sanitizer.bypassSecurityTrustHtml(
        this.descricaoConcurso_2
      );
      this.descricaoBotaoAtual_3 = this.sanitizer.bypassSecurityTrustHtml(
        this.descricaoConcurso_3
      );
    } else {
      this.descricaoBotaoAtual = this.sanitizer.bypassSecurityTrustHtml('');
    }
  }

  getcursosPorCategoria(categoria: string): any[] {
    if (categoria === 'Militar') {
      return [
        {
          imagem: '../../../assets/cursos//Pré-Miltiar principal/Marinha.png',
          rotaDestino: '/marinha',
          descricaoGaleria: 'MARINHA',
        },
        {
          imagem: '../../../assets/cursos//Pré-Miltiar principal/Exército.png',
          rotaDestino: '/exercito',
          descricaoGaleria: 'EXÉRCITO',
        },
        {
          imagem: '../../../assets/cursos//Pré-Miltiar principal/FAB.png',
          rotaDestino: '/fab',
          descricaoGaleria: 'FAB',
        },
        {
          imagem: '../../../assets/cursos//Pré-Miltiar principal/Bombeiros.png',
          rotaDestino: '/bombeiro',
          descricaoGaleria: 'BOMBEIRO',
        },
      ];
    } else if (categoria === 'Vestibular') {
      return [
        {
          imagem: '../../../assets/cursos/vestibular/vest.png',
          rotaDestino: '/vestibular',
          descricaoGaleria: 'VESTIBULAR',
        },
        {
          imagem: '../../../assets/cursos/vestibular/MED.png',
          rotaDestino: '/med',
          descricaoGaleria: 'PRÉ - MEDICINA',
        },
      ];
    } else if (categoria === 'Efem') {
      return [
        {
          imagem: '../../../assets/cursos/efem/EFEMlogo.png',
          rotaDestino: '/efem',
          descricaoGaleria: 'ESCOLA FEDERAIS',
        },
      ];
    } else if (categoria === 'Concursos') {
      return [
        {
          imagem: '../../../assets/cursos/concursos_publicos/concurso_img.jpg',
          rotaDestino: '/adm',
          descricaoGaleria: 'adm',
        },
        {
          imagem: '../../../assets/cursos/concursos_publicos/concurso_img.jpg',
          rotaDestino: '/juridica',
          descricaoGaleria: 'juridica',
        },
        {
          imagem: '../../../assets/cursos/concursos_publicos/concurso_img.jpg',
          rotaDestino: '/cnu',
          descricaoGaleria: 'cnu',
        },
      ];
    }
    return [];
  }

  descricaoMilitar: string = `
  <span style="color: #0e9eda;font-weight: bold;font-family: 'Montserrat', sans-serif; font-size: 1.4rem">No Pacote Oferecido</span>:
  <span style="color: #0e9eda;font-weight: 400;font-family: 'Montserrat', sans-serif; font-size: 1.1rem">
  Monitoria on-line
  \nMaterial didático on-line
  \nMentoria individualizada
  \nMatemática e Física zero (Online)
  \nVisitações as instituições militares, aulas de campo
  \nPlanejamento das aulas com cumprimento dos Editais
  \nEquipe de professores experientes em concursos militares
  \nEstrutura de qualidade (Salas climatizadas e equipadas com a melhor Tecnologia)
  </span>
  `;
  descricaoMilitar_2: string = `
  <span style="color: #0e9eda;font-weight: bold;font-family: 'Montserrat', sans-serif; font-size: 1.4rem">Bônus</span>:
  <span style="color: #0e9eda;font-weight: 400;font-family: 'Montserrat', sans-serif; font-size: 1.1rem">
  Momentos de relaxamento com as psicologas do curso
  \nSala de estudo disponível (mediante agendamento)
  </span>
  `;
  descricaoMilitar_3: string = `
  <span style="color:  #ffffff;font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Cronograma</span>:
  <span style="color:  #ffffff;font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
  Início das Aulas: 22/01/2024
  \nTermino das Aulas: 06/12/2024
  \nCarga Horária: 20 a 25 tempos semanais
  \nAlguns sábados serão marcados previamente simulados/aulões/projetos especiais
  </span>
`;
  descricaoMilitar_4: string = `
  <span style="color:  #ffffff;font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Combos</span>:
  <span style="color:  #ffffff;font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
  01 - Aulas presenciais + material PDF
  \n02 - Aulas presenciais + material PDF e impresso
  \n03 - Aulas presenciais + material PDF e impresso + simulados + gravação das aulas
  \n04 - Aulas on-line(gravadas) + material PDF + simulados PDF
  </span>
`;

  descricaoVestibular: string = `
  <span style="color: #0e9eda;font-weight: bold;font-family: 'Montserrat', sans-serif; font-size: 1.4rem">No Pacote Oferecido</span>:
  <span style="color: #0e9eda;font-weight: 400;font-family: 'Montserrat', sans-serif; font-size: 1.1rem">
  \nEstá incluso todo material utilizado no curso
  \nSimulado mensais e aulões interdisciplinares
  \nMonitorias
  \nCumprimento dos Editais
  \nEstrutura de qualidade (Salas climatizadas equipadas com multimídia)
  </span>
  `;

  descricaoVestibular_2: string = `
  <span style="color: #0e9eda;font-weight: bold;font-family: 'Montserrat', sans-serif; font-size: 1.4rem">Bônus</span>:
  <span style="color: #0e9eda;font-weight: 400;font-family: 'Montserrat', sans-serif; font-size: 1.1rem">
  \nVisitas a Universidades e Palestras para auxiliar na escolha da carreira.
  \nMentoria Individualizada
  \nMatemática e Física zero (Online)
  \nSuporte nas inscrições e no acompanhamento de cada etapa dos concursos
  </span>
`;
  descricaoVestibular_3: string = `
  <span style="color:  #ffffff;font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Cronograma</span>:
  <span style="color:  #ffffff;font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
  Início das Aulas: 29/01/2024
  \nCarga Horária: 24 a 40 horas semanais
  \nAlguns sábados serão marcados previamente simulados/aulões/projetos especiais
  </span>
`;
  descricaoVestibular_4: string = `

`;
  descricaoEfem: string = `
  <span style="color: #0e9eda;font-weight: bold;font-family: 'Montserrat', sans-serif; font-size: 1.4rem">No Pacote Oferecido</span>:
  <span style="color: #0e9eda;font-weight: 400;font-family: 'Montserrat', sans-serif; font-size: 1.1rem">
  \nEstá incluso todo material utilizado no curso
  \nSimulado a cada dois meses
  \nAcessoria exclusiva com a coordenação
  \nCumprimento dos Editais
  \nEstrutura de qualidade (Salas climatizadas equipadas com multimídia)
  </span>
  `;

  descricaoEfem_2: string = `
  <span style="color: #0e9eda;font-weight: bold;font-family: 'Montserrat', sans-serif; font-size: 1.4rem">Bônus</span>:
  <span style="color: #0e9eda;font-weight: 400;font-family: 'Montserrat', sans-serif; font-size: 1.1rem">
  \nPalestras para auxiliar na escolha da carreira.
  \nMentoria Individualizada
  \nMatemática zero (Online)
  \nSuporte nas inscrições e no acompanhamento de cada etapa dos concursos
  </span>
  `;
  descricaoEfem_3: string = `
  <span style="color:  #ffffff;font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Cronograma</span>:
  <span style="color:  #ffffff;font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
  Início das Aulas: 29/01/2024
  \nCarga Horária: 16 horas/semanais
  \nAlguns sábados serão marcados previamente simulados/aulões
  </span>
  `;
  descricaoEfem_4: string = `

  `;

  descricaoConcurso: string = `
  <span style="color: #0e9eda;font-weight: bold;font-family: 'Montserrat', sans-serif; font-size: 1.4rem">No Pacote Oferecido</span>:
  <span style="color: #0e9eda;font-weight: 400;font-family: 'Montserrat', sans-serif; font-size: 1.1rem">
  \nAulas gravadas e disponibilizadas online
  \nMaterial didático online
  \nSimulados e Aulões
  \nMatemática zero
  \nPlanejamento das aulas de acordo com o Edital
  </span>
  `;

  descricaoConcurso_2: string = `
  
`;
  descricaoConcurso_3: string = `
  <span style="color:  #ffffff;font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Cronograma</span>:
  <span style="color:  #ffffff;font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
  Início das Aulas: 16/01/2024
  \nCarga Horária: De acordo com o curso ecolhido 
 
  </span>
`;
descricaoConcurso_4: string = `

  `;
}
