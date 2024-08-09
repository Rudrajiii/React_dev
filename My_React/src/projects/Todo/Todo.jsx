import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

export const Todo = () => {
    const [initValue, upDatedValue] = useState("");
    const [inputTask, setTask] = useState([]);

    const handleFormSubmit = (initValue) => {

        if (!initValue) return;

        if (inputTask.includes(initValue)) {
            upDatedValue("");
            return;
        }

        setTask((prevTask) => [...prevTask, initValue]);
    };
    const handleDelTodo = (curTask) => {
        console.log(curTask);
        console.log(inputTask);
        let finalArr = inputTask.filter((item) => item !== curTask);
        setTask(finalArr);
    };
    const handleDoneTodo = () => { };

    return (
        <div className="w-screen h-screen flex justify-center overflow-x-hidden">
            <div className="w-[50%] h-[50%] p-4 flex items-center flex-col gap-4">
                <header className="w-full flex items-center flex-col">
                    <h1 className="font-serif text-4xl font-medium">Todo List</h1>
                    {/* DateTime */}
                    <TodoDate />
                </header>
                < TodoForm onAddTodo={handleFormSubmit} />
                <section className="w-full flex flex-col items-center gap-2">
                    {inputTask.map((curTask, index) => {
                        return <TodoList key={index}
                            data={curTask}
                            onHandleDeleteTodo={handleDelTodo} />
                    })}
                </section>
            </div>
        </div>
    );
};
