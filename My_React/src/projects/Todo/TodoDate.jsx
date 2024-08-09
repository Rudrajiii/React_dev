import { useState , useEffect } from "react";
export const TodoDate = () => {
    const [dateTime, updateThem] = useState("");
    useEffect(() => {
        const continuousInterval = setInterval(() => {
        let date = new Date();
        let formattedDated = date.toLocaleDateString();
        let formattedTime = date.toLocaleTimeString();
        updateThem(`${formattedDated} - ${formattedTime}`);
        }, 1000);
        return () => clearInterval(continuousInterval);
    }, []);
    
    return (
        <h2 className="font-mono text-2xl font-medium">{dateTime}</h2>
    )
}
