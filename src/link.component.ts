import { Component } from "./component";

export class LinkComponent extends Component {
  protected createElement() {
    const link = document.createElement("a");

    link.href = '/demo';
    link.setAttribute('data-router', '');
    link.innerText = 'Go to hello';

    return link;
  }
}