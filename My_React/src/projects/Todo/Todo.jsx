import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStorageData , setTodoInLocalStrorage } from "./TodoLocalStorage";


export const Todo = () => {
    const [initValue, upDatedValue] = useState({});

    const [inputTask, setTask] = useState(() => getLocalStorageData());

    const handleFormSubmit = (initValue) => {

        const {id , content , checked} = initValue;

        if (!content) return;

        const ifContentExists = inputTask.find(
            (curTask) => curTask.content === content
        );
        if(ifContentExists) return;

        setTask((prevTask) => [...prevTask, {id:id ,content:content,checked:checked }]);
    };
    const handleDelTodo = (curTask) => {
        console.log(curTask);
        console.log(inputTask);
        let finalArr = inputTask.filter((item) => item.content !== curTask);
        setTask(finalArr);
    };
    const handleDoneTodo = (value) => {
        let checkTask = inputTask.map((curTask) => {
            if(curTask.content === value){
                return {...curTask , checked:!curTask.checked}
            }else{
                return curTask;
            }
        });
        setTask(checkTask);
    };

    setTodoInLocalStrorage(inputTask);

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
                    {inputTask.map((curTask) => {
                        return <TodoList key={curTask.id}
                            data={curTask.content}
                            onHandleDeleteTodo={handleDelTodo}
                            onhandleDoneTodo={handleDoneTodo}
                            checkedTodo={curTask.checked} />
                    })}
                </section>
            </div>
        </div>
    );
};
