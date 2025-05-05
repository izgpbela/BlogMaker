<<<<<<< HEAD
# BlogPessoal

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
=======
# Projeto de Blog Pessoal em Angular  

## 📝 Visão Geral  
Aplicativo de blog pessoal desenvolvido com Angular que permite CRUD completo de posts. Apresenta layout moderno e responsivo inspirado no Medium, demonstrando:  
- Componentes Angular  
- Serviços  
- Roteamento  
- Integração HTTP com API  

## ✨ Funcionalidades  
✅ Listagem de posts com:  
- Título  
- Prévia do conteúdo  
- Autor  
- Data de publicação  

🔍 Sistema de busca por:  
- Autor  
- Data  

🛠️ Operações CRUD:  
- Adicionar novos posts  
- Editar posts existentes  
- Excluir posts  

📊 Painel administrativo com:  
- Estatísticas de posts  
- Total por autor  

📱 Design responsivo com:  
- Layout de duas colunas  
- Sidebar  

## 🛠️ Tecnologias Utilizadas  
| Tecnologia | Finalidade |
|------------|------------|
| Angular 19 | Framework principal |
| TypeScript | Linguagem base |
| Tailwind CSS | Estilização |
| Google Fonts | Tipografia |
| Font Awesome | Ícones |
| RxJS | Programação reativa |
| Angular HttpClient | Comunicação com API |

## 🚧 Desafios e Soluções  
| Problema | Solução |
|----------|---------|
| Erros de módulos não reconhecidos | Verificação e correção de imports |
| Falhas no build | Revisão da configuração de módulos |
| Dependências conflitantes | Uso de `npm install --legacy-peer-deps` |
| Testes sem backend real | Implementação de mock com `json-server` |

## ⚙️ Como Executar  

### Pré-requisitos  
- Node.js (v16+)  
- npm (v8+)  

### 🛠️ Instalação  
```bash
git clone https://github.com/seu-usuario/personal-blog.git
cd personal-blog
npm install
```

### 🚀 Execução  
```bash
npx ng serve --host 0.0.0.0 --port 4200
```
Acesse: `http://localhost:4200`

### 🏗️ Build para Produção  
```bash
npx ng build --prod
```

## 🧪 Testes Realizados  
- Validação completa das operações CRUD  
- Testes de busca com diferentes parâmetros  
- Verificação das estatísticas do painel  
- Testes de responsividade em múltiplos dispositivos  
- Validação da sincronização UI-backend  

## 📂 Estrutura do Projeto  
```
src/
├── app/
│   ├── components/
│   │   ├── post/       # Componentes de posts
│   │   └── dashboard/  # Painel administrativo
│   ├── services/       # Lógica de negócio
│   ├── models/         # Interfaces e tipos
│   └── shared/         # Componentes compartilhados
├── assets/             # Recursos estáticos
└── environments/       # Configurações de ambiente
```

## 📚 Aprendizados  
✔️ Configuração avançada de projetos Angular  
✔️ Resolução de problemas comuns no Angular  
✔️ Implementação de mocks para testes  
✔️ Gerenciamento eficiente de dependências  
✔️ Padrões de comunicação entre componentes  

## 📜 Licença  
MIT License - Veja [LICENSE](LICENSE) para detalhes.  
>>>>>>> 53478f649f281b03e87fcf4290bcb8a8eeef2331
