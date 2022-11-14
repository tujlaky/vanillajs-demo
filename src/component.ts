import { BehaviorSubject } from "rxjs";

export abstract class Component {
  protected mainElement: HTMLElement;

  constructor(state$: BehaviorSubject<number>) {
    this.mainElement = this.createElement(state$);
  }

  public getElement() {
    return this.mainElement;
  }

  protected abstract createElement(
    state$: BehaviorSubject<number>
  ): HTMLElement;
}
