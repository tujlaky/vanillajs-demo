import { BehaviorSubject, map, of } from "rxjs";
import { CounterButtonComponent } from "../counter-button.component";
import { div } from "../div";
import { InputComponent } from "../input.component";
import { LinkComponent } from "../link.component";
import { State } from "../state";

import "./home.css";

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

  const pageContainer = div({ class: "home-page" }, [
    div({ class: "line" }, [linkComponent.getElement()]),
    div({ class: "line" }, [buttonComponent.getElement()]),
    div({ class: "line" }, [inputComponent.getElement()]),
  ]);

  app?.appendChild(pageContainer);
}
