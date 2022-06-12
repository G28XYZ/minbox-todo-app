import AddTodo from "../add-todo/AddTodo";
import TodoTools from "../todo-tools/TodoTools";
import TodoList from "../todo-list/TodoList";

function App() {
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
