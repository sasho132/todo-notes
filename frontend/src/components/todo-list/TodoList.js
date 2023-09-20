import { useEffect, useState } from "react";
import * as TodoService from "../../services/TodoService";
import { TodoItem } from "./todo-item/TodoItem";
import { TodoInfo } from "./todo-info/TodoInfo";
import { TodoEdit } from "./todo-edit/TodoEdit";
import { TodoDelete } from "./todo-delete/TodoDelete";
import { TodoActions } from "./TodoListConstants";
import styles from "./TodoList.module.css";

export const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [todoAction, setTodoAction] = useState(null);
    const [showAll, setShowAll] = useState("all");

    let filteredTodos = todos;

    if (showAll === "completed") {
        filteredTodos = todos?.filter((x) => x.completed);
    } else if (showAll === "incompleted") {
        filteredTodos = todos?.filter((x) => !x.completed);
    }

    useEffect(() => {
        TodoService.getAllTodos().then((todos) => setTodos(todos));
    }, []);

    const statusButtonHandler = (todo) => {
        TodoService.changeStatusTodoNote(todo).then((changedTodo) => {
            setTodos((allNotes) =>
                allNotes.map((x) => (x.id === changedTodo.id ? changedTodo : x))
            );
        });
    };

    const todoActionHandler = (todoId, actionType) => {
        TodoService.getTodoNote(todoId).then((data) => {
            setSelectedTodo(data);
            setTodoAction(actionType);
        });
    };

    const addNoteHandler = () => {
        TodoService.addNote(newTask).then((data) => {
            setTodos([...todos, data]);
        });
        setNewTask("");
    };

    const editNoteHandler = (todo, newTodoTitle, newTodoStatus) => {
        TodoService.editNote(todo, newTodoTitle, newTodoStatus).then((changedTodo) => {
            setTodos((allNotes) =>
                allNotes.map((x) => (x.id === changedTodo.id ? changedTodo : x))
            );
        });
        setSelectedTodo("");
    };

    const deleteTodoHandler = (todoId) => {
        TodoService.deleteNote(todoId).then(() => {
            TodoService.getAllTodos().then((todos) => setTodos(todos));
            setSelectedTodo(null);
        });
    };

    const closeHandler = () => {
        setSelectedTodo(null);
        setTodoAction(null);
    };

    return (
        <div className={styles.notesBody}>
            {selectedTodo && todoAction === TodoActions.Info && (
                <TodoInfo todo={selectedTodo} onClose={closeHandler} />
            )}

            {selectedTodo && todoAction === TodoActions.Delete && (
                <TodoDelete
                    todo={selectedTodo}
                    onClose={closeHandler}
                    deleteActionClick={deleteTodoHandler}
                />
            )}

            {selectedTodo && todoAction === TodoActions.Edit && (
                <TodoEdit todo={selectedTodo} onClose={closeHandler} onSave={editNoteHandler} />
            )}

            <div className={styles.notesContainer}>
                <div className={styles.inputWrapper}>
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className={styles.input}
                        placeholder="Task name..."
                    />
                    <button className={styles.inputButton} onClick={addNoteHandler}>
                        Add Task
                    </button>
                    <button className={styles.inputButtonMin} onClick={addNoteHandler}>
                        +
                    </button>
                </div>

                <div className={styles.filterBtnWrapper}>
                    <button className={styles.filterBtn} onClick={() => setShowAll("all")}>
                        All
                    </button>
                    <button className={styles.filterBtn} onClick={() => setShowAll("completed")}>
                        Completed
                    </button>
                    <button className={styles.filterBtn} onClick={() => setShowAll("incompleted")}>
                        Incompleted
                    </button>
                </div>

                {filteredTodos?.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        changeStatusClick={statusButtonHandler}
                        todoActionClick={todoActionHandler}
                    />
                ))}
            </div>
        </div>
    );
};
