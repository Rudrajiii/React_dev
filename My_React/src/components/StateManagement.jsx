import { useState } from "react";
export function State() {
  let myData = [
      { name: "hi", age: 2983 },
      { name: "Si", age: 2094 },
      { name: "Rudra", age: 802 },
      { name: "hihi", age: 293 },
      { name: "Sikha", age: 243 },
      { name: "ks", age: 233 },
      { name: "Ts", age: 203 },
      { name: "kshi", age: 93 },
      { name: "oi", age: 83 },
      { name: "Sakshi", age: 73 },
      { name: "Shi", age: 63 },
      { name: "Ankush", age: 60 },
    ];  
  const [publicDataset , _] = useState(myData);  
  return (
    <ul>
      {publicDataset.map((elem, index) => {
        return (
          <>
            <li key={`${elem.age}`}>
              {elem.name} - {elem.age}
            </li>
          </>
        );
      })}
    </ul>
  );
}


