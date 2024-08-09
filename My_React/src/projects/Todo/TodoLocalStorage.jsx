let todoKey = "My_Todos";

export const getLocalStorageData = () => {
        let todo = localStorage.getItem(todoKey);
        if(!todo) return [];
        return JSON.parse(todo);
}

export const setTodoInLocalStrorage = (inputTask) => {
    return localStorage.setItem(todoKey , JSON.stringify(inputTask));
}