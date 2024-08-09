import { MdDone } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";

export const TodoList = ({ data , checkedTodo, onhandleDoneTodo , onHandleDeleteTodo}) => {
    const conditionCheck = checkedTodo ? "line-through" : "";
    return (
        <li
            className="relative shadow-md p-3 rounded-lg w-[30rem] justify-between border flex"
        >
            <span className={`${conditionCheck}`}>{data}</span>
            <div className="w-[6rem] flex justify-between text-xl">
                <button
                    onClick={() => onhandleDoneTodo(data)}
                    className ="text-green-500"
                >
                    <MdDone />
                </button>
                <button
                    onClick={() => onHandleDeleteTodo(data)}
                    className="text-red-500"
                >
                    <RiDeleteBin6Fill />
                </button>
            </div>
        </li>
    )
}
