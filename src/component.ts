import { Subject } from "rxjs";

export interface Component {
  el: HTMLElement;
  destroy$: Subject<void>;
}
