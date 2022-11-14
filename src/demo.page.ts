import { BehaviorSubject } from "rxjs";
import { State } from "./state";
import { TitleComponent } from "./title.component";

export function DemoPage(
  state$: BehaviorSubject<State>,
  app: HTMLElement | null
) {
  const titleComponent = new TitleComponent(state$);
  app?.appendChild(titleComponent.getElement());
}
