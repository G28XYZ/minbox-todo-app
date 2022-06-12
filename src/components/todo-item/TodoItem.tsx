import { useEffect } from "react";
import { checkTodo } from "../../services/actions/todo-list";
import { useStore } from "../../services/store";
import { IItem } from "../../utils/types";

function TodoItem(item: IItem) {
  const [state, dispatch] = useStore();
  const { check, text } = item;

  function handleCheckTodo() {
    checkTodo(dispatch, item);
  }

  useEffect(() => {
    console.log(item);
  }, []);

  return (
    <li className="todo__list-item">
      <button
        onClick={handleCheckTodo}
        className={`todo__button ${check && "todo__button_active"}`}
      ></button>
      <p className={`todo__text ${check && "todo__text_active"}`}>{text}</p>
    </li>
  );
}

export default TodoItem;
