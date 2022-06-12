import { Dispatch } from "react";
import { IAction } from "../../utils/types";

export const ADD_ACTIONS = {
  ADD_TODO: "ADD_TODO",
};

export function addTodo(dispatch: Dispatch<IAction>) {
  dispatch({ type: ADD_ACTIONS.ADD_TODO });
}
