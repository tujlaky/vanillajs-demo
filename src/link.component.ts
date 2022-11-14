const LinkComponent = (): HTMLElement => {
  const link = document.createElement("a");

  link.href = "/demo";
  link.setAttribute("data-router", "");
  link.innerText = "Go to hello";

  return link;
};

export default LinkComponent;
