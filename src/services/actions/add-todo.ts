import { Dispatch } from "react";
import { IAction } from "../../utils/types";

export const ADD_ACTIONS = {
  ADD_TODO: "ADD_TODO",
  CHANGE_TODO_TEXT: "CHANGE_TODO_TEXT",
};

export function addTodo(dispatch: Dispatch<IAction>) {
  dispatch({ type: ADD_ACTIONS.ADD_TODO });
}

export function changeTodoText(dispatch: Dispatch<IAction>, text: string) {
  dispatch({ type: ADD_ACTIONS.CHANGE_TODO_TEXT, text });
}
