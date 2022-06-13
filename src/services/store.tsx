import {
  createContext,
  useReducer,
  useMemo,
  useContext,
  Dispatch,
  ReactNode,
  Context,
} from "react";
import { IAction, IItem, IState } from "../utils/types";
import { addTodoReducer } from "./reducers/add-todo";
import { todoListReducer } from "./reducers/todo-list";
import { todoToolsReduce } from "./reducers/todo-tools";
const shortid = require("shortid");

const initialState: IState = {
  list: [
    { text: "Тестовое задание", done: false, id: shortid.generate() },
    { text: "Прекрасный код", done: true, id: shortid.generate() },
    { text: "Покрытие тестами", done: false, id: shortid.generate() },
  ],
  view: "All",
  todoText: "",
};

const GlobalContext = createContext<IState>(initialState);

const reducers = (state: IState, action: IAction) => {
  return {
    ...state,
    ...Object.assign(
      state,
      addTodoReducer(state, action),
      todoToolsReduce(state, action),
      todoListReducer(state, action)
    ),
  };
};

interface IStoreProviderProps {
  children: ReactNode;
}

export function StoreProvider({ children }: IStoreProviderProps) {
  const [state, dispatch] = useReducer(reducers, initialState);
  const contextValue = useMemo(
    (): [IState, Dispatch<IAction>] => [state, dispatch],
    [state, dispatch]
  );

  return (
    <GlobalContext.Provider value={{ ...contextValue[0], ...contextValue }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useStore(): [IState, Dispatch<IAction>] {
  return useContext(GlobalContext as Context<any>);
}
