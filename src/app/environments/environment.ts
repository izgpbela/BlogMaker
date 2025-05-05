// src/environments/environment.ts
export const environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api', // URL da sua API local
    appName: 'Blog Maker (Dev)',
    auth: {
      clientId: 'seu-client-id-dev', // Para autenticação (se usar OAuth)
      domain: 'seu-dominio.auth0.com' // Exemplo para Auth0
    },
    features: {
      analytics: true, // Habilita/desabilita funcionalidades
      comments: true
    },
    firebase: { // Config se usar Firebase
      apiKey: 'sua-chave-dev',
      authDomain: 'seu-projeto.firebaseapp.com',
      projectId: 'seu-projeto-dev'
    },
    debug: true // Habilita logs de debug
  };