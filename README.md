# Loja de Computadores 🖥️

Este projeto foi desenvolvido utilizando o framework **Angular** e tem como objetivo criar uma plataforma para exibição e compra de computadores e acessórios.

## 📌 Tecnologias Utilizadas
- **Angular 19.1.7** - Framework principal para o desenvolvimento do front-end
- **Angular Material** - Para componentes visuais modernos e responsivos
- **RxJS** - Para manipulação de eventos assíncronos e reatividade
- **NGX-Mask** - Para mascaramento de campos de formulário
- **TypeScript** - Linguagem base do Angular
- **HTML5 & CSS3** - Para estruturação e estilização da interface

## 📂 Estrutura do Projeto
A estrutura de diretórios do projeto segue a organização padrão do Angular, com alguns módulos separados para melhor modularização:

```
loja-computadores/
│-- src/
│   ├── app/
│   │   ├── barra-pesquisa/      # Componente de busca de produtos
│   │   ├── carrinho/            # Módulo do carrinho de compras
│   │   ├── contato/             # Página de contato
│   │   ├── footer/              # Rodapé da aplicação
│   │   ├── header/              # Cabeçalho da aplicação
│   │   ├── nao-encontrado/      # Página de erro 404
│   │   ├── produtos/            # Listagem e exibição de produtos
│   │   ├── app.component.ts     # Componente principal da aplicação
│   │   ├── app.routes.ts        # Configuração das rotas
│   │   ├── app.config.ts        # Configurações globais
│   │   ├── services/
│   │   │   ├── carrinho.service.ts          # Serviço para gerenciar o carrinho
│   │   │   ├── notificacao.service.ts       # Serviço para notificações ao usuário
│   │   │   ├── produtos-service.service.ts  # Serviço para manipulação dos produtos
```

## 🚀 Funcionalidades Principais
- **Listagem de Produtos**: Exibição de produtos disponíveis para compra.
- **Carrinho de Compras**: Adicionar, remover e visualizar itens no carrinho.
- **Pesquisa de Produtos**: Filtro dinâmico para encontrar produtos rapidamente.
- **Notificações**: Feedback visual ao usuário sobre ações realizadas.
- **Sistema de Rotas**: Navegação entre páginas utilizando o roteamento do Angular.

## 📌 Como Executar o Projeto
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Rutiele93/loja-computadores.git
   cd loja-computadores
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Execute o servidor de desenvolvimento:**
   ```bash
   ng serve
   ```
4. **Acesse no navegador:**
   ```
   http://localhost:4200/
   ```

## 🛠️ Comandos Úteis
- **Construir o projeto:**
  ```bash
  ng build
  ```
- **Executar testes unitários:**
  ```bash
  ng test
  ```

## 📌 Considerações Finais
Este projeto foi desenvolvido com foco em boas práticas e modularização no Angular. Caso tenha sugestões ou queira contribuir, fique à vontade para abrir uma issue ou pull request no [repositório](https://github.com/Rutiele93/loja-computadores).

---
🚀 Desenvolvido com 💙 por [Rutiele93](https://github.com/Rutiele93) 💻

