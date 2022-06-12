export interface IItem {
  text: string;
  check: boolean;
  id: string;
}

export interface IFiltered {
  all: boolean;
  active: boolean;
  completed: boolean;
}
export interface IState {
  list: [] | IItem[];
  filtered: IFiltered;
  todoText: string;
}

export interface IPayload {
  [key: string]: string;
}
export interface IAction {
  type: string;
  message?: string;
  text?: string;
  item?: IItem;
}
