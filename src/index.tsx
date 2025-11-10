/* @refresh reload */
import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

import { Router, Route } from "@solidjs/router";
import { render } from "solid-js/web";

import DocumentationView from "./views/documentation";
import MainView from "./views/main";

render(
  () => (
    <Router>
      <Route path="/" component={MainView} />
      <Route path="/documentation" component={DocumentationView} />
    </Router>
  ),
  document.getElementById("root")!
);
