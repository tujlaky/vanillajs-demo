import { BehaviorSubject, map, of } from "rxjs";
import { CounterButtonComponent } from "./counter-button.component";
import { InputComponent } from "./input.component";
import { LinkComponent } from "./link.component";
import { State } from "./state";

export function HomePage(
  state$: BehaviorSubject<State>,
  app: HTMLElement | null
) {
  const inputComponent = new InputComponent(
    state$.asObservable().pipe(map((state) => state.counter))
  );
  const buttonComponent = new CounterButtonComponent(
    state$.asObservable().pipe(map((state) => state.counter))
  );
  const linkComponent = new LinkComponent(of(undefined));

  buttonComponent.click$.subscribe(() =>
    state$.next({
      ...state$.value,
      counter: state$.value.counter + 1,
    })
  );

  inputComponent.change$.subscribe((value) =>
    state$.next({
      ...state$.value,
      counter: value,
    })
  );

  app?.appendChild(buttonComponent.getElement());
  app?.appendChild(inputComponent.getElement());
  app?.appendChild(linkComponent.getElement());
}
