import { BehaviorSubject, map, Subject } from "rxjs";
import CounterButtonComponent from "../counter-button.component";
import FooterComponent from "../footer.component";
import InputComponent from "../input.component";
import LinkComponent from "../link.component";
import NavbarComponent from "../navbar.component";
import { State } from "../state";

import "./home.css";

export function HomePage(
  state$: BehaviorSubject<State>,
  destroy$ = new Subject<void>()
) {
  const counter$ = state$.asObservable().pipe(map((state) => state.counter));

  const onChange = (value: number): void => {
    state$.next({
      ...state$.value, // state
      counter: value,
    });
  };

  const onClick = () => {
    state$.next({
      ...state$.value,
      counter: state$.value.counter + 1,
    });
  };

  return (
    <div class="home-page page">
      <div>
        <NavbarComponent></NavbarComponent>
      </div>
      <div>
        <div class="line">
          <InputComponent state$={counter$} onChange={onChange} destroy$={destroy$}></InputComponent>
        </div>
        <div class="line">
          <CounterButtonComponent state$={counter$} onClick={onClick} destroy$={destroy$}></CounterButtonComponent>
        </div>
        <div class="line">
          <LinkComponent href="/demo">DEMO PAGE</LinkComponent>
        </div>
      </div>

      <FooterComponent></FooterComponent>
    </div>
  );
}
