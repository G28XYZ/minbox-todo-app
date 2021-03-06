import { IAction, IItem, IState } from "../../utils/types";
import { TODO_LIST } from "../actions/todo-list";

export const todoListReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case TODO_LIST.CHECK_TODO:
      const newList = Object.assign(state.list);
      const itemIndex = newList.findIndex(
        (item: IItem) => item.id === action.item.id
      );
      state.list[itemIndex].done = !state.list[itemIndex].done;
      return { ...state, list: [...state.list] };

    default:
      return state;
  }
};
