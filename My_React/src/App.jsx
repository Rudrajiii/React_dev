import React from "react";
import { GojoComponent } from "./components/GojoComponent";
import { EventHandler } from "./components/eventHandling";
import {State} from "./components/StateManagement"
import {LiftStateUp} from "./components/LiftStateUp"
import { StateHooks } from "./components/StateHooks";
import { ToggleSwitch } from "./projects/ToggleSwitch/ToggleSwitch";
import { Todo } from "./projects/Todo/Todo";
import { ShortCircuit } from "./components/hooks/ShortCircuit";

export function App() {
  return (
    <section className="container w-full">
      {/* <GojoComponent /> */}
      {/* <LiftStateUp/>
      <StateHooks/> */}
      {/* <State/> */}
      {/* <EventHandler/> */}
      {/* <Todo/> */}
      <ShortCircuit/>  
      {/* <ToggleSwitch/> */}
    </section>
  );
}

