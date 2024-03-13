import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrativas',
  templateUrl: './administrativas.component.html',
  styleUrls: ['./administrativas.component.css']
})
export class AdministrativasComponent implements OnInit {
  titleParallax_1: string = '';
  titleParallax_2: string = '';
  titleParallax_3: string = '';
  titleParallax_4: string = '';
  
  subtitleParallax_1: string = 'INSS';
  subtitleParallax_2: string = 'Caixa Econômica Federal';
  subtitleParallax_3: string = 'Correios';
  subtitleParallax_4: string = 'Casa da Moeda';

  textParallax_1: SafeHtml;
  textParallax_2: SafeHtml;
  textParallax_3: SafeHtml;
  textParallax_4: SafeHtml;

  linkUrl: string = '/cursos';

  constructor(private router: Router, private sanitizer: DomSanitizer) {
    this.textParallax_1 = this.sanitizer.bypassSecurityTrustHtml(this.inss);
    this.textParallax_2 = this.sanitizer.bypassSecurityTrustHtml(this.caixa_economica);
    this.textParallax_3 = this.sanitizer.bypassSecurityTrustHtml(this.correios);
    this.textParallax_4 = this.sanitizer.bypassSecurityTrustHtml(this.casa_moeda);
  }

  navigateTo(url: string) {
    this.router.navigate([url]);
  }

  ngOnInit(): void {
    this.textParallax_1;
    this.textParallax_2;
    this.textParallax_3;
    this.textParallax_4;
  }

  inss: string = `
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">O Concurso</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
  Um dos concursos mais aguardados do ano de 2024 está previsto para 
  sair ainda neste ano, já havendo a solicitação para aprovação de pelo menos 9mil vagas.
</span>
<span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Escolaridade</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Ensino médio completo
 - Ensino superior completo
</span>
  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Matérias</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Português, Ética no serviço público, Informática, Raciocínio lógico.
 - Direitos: Constitucional, Administrativo, Previdenciário.
 * Matérias baseadas no último edital publicado pelo orgão.

  <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Cronograma</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 - Início das aulas: 23/01/2024
 - Término das aulas: 04/05/2024
 - Aulas: Segunda-feira a Quinta-Feira, das 18:30 às 21:30, e Sábado, das 8:00 às 13:00.
</span>
 `
 caixa_economica:string =`
 <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">O Concurso</span> <span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 Previsto para sair ainda neste ano, 2024, disponibilizará até 4 mil vagas 
</span>
 <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Escolaridade</span> <span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
- Ensino médio completo 
- Ensino médio completo + técnico 
</span>
<span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Matérias</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
- Português, Redação, Ética, Matemática financeira, Raciocínio lógico, Atualidade.
- Legislação específica da CEF, Conhecimentos bancários, Atendimeto.
* Matérias baseadas no último edital publicado pelo orgão.

<span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Cronograma</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
- Início das aulas: 23/01/2024
- Término das aulas: 04/05/2024
- Aulas: Terça-feira a Sexta-Feira, das 18:30 às 21:30.
</span>

`
 correios:string =`
 <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">O Concurso</span> <span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 Aguardado desde o ano passado, o concurso dos Correios, trás 
 grande expectativa de sair ainda neste ano, 2024, por conta de uma nota oficial divulgada pela empresa pública expressando o interesse de realizar o processo seletivo a “curto e médio prazo”.Com aproximadamente 7,6mil cargos vagos.
</span>
 <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Escolaridade</span> <span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
- A definir
</span>
<span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Matérias</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
- Português, Noções de Informática, Raciocínio Lógico-Matemático. 
- Legislação Aplicada aos Correios; Conhecimentos Específicos.
* Matérias baseadas no último edital publicado pelo orgão.

<span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Cronograma</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
- Início das aulas: 23/01/2024
- Término das aulas: 04/05/2024
- Aulas: Segunda-feira a Quinta-Feira, das 18:30 às 21:30, e Sábado, das 8:00 às 13:00.
</span>

`
 casa_moeda:string =`
 <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">O Concurso</span> <span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
 Casa da Moeda trará oportunidade para 68 vagas, dentre as quais 54 são para provimento imediato e 14 destinadas à formação de cadastro de reserva
</span>
 <span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Escolaridade</span> <span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
- Ensino médio completo + Técnico de Segurança
- Ensino superior completo Analista de Produção
</span>
<span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Matérias</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
- Português.
- Matemática
* Matérias baseadas no último edital publicado pelo orgão.

<span style="color:  var(--azul);font-weight: bold; font-family: 'Montserrat', sans-serif;font-size: 1.4rem">Cronograma</span><span style="color:  var(--azul);font-weight: 400;font-family: 'Montserrat', sans-serif ;font-size: 1.1rem">
- Início das aulas: 23/01/2024
- Término das aulas: 16/03/2024
- Aulas: Terça-feira a Sexta-Feira, das 18:30 às 21:30.
</span>

`
}
