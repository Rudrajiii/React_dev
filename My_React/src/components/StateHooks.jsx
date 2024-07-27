import {React , useState } from 'react';

export function StateHooks() {

  let [count , setCount] = useState(0);
  let incrementFunc = () => {
    setCount( () => count+1 );
  }
  console.log("Parent Component is runing..")
  return (
    <div className='App'>
      <section>
        <h1>{count}</h1>
        <button onClick={() => incrementFunc()}>Click Me</button>
      </section>
      <ChildComponent counter={count}/>
    </div>
  );
}
export function ChildComponent({counter}){
  console.log("child component is also running..");
  return(
    <div>
      <h1>Child Component is running - {counter}</h1>
    </div>
  )
}