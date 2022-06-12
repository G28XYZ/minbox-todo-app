import { useStore } from "../../services/store";
import { IItem } from "../../utils/types";
import TodoItem from "../todo-item/TodoItem";

function TodoList() {
  const [state] = useStore();
  const { filtered } = state;
  const filteredList = filtered.all
    ? state.list
    : state.list.filter((item: IItem) => {
        if (filtered.active) return item.check === false;
        if (filtered.completed) return item.check === true;
      });

  return (
    <div className="todo">
      <ul className="todo__list">
        {state.list.length == 0 && <h2 className="todo__message">Add Todo</h2>}
        {filteredList.map((item: IItem) => (
          <TodoItem {...item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
