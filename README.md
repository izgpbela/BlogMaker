# 📝 Blog Pessoal - Frontend Angular

Aplicação web desenvolvida com Angular para gerenciamento de um blog pessoal com dashboard analítico. Este projeto faz parte de um trabalho acadêmico que integra conceitos de **UX Design**, **Desenvolvimento Frontend** e **Análise de Dados**.

---

## 🎯 Objetivo

O objetivo da aplicação é permitir o gerenciamento completo de postagens (**CRUD**), além de oferecer um **dashboard analítico** com gráficos e dados relevantes, como o número total de postagens e a distribuição por autor.

---

## ✨ Funcionalidades

- **✅ CRUD completo de postagens** (criar, visualizar, editar e excluir).
  - Cada post contém: **título**, **tema**, **conteúdo**, **autor** e **data**.
- **📊 Dashboard com:**
  - Número total de postagens.
  - Gráfico de postagens por autor.
  - Lista das últimas postagens cadastradas.
- **🔍 Filtros de postagens por autor e/ou data.**
- **📡 Integração com API REST.**
- **🎨 Interface responsiva** utilizando Angular Material.
- **🌐 Boas práticas de UX Design** e organização de código.

---

## 🛠️ Tecnologias e Ferramentas

| Tecnologia          | Finalidade                       |
|---------------------|----------------------------------|
| Angular 16+         | Framework principal             |
| Angular Material    | Design responsivo               |
| Chart.js            | Gráficos no dashboard           |
| SCSS                | Estilização                     |
| Spring Boot REST API| Integração com Backend          |
| TypeScript          | Linguagem base                  |
| Tailwind CSS        | Estilização alternativa         |
| Google Fonts        | Tipografia                      |
| Font Awesome        | Ícones                          |
| RxJS                | Programação reativa             |
| Angular HttpClient  | Comunicação com API             |

---

## 🚀 Deploy

- **🔗 Frontend (Angular)**: [https://blogmake.netlify.app/]((https://blogmake.netlify.app/home))
- **🔗 Backend (Spring Boot)**: [https://blogpersoal.netlify.app/]((https://blogpersoal.netlify.app/))

---

## 🎓 Desenvolvido no Programa Acelera Maker

Este projeto foi desenvolvido como parte do programa **Acelera Maker** da **Montreal**, visando capacitar alunos para o mercado de tecnologia por meio de desafios reais e práticas modernas.

---

## ✍️ Contribuições e Aprendizados

- Experiência prática com **Angular 16** e **Angular Material**.
- Desenvolvimento orientado ao usuário com foco em **usabilidade**.
- Resolução de problemas de integração entre frontend, backend e gráficos.

---

## 🚧 Desafios e Soluções

| Problema                           | Solução                                   |
|------------------------------------|------------------------------------------|
| Erros de módulos não reconhecidos  | Verificação e correção de imports         |
| Falhas no build                    | Revisão da configuração de módulos        |
| Dependências conflitantes          | Uso de `npm install --legacy-peer-deps`   |
| Testes sem backend real            | Implementação de mocks com `json-server` |

---

## ⚙️ Como Executar

### Pré-requisitos

- **Node.js** (v16+)
- **npm** (v8+)

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

Acesse: [http://localhost:4200](http://localhost:4200)

### 🏗️ Build para Produção

```bash
npx ng build --prod
```

---

## 🧪 Testes Realizados

- Validação completa das operações **CRUD**.
- Testes de busca com diferentes parâmetros.
- Verificação das estatísticas do painel.
- Testes de responsividade em múltiplos dispositivos.
- Validação da sincronização entre **UI** e **Backend**.

---

## 📚 Aprendizados

- Configuração avançada de projetos Angular.
- Resolução de problemas comuns no Angular.
- Implementação de mocks para testes.
- Gerenciamento eficiente de dependências.
- Padrões de comunicação entre componentes.

---

## 📜 Licença

Este projeto está licenciado sob a **MIT License**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

