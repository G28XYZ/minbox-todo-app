import AddTodo from "../add-todo/AddTodo";
import TodoTools from "../todo-tools/TodoTools";
import TodoList from "../todo-list/TodoList";
import { useStore } from "../../services/store";
import React, { useEffect } from "react";
import { IItem } from "../../utils/types";

function App() {
  const [state, dispatch] = useStore();
  const cards = state.list.filter((item: IItem) => !item.done);
  const style = { "--cards": cards.length } as React.CSSProperties;
  useEffect(() => {
    dispatch({ type: "INIT_APP", message: "hello" });
  }, []);

  return (
    <main className="page">
      <section className="content">
        <h1 className="title">todos</h1>
        <div className="todo-container" style={style}>
          <div className="todo-components">
            <AddTodo />
            <TodoList />
            <TodoTools />
          </div>
          <div className="overlay-container">
            {cards.length !== 0 &&
              cards.map((item) => (
                <div key={item.id} className="overlay"></div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
