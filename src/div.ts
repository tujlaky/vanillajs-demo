export interface ElementConfig {
  class?: string;
  id?: string;
}

export function element(
  tag: keyof HTMLElementTagNameMap,
  config: ElementConfig,
  children?: HTMLElement[]
): HTMLElement {
  const el = document.createElement(tag);

  if (config.class) {
    el.setAttribute("class", config.class);
  }

  if (config.id) {
    el.setAttribute("id", config.id);
  }

  if (children) {
    for (let i = 0; i < children.length; i++) {
      el.appendChild(children[i]);
    }
  }

  return el;
}

export function div(config: ElementConfig, children?: HTMLElement[]) {
  return element("div", config, children);
}

export function footer(config: ElementConfig, children?: HTMLElement[]) {
  return element("footer", config, children);
}
