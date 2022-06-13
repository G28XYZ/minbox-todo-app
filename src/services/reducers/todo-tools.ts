import { IAction, IItem, IState } from "../../utils/types";
import { TODO_TOOLS } from "../actions/todo-tools";

export const todoToolsReduce = (state: IState, action: IAction) => {
  switch (action.type) {
    case TODO_TOOLS.CHANGE_VIEW:
      return { ...state, view: action.view };
    case TODO_TOOLS.CLEAR_COMPLETED:
      const newList = state.list.filter((item: IItem) => item.done === false);
      return { ...state, list: newList };
    default:
      return state;
  }
};
