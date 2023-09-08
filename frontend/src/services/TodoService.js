const baseUrl = "http://localhost:8000/api/todos/";

export const getAllTodos = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    return result;
};

export const getTodoNote = async (todoId) => {
    const response = await fetch(`${baseUrl}${todoId}/`);
    const result = await response.json();

    return result;
};

export const changeStatusTodoNote = async (todo) => {
    const response = await fetch(`${baseUrl}${todo.id}/`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ ...todo, completed: !todo.completed }),
    });

    const result = await response.json();

    return result;
};

export const addNote = async (newTask) => {
    let requestOption = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            title: newTask,
            description: "",
            completed: false,
        }),
    };

    const response = await fetch(baseUrl, requestOption);
    const result = await response.json();

    return result;
};

export const editNote = async (todo, newTodoTitle) => {
    const response = await fetch(`${baseUrl}${todo.id}/`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({ ...todo, title: newTodoTitle }),
    });

    const result = await response.json();

    return result;
};

export const deleteNote = async (todoId) => {
    const response = await fetch(`${baseUrl}${todoId}/`, { method: "DELETE" });

    return response;
};
