import { Injectable, OnInit } from '@angular/core';
import { IProduto, produtos } from './produtos';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProdutosServiceService {

  produtos: IProduto[] = produtos;

  constructor() { }

  getAll() {
    return this.produtos;
  }

  getOne(produtoId: number) {
    return this.produtos.find(produto => produto.id === produtoId); // Comparação correta
  }


}
