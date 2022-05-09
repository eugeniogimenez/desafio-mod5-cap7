import { state } from "./state";

import "./components/text";
import "./components/todo-item";

import { initHomepage } from "./pages/home";

(function () {
  state.init();

  const root = document.querySelector(".root");
  initHomepage(root);
})();
