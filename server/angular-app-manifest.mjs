
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/boyz-ui/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/boyz-ui"
  }
],
  assets: {
    'index.csr.html': {size: 498, hash: '9939dfad42800e229b7b1a9903e416ff232fdff31f66c652947576afc06e7ded', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1011, hash: '1ac0457a689876b4ba4b3efceb53abd64e68c819cdb8ca9a464358f9cdf807e6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20837, hash: '53119195ddfa7395e34f874336ab70e6d9477b7f5a23782ae03966ebdd5c6147', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
