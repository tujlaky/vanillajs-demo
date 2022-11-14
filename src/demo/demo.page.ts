import { BehaviorSubject } from "rxjs";
import { div } from "../div";
import { State } from "../state";
import { TitleComponent } from "../title.component";

import "./demo.css";

export function DemoPage(
  state$: BehaviorSubject<State>,
  app: HTMLElement | null
) {
  const titleComponent = new TitleComponent(state$);
  app?.appendChild(div({ class: "demo-page" }, [titleComponent.getElement()]));
}
