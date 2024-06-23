import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'dockerExample',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44311/',
    redirectUri: baseUrl,
    clientId: 'dockerExample_App',
    responseType: 'code',
    scope: 'offline_access dockerExample',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44311',
      rootNamespace: 'dockerExample',
    },
  },
} as Environment;
