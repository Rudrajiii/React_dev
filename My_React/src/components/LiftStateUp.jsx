import { useState } from "react";

export const LiftStateUp = () => {
  const [userInput, setInterval] = useState("");
  return (
    <>
      <CoreComponent userInput={userInput} setInterval={setInterval}/>
      <DisplayComponent userInput={userInput}/>
    </>
  );
}
const CoreComponent = ({userInput, setInterval}) => {
  
  return (
    <>
      <input type="text" placeholder="enter anything" value={userInput} onChange={(e)=>setInterval(e.target.value)}/>
    </>
  );
};
const DisplayComponent = ({userInput}) => {
  return (
    <>
      <p>You written - {userInput}</p>
    </>
  );
};
