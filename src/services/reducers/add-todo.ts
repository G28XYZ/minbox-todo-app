import { IAction, IState } from "../../utils/types";
import { ADD_ACTIONS } from "../actions/add-todo";

export const addTodoReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case ADD_ACTIONS.ADD_TODO:
      console.log(action);
      return state;
    default:
      return state;
  }
};
