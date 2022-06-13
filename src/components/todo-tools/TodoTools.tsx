import { MouseEvent } from "react";
import { TODO_TOOLS } from "../../services/actions/todo-tools";
import { useStore } from "../../services/store";
import { IItem } from "../../utils/types";

function TodoTools() {
  const [state, dispatch] = useStore();
  const view = state.view;
  const activeList = state.list.filter((item: IItem) => item.done === false);

  function handleClickView(e: MouseEvent<HTMLButtonElement>) {
    const view = e.currentTarget.textContent;
    dispatch({ type: TODO_TOOLS.CHANGE_VIEW, view });
  }

  function handleClearCompleted() {
    dispatch({ type: TODO_TOOLS.CLEAR_COMPLETED });
  }

  function formatText() {
    const item = activeList.length > 1 ? "items" : "item";
    return activeList.length !== 0 ? `${activeList.length} ${item} left` : "";
  }

  return (
    <div className="tools">
      <p className="tools__info">{formatText()}</p>
      <div className="tools__buttons">
        <button
          aria-label="All"
          onClick={handleClickView}
          className={`tools__button ${view == "All" && "tools__button_active"}`}
        >
          All
        </button>
        <button
          aria-label="Active"
          onClick={handleClickView}
          className={`tools__button ${
            view === "Active" && "tools__button_active"
          }`}
        >
          Active
        </button>
        <button
          aria-label="Completed"
          onClick={handleClickView}
          className={`tools__button ${
            view === "Completed" && "tools__button_active"
          }`}
        >
          Completed
        </button>
      </div>
      <div className="tools__clear">
        <button
          aria-label="clear"
          onClick={handleClearCompleted}
          className="tools__button"
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default TodoTools;
