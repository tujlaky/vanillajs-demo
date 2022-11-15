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

  function onSubmit(e: SubmitEvent) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const elements = Array.from(form.elements) as HTMLInputElement[]
    const data = elements
      .filter((element) => element.hasAttribute('name'))
      .reduce(
        (object, element) => ({
          ...object,
          [`${element.getAttribute('name')}`]: element.value,
        }),
        {} as { demo: string}
      );

    const number = parseInt(data.demo, 10);
    
    

    console.log(data);

    if (!isNaN(number)) {
      console.log(number);
      state$.next({
        ...state$.value,
        counter: number,
      });
    }
  };

  return (
    <div>
      <TitleComponent>Test</TitleComponent>

      <form onSubmit={onSubmit}>
        <input name="demo" type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
