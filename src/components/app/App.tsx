import AddTodo from "../add-todo/AddTodo";
import TodoTools from "../todo-tools/TodoTools";
import TodoList from "../todo-list/TodoList";
import { useStore } from "../../services/store";
import { useEffect } from "react";

function App() {
  const [state, dispatch] = useStore();

  useEffect(() => {
    dispatch({ type: "INIT_APP", message: "hello" });
  }, []);

  return (
    <main className="page">
      <h1 className="title">todos</h1>
      <section className="content">
        <AddTodo />
        <TodoList />
        <TodoTools />
      </section>
    </main>
  );
}

export default App;
