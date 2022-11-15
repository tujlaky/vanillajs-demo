import { BehaviorSubject } from "rxjs";
import { State } from "../state";
import TitleComponent from "../title.component";

import "./demo.css";

export function DemoPage(
  state$: BehaviorSubject<State>,
) {
  state$.next({
    ...state$.value,
    counter: 99,
  });

  return (
    <TitleComponent></TitleComponent>
  );
}
