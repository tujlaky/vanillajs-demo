import { Subject, fromEvent, Observable } from "rxjs";
import { Component } from "./component";

export class InputComponent extends Component {
  public change$ = new Subject<number>();

  protected createElement(state$: Observable<number>) {
    const input = document.createElement("input");
    const input$ = fromEvent(input, "input");

    input$.subscribe(() => {
      const number = parseInt(input.value, 10);

      if (!isNaN(number)) {
        this.change$.next(number);
      }
    });

    state$.subscribe((value) => (input.value = value.toString()));

    return input;
  }
}
