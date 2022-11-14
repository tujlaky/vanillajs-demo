const TitleComponent = (): HTMLElement => {
  const h1 = document.createElement("h1");

  h1.innerText = "Hello world!";

  return h1;
};

export default TitleComponent;
