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
