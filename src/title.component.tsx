import { BaseProps } from "tsx-dom";

const TitleComponent = ({ children }: BaseProps): HTMLElement => {
  return <h1 class="text-3xl font-bold">{children}</h1>;
};

export default TitleComponent;
