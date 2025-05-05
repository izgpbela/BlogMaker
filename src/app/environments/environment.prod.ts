// src/environments/environment.prod.ts
export const environment = {
    production: true,
    apiUrl: 'https://api.seublog.com/v1', // URL da API em produção
    appName: 'Blog Maker',
    auth: {
      clientId: 'seu-client-id-prod',
      domain: 'seu-dominio.auth0.com'
    },
    features: {
      analytics: true,
      comments: true
    },
    firebase: {
      apiKey: 'sua-chave-prod',
      authDomain: 'seu-projeto-prod.firebaseapp.com',
      projectId: 'seu-projeto-prod'
    },
    debug: false // Desabilita logs em produção
  };