import { useState } from "react"

export const Todo = () => {
    const [initValue , upDatedValue] = useState("");
    const [inputTask , setTask] = useState([]);
    const handleClickEvent = (value) => {
        upDatedValue(value);
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if(!initValue) return;
        
        if(inputTask.includes(initValue)){
            upDatedValue("");
            return;
        };

        setTask((prevTask) => [...prevTask , initValue]);

        upDatedValue("");
    }
    return (
        <div className="w-screen h-screen flex justify-center overflow-x-hidden">
            <div className="w-[50%] h-[50%] p-4 flex items-center flex-col gap-4">
                <header className="font-serif text-4xl font-medium">Todo List</header>
                {/* DateTime */}
                <section className="w-full flex  justify-center">
                    <form  className="relative"
                        onSubmit={handleFormSubmit}>
                        <div className="flex gap-2 relative w-[22rem] max-w-96 rounded-md">
                            <input className="p-2 w-[15rem] border-2 rounded-md" type="text"
                            name=""
                            id="" 
                            placeholder="Enter The Task"
                            value={initValue}
                            onChange={(event) => handleClickEvent(event.target.value)}/>
                            <button className="w-[6rem] bg-green-400 p-2 rounded-md text-md">Add Task</button>
                        </div>
                    </form>
                </section>
                <section className="w-full flex flex-col items-center gap-2">
                    {
                        inputTask.map((curTask , index) => {
                            return(
                                <li key={index} className="shadow-md p-3 rounded-lg w-[30rem] border flex">
                                    <span>{curTask}</span>
                                </li>
                            )
                        })
                    }
                </section>
            </div>
        </div>
    )
}

