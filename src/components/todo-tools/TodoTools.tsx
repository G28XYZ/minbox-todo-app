function TodoTools() {
  return (
    <div className="tools">
      <p className="tools__info">items</p>
      <div className="tools__buttons">
        <button className="tools__button tools__button_active">All</button>
        <button className="tools__button">Active</button>
        <button className="tools__button">Completed</button>
      </div>
      <div className="tools__clear">
        <button className="tools__button">Clear Completed</button>
      </div>
    </div>
  );
}

export default TodoTools;
