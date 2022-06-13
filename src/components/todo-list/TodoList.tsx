import { useStore } from "../../services/store";
import { IItem } from "../../utils/types";
import TodoItem from "../todo-item/TodoItem";

function TodoList() {
  const [state] = useStore();
  const view = state.view;
  const filteredList =
    view === "All"
      ? state.list
      : state.list.filter((item: IItem) => {
          if (view === "Active") return item.done === false;
          if (view === "Completed") return item.done === true;
        });

  return (
    <div className="todo">
      <ul className="todo__list">
        {filteredList.length === 0 && (
          <h2 className="todo__message">{`${
            view === "All" ? "Add Todo" : "Nothing in " + view
          }`}</h2>
        )}
        {filteredList.map((item: IItem) => (
          <TodoItem {...item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
