import { Observable } from "rxjs";

export abstract class Component {
  protected mainElement: HTMLElement;

  constructor(state$: Observable<any>) {
    this.mainElement = this.createElement(state$);
  }

  public getElement() {
    return this.mainElement;
  }

  protected abstract createElement(state$: Observable<any>): HTMLElement;
}
