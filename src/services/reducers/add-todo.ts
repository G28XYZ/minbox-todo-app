import { IAction, IState } from "../../utils/types";
import { ADD_ACTIONS } from "../actions/add-todo";
const shortid = require("shortid");

export const addTodoReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case ADD_ACTIONS.ADD_TODO:
      const newTodo = {
        text: state.todoText,
        check: false,
        id: shortid.generate(),
      };
      return { ...state, list: [...state.list, newTodo] };

    case ADD_ACTIONS.CHANGE_TODO_TEXT:
      return { ...state, todoText: action.text };

    default:
      return state;
  }
};
