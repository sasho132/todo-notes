export const TodoActions = {
    Info: "info",
    Edit: "edit",
    Delete: "delete",
    Add: "add",
};

export const FILTER_MAP = {
    All: () => true,
    Completed: (todo) => todo.completed,
    Incompleted: (todo) => !todo.completed,
};
