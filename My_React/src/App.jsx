import React from "react";
import { GojoComponent } from "./components/GojoComponent";
import { EventHandler } from "./components/eventHandling";
import {State} from "./components/StateManagement"


export function App() {
  return (
    <section className="container w-full">
      <GojoComponent />
      {/* <State/> */}
      {/* <EventHandler/> */}
    </section>
  );
}

