import { BehaviorSubject, map, of, Subject } from "rxjs";
import CounterButtonComponent from "../counter-button.component";
import { div } from "../div";
import FooterComponent from "../footer.component";
import InputComponent from "../input.component";
import LinkComponent from "../link.component";
import { State } from "../state";

import "./home.css";

export function HomePage(
  state$: BehaviorSubject<State>,
  app: HTMLElement | null,
  destroy$ = new Subject<void>()
) {
  const inputComponent = InputComponent({
    state$: state$.asObservable().pipe(map((state) => state.counter)),
    onChange: (value) => {
      state$.next({
        ...state$.value,
        counter: value,
      });
    },
    destroy$,
  });

  const buttonComponent = CounterButtonComponent({
    state$: state$.asObservable().pipe(map((state) => state.counter)),
    onClick: () => {
      state$.next({
        ...state$.value,
        counter: state$.value.counter + 1,
      });
    },
    destroy$,
  });

  const linkComponent = LinkComponent();

  const footer = FooterComponent();

  const pageContainer = div({ class: "home-page" }, [
    div({ class: "line" }, [linkComponent]),
    div({ class: "line" }, [buttonComponent]),
    div({ class: "line" }, [inputComponent]),
  ]);

  app?.appendChild(pageContainer);
  app?.appendChild(footer);
}
