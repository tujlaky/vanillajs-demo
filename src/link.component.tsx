import { BaseProps } from "tsx-dom";

interface LinkComponentProps extends BaseProps {
  href: string;
}

const LinkComponent = ({ href, children }: LinkComponentProps): HTMLElement => {
  return <a class="link link-secondary" data-router href={href}>{children}</a>;
};

export default LinkComponent;
