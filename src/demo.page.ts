import { BehaviorSubject } from "rxjs";
import { TitleComponent } from "./title.component";

export function DemoPage(state$: BehaviorSubject<number>, app: HTMLElement | undefined) {
  const titleComponent = new TitleComponent(state$);
  app?.appendChild(titleComponent.getElement());
}

