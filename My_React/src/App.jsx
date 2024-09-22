import React from "react";
import { GojoComponent } from "./components/GojoComponent";
import { EventHandler } from "./components/eventHandling";
import {State} from "./components/StateManagement"
import {LiftStateUp} from "./components/LiftStateUp"
import { StateHooks } from "./components/StateHooks";
import { ToggleSwitch } from "./projects/ToggleSwitch/ToggleSwitch";
import { Todo } from "./projects/Todo/Todo";
import { ShortCircuit } from "./components/hooks/Short_Circuit/ShortCircuit";
import { Count } from "./components/hooks/count/Count";
import { SignUP } from "./components/login/SignUP";
import { LoginForm } from "./components/login/LoginForm";

export function App() {
  return (
    <section className="w-full">
      {/* <GojoComponent /> */}
      {/* <LiftStateUp/>
      <StateHooks/> */}
      {/* <State/> */}
      {/* <EventHandler/> */}
      {/* <Todo/> */}
      {/* <ShortCircuit/>   */}
      {/* <Count/> */}
      {/* <SignUP/> */}
      <LoginForm/>
      {/* <ToggleSwitch/> */}
    </section>
  );
}

