import { Routes } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ContatoComponent } from './contato/contato.component';

export const routes: Routes = [
    {
        path: 'produtos',
        children: [
            { path: '', component: ProdutosComponent }, // Página de listagem
            {
                path: ':id',
                loadComponent: () => import('./produtos/produto/produto.component')
                    .then(m => m.ProdutoComponent)
            }
        ]
    },
    { path: 'carrinho', component: CarrinhoComponent },
    { path: 'contato', component: ContatoComponent },
    { path: '', redirectTo: 'produtos', pathMatch: 'full' },
    { path: '**', component: NaoEncontradoComponent }
];
