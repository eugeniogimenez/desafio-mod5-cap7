customElements.define(
  "todo-item",
  class extends HTMLElement {
    shadow: ShadowRoot;
    title: string;
    checked: boolean = false;

    constructor() {
      super();

      this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
      //La etiqueta 'todo-item' va a tener por titulo:
      //lo que haya en su tag title. Ej: title='Soy un title'.
      //Sino, nada
      this.title = this.getAttribute("title") || "";

      ///La etiqueta 'todo-item' va a tener por ckecked:
      //lo que haya en su tag checked. Ej: ckecked='true'.
      //si es que hay checked (hasAttribute)
      //como la propiedad es = a false, me dará false.
      this.checked = this.hasAttribute("checked");
      this.id = this.getAttribute("id");

      const style = document.createElement("style");
      style.textContent = this.textContent;
      style.innerHTML = `
              .root {
                  border-radius: 4px;
                  padding: 22px 13px;
                  background-color: #FFF599;
                  font-size: 18px;
              }
  
              h4.titulo.ckecked {
                text-decoration: line-through;
              }
          `;

      this.shadow.appendChild(style);
      this.render();
    }

    addListeners() {
      const cheqEl = this.shadow.querySelector(".checkbox-input");
      cheqEl.addEventListener("click", (i) => {
        const target = i.target as any;
        const event = new CustomEvent("change", {
          detail: { id: this.id, value: target.checked },
        });
        this.dispatchEvent(event);
      });
    }

    render() {
      //this.title = al titulo que le pongan
      //this.checked? = si tiene un this.ckecked, imprime la palabra checked
      const div = document.createElement("div");
      div.innerHTML = `
      <div class='root'>
          <h4 class='titulo ${this.checked ? "checked" : ""}'>
            ${this.title}
          </h4>
        <div>
            <input class="checkbox-input" type='checkbox' ${
              this.checked ? "checked" : ""
            }>
        </div>
      </div>
      `;

      this.shadow.appendChild(div);
      this.addListeners();
    }
  }
);

1.42;
