import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cnu',
  templateUrl: './cnu.component.html',
  styleUrls: ['./cnu.component.css'],
})
export class CnuComponent implements OnInit {
  titleParallax_1: string = '';
  titleParallax_2: string = '';
  titleParallax_3: string = '';

  subtitleParallax_1: string = 'BLOCOS 1 ao 7';
  subtitleParallax_2: string = 'BLOCO 8';
  subtitleParallax_3: string = 'Cadastro de reservas e o Pacote oferecido no curso';

  textParallax_1: SafeHtml;
  textParallax_2: SafeHtml;
  textParallax_3: SafeHtml;

  linkUrl: string = '/cursos';
  
  constructor(private router: Router, private sanitizer: DomSanitizer) {
    this.textParallax_1 = this.sanitizer.bypassSecurityTrustHtml(this.bloco_1_7);
    this.textParallax_2 = this.sanitizer.bypassSecurityTrustHtml(this.bloco_8);
    this.textParallax_3 = this.sanitizer.bypassSecurityTrustHtml(this.info);
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }

  ngOnInit(): void {
    this.textParallax_1;
    this.textParallax_2;
    this.textParallax_3;
  }

  bloco_1_7:string =`
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">O Concurso</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
  O CNU é a grande inovação de 2024 trazida pelo Ministério de Gestão e Inovação em Serviços Públicos. Composto por 8 Blocos, o CPNU ou CNU, está oferecendo mais de 6mil vagas para nível médio, técnico e superior, com remuneração variando desde 4mil a 20mil reais, além disso, trará grandes mudanças para o serviço público brasileiro.
</span>
<span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Escolaridade</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Ensino superior completo
 - O candidato poderá concorrer a todas as vagas que compõem um Bloco, desde que possua formação para todos eles
</span>
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Matérias</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Políticas públicas;
 - Desafios do Estado de Direito: Democracia e Cidadania; 
 - Ética e Integridade; Diversidade e Inclusão na Sociedade;
 - Administração Pública Federal; Finanças Públicas.
 * Além de 5 Eixos temáticos por Bloco
</span>
 <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Área de Conhecimento</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 Bloco 1 – Infraestrutura, Exatas e Engenharia.
 Bloco 2 – Tecnologia, Dados e Informação
 Bloco 3 – Ambiental, Agrário e Biológicas
 Bloco 4 – Trabalho e Saúde do Servidor
 Bloco 5 – Educação, Saúde, Desenvolvimento Social e Direitos Humanos
 Bloco 6 – Setores Econômicos e Regulação 
 Bloco 7 – Gestão Governamental e Administração Pública
 Bloco 8 – Nível Intermediário
</span>
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Cronograma</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
  Início das aulas: 16/01/2024
  Término das aulas: 04/05/2024
  Aulas: Segunda-feira a Sexta-Feira, das 18:30 às 21:30, e Sábado, das 8:00 às 13:00.
</span>


 `
  bloco_8:string =`
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">O Concurso</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
   O CNU é a grande inovação de 2024 trazida pelo Ministério de Gestão e Inovação em Serviços Públicos. Composto por 8 Blocos, o CPNU ou CNU, está oferecendo mais de 6mil vagas para nível médio, técnico e superior, com remuneração variando desde 4mil a 20mil reais, além disso, trará grandes mudanças para o serviço público brasileiro.
</span>
<span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Escolaridade</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
  - Ensino médio completo
</span>
   <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Matérias</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
  - Língua Portuguesa; 
  - Direito Administrativo; Direito Constitucional; 
  - Matemática; Realidade Brasileira.
  - Redação
</span>
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Área de Conhecimento</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
  Bloco 8 – Nível Intermediário
</span>
   <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Cronograma</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
   Início das aulas: 16/01/2024
   Término das aulas: 04/05/2024
   Aulas: Segunda-feira a Sexta-Feira, das 18:30 às 21:30, e Sábado, das 8:00 às 13:00.
</span>
  `
  info:string =`
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Cadastro de Reserva</span> <span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
  O cadastro de reserva do CNU, ou banco de candidatos em lista de espera, funcionará de forma diferente dos demais concursos públicos.
  
  Ao ser aprovado no cadastro de reserva, o candidato terá a possibilidade de ser convocado para exercer a função como temporário enquanto aguarda ser convocado para ocupar a vaga como efetivo.
  
  Nesse caso, ao se inscrever para diversos cargos o candidato aprovado em um deles entrará no banco de candidatos do órgão ao qual foi 
  aprovado.
</span>
<span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Pacote Oferecidos</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
- Aulas gravadas e disponibilizadas online
- Material didático online
- Aulas e materiais focados no Bloco 8 (Nível Médio)
- Simulados e Aulões
- Mentoria individualizada e Matemática zero
- Planejamento das aulas de acordo com o Edital
- Equipe de professores experientes em concursos públicos
- Estrutura de qualidade
</span>

 `

}
