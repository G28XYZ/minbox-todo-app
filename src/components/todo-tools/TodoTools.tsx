function TodoTools() {
  return (
    <div className="tools">
      <p className="tools__info">items</p>
      <button className="tools__button tools__button-all">All</button>
      <button className="tools__button tools__button-active">Active</button>
      <button className="tools__button tools__button-completed">
        Completed
      </button>
      <button className="tools__button tools__button-clear-completed">
        Clear Completed
      </button>
    </div>
  );
}

export default TodoTools;
