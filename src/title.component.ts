import { Component } from "./component";

export class TitleComponent extends Component {
  protected createElement() {
    const h1 = document.createElement("h1");

    h1.innerText = 'Hello world!';

    return h1;
  }
}