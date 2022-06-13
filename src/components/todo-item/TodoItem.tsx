import { useEffect } from "react";
import { checkTodo } from "../../services/actions/todo-list";
import { useStore } from "../../services/store";
import { IItem } from "../../utils/types";

function TodoItem(item: IItem) {
  const [state, dispatch] = useStore();
  const { done, text } = item;

  function handleCheckTodo() {
    checkTodo(dispatch, item);
  }

  return (
    <li className="todo__list-item">
      <button
        aria-label="check"
        onClick={handleCheckTodo}
        className={`todo__button ${done && "todo__button_active"}`}
      ></button>
      <p className={`todo__text ${done && "todo__text_active"}`}>{text}</p>
    </li>
  );
}

export default TodoItem;
