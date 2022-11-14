import { fromEvent, Observable } from "rxjs";
import { Component } from "./component";

export class CounterButtonComponent extends Component {
  public click$ = fromEvent(this.mainElement, "click");
  protected createElement(state$: Observable<number>) {
    const button = document.createElement("button");

    state$.subscribe((value) => (button.innerText = `Start ${value}`));

    return button;
  }
}
