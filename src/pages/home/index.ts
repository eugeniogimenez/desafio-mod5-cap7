import { state } from "../../state";

export function initHomepage(containerEl: Element) {
  const div = document.createElement("div");

  //obtengo todo lo guardado en el state
  const tasks = state.getEnabledTasks();

  div.innerHTML = `
      <h1>Mis pendientes 2</h1>
      <button class='button'>Agregar</button>
      <ul class='lista'>
        
      </ul>
    
    `;

  const listaEl = div.querySelector(".lista");

  function createTasks(tasks) {
    // const listaItemsHtml = tasks.map(
    //   //Es i.completed?. Si es está, devuelve checked, y sino nada.
    //   (i) =>
    //     "<todo-item title='${i.title}' ${i.completed ? 'checked' : ''}></todo-item>"
    // );

    listaEl.innerHTML = ""; //Le digo que primero borre todo
    for (const i of tasks) {
      console.log("i.title: ", i.title);

      const todoItemEl = document.createElement("todo-item");
      todoItemEl.setAttribute("title: ", i.title);
      todoItemEl.setAttribute("id: ", i.id);
      if (i.completed) {
        todoItemEl.setAttribute("checked", "true");
      }
      todoItemEl.addEventListener("change", (e: any) => {
        state.changeItemsState(e.detail.id, e.detail.value);
      });
      listaEl.appendChild(todoItemEl);
    }
  }

  state.subscribe(() => {
    createTasks(state.getEnabledTasks());
  });

  1.14;

  console.log("tasks: ", tasks);

  createTasks(tasks);

  div.querySelector(".button").addEventListener("click", () => {
    state.addTask(Math.random(), "Desde el boton: ");
  });

  containerEl.appendChild(div);
}
