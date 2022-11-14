import "./style.css";

import { BehaviorSubject } from "rxjs";
import Router from "./router";
import { State } from "./state";

const router = new Router("");

const app = document.getElementById("app");
const state$ = new BehaviorSubject<State>({
  counter: 0,
});

router.configure(
  [
    {
      path: "/",
      load: () => import("./home/home.page").then((m) => m.HomePage),
    },
    {
      path: "/demo",
      load: () => import("./demo/demo.page").then((m) => m.DemoPage),
    },
  ],
  state$,
  app
);

router.init();
