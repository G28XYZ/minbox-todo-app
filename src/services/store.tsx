import {
  createContext,
  useReducer,
  useMemo,
  useContext,
  Dispatch,
  ReactNode,
} from "react";
import { IAction, IState } from "../utils/types";
import { todoReducer } from "./reducers/todo";

const initialState = {};

const GlobalContext = createContext(initialState);

const reducers = (state: IState, action: IAction) => {
  return {
    ...state,
    ...Object.assign(state, todoReducer(state, action)),
  };
};

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducers, initialState);
  const contextValue = useMemo(
    (): [IState, Dispatch<IAction>] => [state, dispatch],
    [state, dispatch]
  );

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useStore(): [IState, Dispatch<IAction>] {
  return useContext<any>(GlobalContext);
}
