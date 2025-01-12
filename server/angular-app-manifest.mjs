
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/biryaniboyzstl/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/biryaniboyzstl"
  }
],
  assets: {
    'index.csr.html': {size: 505, hash: '54530277d48907e7b24cb51b9e7f28d1d959deef6902cd4e41f881d41cca620f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: '7c5d603e15fd4c8b57c857b86d936d5e8364a027a7a473a9e8915aa5b951bae2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20844, hash: '3a70173e16077652517b33a85588c619b802b41b75e41eb2ddf06c4607af4bd0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
