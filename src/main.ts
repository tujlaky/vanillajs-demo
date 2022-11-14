import './style.css'

import { BehaviorSubject } from "rxjs";
import Router from './router';

const router = new Router('');

const app = document.getElementById("app");
const state$ = new BehaviorSubject(0);

router.on('/', async () => {
  if (app) {
    app.innerHTML = '';
    const { HomePage } = await import('./home.page');

    HomePage(state$, app);
    router.redefineLinks();
  }
});

router.on('/demo', async () => {
  if (app) {
    app.innerHTML = '';

    const { DemoPage } = await import('./demo.page');
    DemoPage(state$, app);
  }
});

router.init();
