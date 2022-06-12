function TodoList() {
  return (
    <div className="todo">
      <ul className="todo__list">
        <li className="todo__list-item">
          <button className="todo__button todo__button_active"></button>
          <p className="todo__text todo__text_active">asdffa1</p>
        </li>
        <li className="todo__list-item">
          <button className="todo__button"></button>
          <p className="todo__text">2</p>
        </li>
        <li className="todo__list-item">
          <button className="todo__button"></button>
          <p className="todo__text">3</p>
        </li>
      </ul>
    </div>
  );
}

export default TodoList;
