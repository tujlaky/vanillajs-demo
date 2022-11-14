import { fromEvent, Observable, Subject, takeUntil, tap } from "rxjs";

const CounterButtonComponent = ({
  state$,
  onClick,
  destroy$ = new Subject<void>(),
}: {
  state$: Observable<number>;
  onClick?: () => void;
  destroy$?: Subject<void>;
}): HTMLElement => {
  const button = document.createElement("button");

  if (onClick) {
    const click$ = fromEvent(button, "click");
    click$.pipe(takeUntil(destroy$)).subscribe(onClick);
  }

  state$
    .pipe(takeUntil(destroy$))
    .subscribe((value) => (button.innerText = `Start ${value}`));

  return button;
};

export default CounterButtonComponent;
