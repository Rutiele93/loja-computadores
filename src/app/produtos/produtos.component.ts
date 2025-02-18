import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IProduto } from '../produtos';
import { ProdutosServiceService } from '../produtos-service.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';


@Component({
  selector: 'app-produtos',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent implements OnInit {

  produtos: IProduto[] | undefined;

  constructor(
    private ProdutosServiceService: ProdutosServiceService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    const produtos = this.ProdutosServiceService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();

      if (descricao) {
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
        return;
      }
      this.produtos = produtos;
    })

  }
}
