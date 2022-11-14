import { Observable, Subject, takeUntil, tap } from "rxjs";

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
    button.addEventListener("click", () => onClick());
  }

  state$
    .pipe(
      tap((value) => console.log(value)),
      takeUntil(destroy$)
    )
    .subscribe((value) => (button.innerText = `Start ${value}`));

  return button;
};

export default CounterButtonComponent;
