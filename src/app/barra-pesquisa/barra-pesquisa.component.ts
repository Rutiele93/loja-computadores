import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-pesquisa',
  imports: [FormsModule],
  templateUrl: './barra-pesquisa.component.html',
  styleUrl: './barra-pesquisa.component.css'
})
export class BarraPesquisaComponent {

  constructor(private router: Router) { }

  descricao = "";

  pesquisar() {
    if (this.descricao) {
      this.router.navigate(["produtos"], { queryParams: { descricao: this.descricao } });
      return;
    }
    this.router.navigate(["produtos"]);
  }
}
