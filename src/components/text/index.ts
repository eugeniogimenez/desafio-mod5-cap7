class TextComp extends HTMLElement {
  shadow: ShadowRoot;
  tagName: string;
  tags: string[] = ["h1", "p"];
  tag: string = "p";

  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });

    //Si, mi array de tags tiene con el tag que hay en la clase:
    if (this.tags.includes(this.getAttribute("tag"))) {
      //el tag de mi clase será el que haya en mi clase.
      //y si no, será tag, que es 'p'
      this.tag = this.getAttribute("tag") || this.tag;
      console.log("this.tags: ", this.tags);
    }

    this.render();

    console.log("this.tag: ", this.tag);
  }

  render() {
    //creo un elemento del tipo tag. Puede ser p o h1 digamos.
    const rootEl = document.createElement(this.tag);

    //this.textContent es el texto que va a tener la etiqueta <my-text>
    rootEl.textContent = this.textContent;

    this.shadow.appendChild(rootEl);
  }
}

customElements.define("my-text", TextComp);
