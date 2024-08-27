import { useState } from "react";

export const Count = () => {
  const [count , updateCount] = useState(0);
  const [step , setStep] = useState(0);
  function assignLowerBound(){
    count <= 0 ? updateCount(0) : updateCount(count - +step);
  }  
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="holder w-[500px] h-[350px] rounded-md bg-green-300">
        <h1 className="font-mono text-2xl font-semibold text-center p-4 h-[30%]">Simple Counter</h1>
          <h2 className="font-mono text-6xl text-center p-4 h-[30%]">{count}</h2>

        {/* Input Count */}
        <div className="input w-full py-3 h-[20%]">
          <input type="number" name="int" id="int" min={0} max={10} value={step} onChange={(e) => setStep(e.target.value)}className="w-[40%] p-1 flex justify-center items-center rounded-md m-auto border-2 border-green-700 border-solid"/>
        </div>

        <div className="hor-btns w-[100%] flex justify-around">
        <button onClick={() => updateCount(count + +step)} className="font-mono text-lg text-green-300 p-3 rounded-md bg-green-600 border-none">Increase</button>
        <button onClick={() => assignLowerBound()} className="font-mono text-lg text-green-300 p-3 rounded-md bg-green-600 border-none">Decrement</button>
        <button onClick={() => updateCount(0)} className="font-mono text-lg text-green-300 p-3 rounded-md bg-green-600 border-none">Reset</button>
        </div>
      </div>
    </div>
  );
};


