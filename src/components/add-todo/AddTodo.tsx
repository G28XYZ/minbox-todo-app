import { FormEvent } from "react";

function AddTodo() {
  function onSubmit(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <form className="add" onSubmit={onSubmit}>
      <button className="add__button" type="submit"></button>
      <input
        type="text"
        placeholder="What needs to be done?"
        className="add__input"
      />
    </form>
  );
}

export default AddTodo;
