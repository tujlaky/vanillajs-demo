import { fromEvent, Observable, Subject, takeUntil } from "rxjs";

const InputComponent = ({
  state$,
  onChange,
  destroy$ = new Subject<void>(),
}: {
  state$: Observable<number>;
  onChange?: (number: number) => void;
  destroy$?: Subject<void>;
}): HTMLElement => {
  const el = document.createElement("input");
  el.className = 'input input-bordered w-full max-w-xs';
  const input$ = fromEvent(el, "input");

  input$.pipe(takeUntil(destroy$)).subscribe(() => {
    const number = parseInt(el.value, 10);

    if (!isNaN(number) && onChange) {
      onChange(number);
    }
  });

  state$
    .pipe(takeUntil(destroy$))
    .subscribe((value) => (el.value = value.toString()));

  return el;
};

export default InputComponent;
