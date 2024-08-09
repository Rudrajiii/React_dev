import { useState } from "react";
export const TodoForm = ({onAddTodo}) => {
  const [initValue, upDatedValue] = useState("");
  const handleClickEvent = (value) => {
    upDatedValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(initValue);
    upDatedValue("");
  }
    return (
        <section className="w-full flex  justify-center">
          <form className="relative" onSubmit={handleFormSubmit}>
            <div className="flex gap-2 relative w-[22rem] max-w-96 rounded-md">
              <input
                className="p-2 w-[15rem] border-2 rounded-md"
                type="text"
                name=""
                id=""
                placeholder="Enter The Task"
                value={initValue}
                onChange={(event) => handleClickEvent(event.target.value)}
              />
              <button className="w-[6rem] bg-green-400 p-2 rounded-md text-md">
                Add Task
              </button>
            </div>
          </form>
        </section>
    )
}