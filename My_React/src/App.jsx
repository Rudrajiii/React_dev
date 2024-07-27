import React from "react";
import { GojoComponent } from "./components/GojoComponent";
import { EventHandler } from "./components/eventHandling";
import {State} from "./components/StateManagement"
import {LiftStateUp} from "./components/LiftStateUp"
import { StateHooks } from "./components/StateHooks";
import { ToggleSwitch } from "./projects/ToggleSwitch/ToggleSwitch";

export function App() {
  return (
    <section className="container w-full">
      {/* <GojoComponent /> */}
      {/* <LiftStateUp/>
      <StateHooks/> */}
      {/* <State/> */}
      {/* <EventHandler/> */}
      
      <ToggleSwitch/>
    </section>
  );
}

