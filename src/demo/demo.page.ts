import { BehaviorSubject } from "rxjs";
import { div } from "../div";
import { State } from "../state";
import TitleComponent from "../title.component";

import "./demo.css";

export function DemoPage(
  state$: BehaviorSubject<State>,
  app: HTMLElement | null
) {
  const titleComponent = TitleComponent();

  state$.next({
    ...state$.value,
    counter: 99,
  });

  app?.appendChild(div({ class: "demo-page" }, [titleComponent]));
}
