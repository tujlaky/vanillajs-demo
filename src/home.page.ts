import { BehaviorSubject } from "rxjs";
import { CounterButtonComponent } from "./counter-button.component";
import { InputComponent } from "./input.component";
import { LinkComponent } from "./link.component";

export function HomePage(state$: BehaviorSubject<number>, app: HTMLElement | undefined) {
  const inputComponent = new InputComponent(state$);
  const buttonComponent = new CounterButtonComponent(state$);
  const linkComponent = new LinkComponent(state$);

  buttonComponent.click$.subscribe(() => state$.next(state$.value + 1));
  inputComponent.change$.subscribe((value) => state$.next(value));

  app?.appendChild(buttonComponent.getElement());
  app?.appendChild(inputComponent.getElement());
  app?.appendChild(linkComponent.getElement());
}

