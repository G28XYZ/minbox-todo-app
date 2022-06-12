import { ChangeEvent, FormEvent } from "react";
import { addTodo, changeTodoText } from "../../services/actions/add-todo";
import { useStore } from "../../services/store";

function AddTodo() {
  const [state, dispatch] = useStore();
  const { todoText } = state;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const text = e.target.value;
    changeTodoText(dispatch, text);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    addTodo(dispatch);
    changeTodoText(dispatch, "");
  }

  return (
    <form className="add" onSubmit={onSubmit}>
      <button className="add__button" type="submit"></button>
      <input
        type="text"
        placeholder="What needs to be done?"
        className="add__input"
        onChange={handleChange}
        value={todoText}
        required
      />
    </form>
  );
}

export default AddTodo;
