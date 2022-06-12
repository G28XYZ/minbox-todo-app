import { Dispatch } from "react";
import { IAction, IItem } from "../../utils/types";

export const TODO_LIST = {
  CHECK_TODO: "CHECK_TODO",
};

export function checkTodo(dispatch: Dispatch<IAction>, item: IItem) {
  dispatch({ type: TODO_LIST.CHECK_TODO, item });
}
