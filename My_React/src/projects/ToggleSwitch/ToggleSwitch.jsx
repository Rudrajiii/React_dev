import { useState } from "react";
import "./ToggleSwitch.css";
export const ToggleSwitch = () => {
    const [isOn , setIsOn] = useState(false);
    const handleButtonClick = () => {
        setIsOn(!isOn);
    }
    return (
        <>
        <section className="w-full h-screen flex justify-center items-center">
            <div className={`select-none cursor-pointer body  w-96 h-40 flex justify-start relative items-center rounded-full p-2 ${isOn ? "bg-green-600" : "bg-red-600"}`} onClick={handleButtonClick}>
                <div className={`toggler relative bg-slate-300 grid place-items-center w-36 h-36 rounded-full p-8  ${isOn ? "on" : "off"} `}>
                    <span className="text-2xl text-black font-medium">
                        {
                            isOn ? "ON" : "OFF"
                        }
                    </span>
                </div>
            </div>
            </section>
        </>
    )
}



