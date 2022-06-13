import { MouseEvent } from "react";
import { TODO_TOOLS } from "../../services/actions/todo-tools";
import { useStore } from "../../services/store";
import { IItem } from "../../utils/types";

function TodoTools() {
  const [state, dispatch] = useStore();
  const view = state.view;
  const activeList = state.list.filter((item: IItem) => item.check === false);

  function handleClickView(e: MouseEvent<HTMLButtonElement>) {
    const view = e.currentTarget.textContent;
    dispatch({ type: TODO_TOOLS.CHANGE_VIEW, view });
  }

  function handleClearComleted() {
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
          onClick={handleClickView}
          className={`tools__button ${view == "All" && "tools__button_active"}`}
        >
          All
        </button>
        <button
          onClick={handleClickView}
          className={`tools__button ${
            view === "Active" && "tools__button_active"
          }`}
        >
          Active
        </button>
        <button
          onClick={handleClickView}
          className={`tools__button ${
            view === "Completed" && "tools__button_active"
          }`}
        >
          Completed
        </button>
      </div>
      <div className="tools__clear">
        <button onClick={handleClearComleted} className="tools__button">
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default TodoTools;
