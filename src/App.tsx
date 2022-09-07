import React from "react";
import { createRoot } from "react-dom/client";
import { ReactLocation, Router } from "react-location";

import "./index.scss";
import { routes } from "./routes";

const reactLocation = new ReactLocation();

const App = () => <Router location={reactLocation} routes={routes} />;
const container = document.getElementById("app") as HTMLElement;
const root = createRoot(container);
root.render(<App />);
