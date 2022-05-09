const state = {
  data: {
    //tareas
    tasks: [
      {
        id: 1,
        title: "primer item",
        completed: "false",
      },
      {
        id: 2,
        title: "segundo item",
        completed: "true",
      },
      {
        id: 3,
        title: "tercer item",
        deleted: "true",
      },
    ],
  },

  listeners: [],

  init() {
    const localData = localStorage.getItem("saved-state");
    this.setState(JSON.parse(localData));
  },

  getState() {
    return this.data;
  },

  getEnabledTasks() {
    const currentState = this.getState();
    //Si no tiene "deleted", me lo va a retornar.
    //Es decir, me va a mostrar todos, MENOS los que no tengan "DELETED"
    return currentState.tasks.filter((i) => !i.deleted);
  },

  addTask(id, title) {
    const currentState = this.getState();
    currentState.tasks.push({ id: id, title, completed: false });
    this.setState(currentState);
  },

  changeItemsState(id, value) {
    const currentState = this.getState();
    const found = currentState.tasks.find((i) => i.id == id);
    found.completed = value;
    this.setState(currentState);
    console.log(id, value);
  },

  setState(newState) {
    this.data = newState;

    for (const i of this.listeners) {
      i(newState);
      console.log("son la function en listeners: ", i);
    }

    localStorage.setItem("saved-stated", JSON.stringify(newState));
    console.log("Soy el setState y cambié: ", this.data);
  },

  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
};

export { state };
1;
