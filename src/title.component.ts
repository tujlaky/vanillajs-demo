const TitleComponent = (): HTMLElement => {
  const h1 = document.createElement("h1");

  h1.innerText = "Hello world!";
  h1.className = "text-3xl font-bold underline";

  return h1;
};

export default TitleComponent;
