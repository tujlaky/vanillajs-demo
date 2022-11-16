import { BehaviorSubject } from "rxjs";
import FooterComponent from "../footer.component";
import LinkComponent from "../link.component";
import NavbarComponent from "../navbar.component";
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
    <div class="demo-page page">
      <div><NavbarComponent></NavbarComponent></div>
      <div class="w-1/2 flex flex-col justify-center items-center">
        <div class="flex w-full mb-3 flex-col justify-center items-center">
          <TitleComponent>Test</TitleComponent>
        </div>


        <form class="flex justify-center items-start flex-col" onSubmit={onSubmit}>
          <div>
            <input placeholder="Change the counter" class="input mb-3 input-bordered w-full max-w-xs" name="demo" type="text" />
          </div>
          <div class="mb-3 self-end">
            <button class="btn btn-primary" type="submit">Submit</button>
          </div>
        </form>

        <div class="line">
          <LinkComponent href="/">Go back</LinkComponent>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}
