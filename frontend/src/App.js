import "./App.css";
import { Header } from "./components/common/Header";
import { TodoList } from "./components/todo-list/TodoList";

function App() {
    return (
        <div className="App">
            <Header />
            <TodoList />
        </div>
    );
}

export default App;
