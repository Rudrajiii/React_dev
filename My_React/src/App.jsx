import React from "react";
import { GojoComponent } from "./components/GojoComponent";
import { EventHandler } from "./components/eventHandling";


export function App() {
  return (
    <section className="container">
      <GojoComponent />
      <EventHandler/>
    </section>
  );
}

