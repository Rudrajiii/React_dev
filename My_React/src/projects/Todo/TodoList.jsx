import { MdDone } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";

export const TodoList = ({key , data , onHandleDeleteTodo}) => {
    return (
        <li
            key={key}
            className="relative shadow-md p-3 rounded-lg w-[30rem] justify-between border flex"
        >
            <span>{data}</span>
            <div className="w-[6rem] flex justify-between text-xl">
                <button
                    onClick={() => handleDoneTodo(data)}
                    className="text-green-500"
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