export interface IItem {
  text: string;
  done: boolean;
  id: string;
}
export interface IState {
  list: [] | IItem[];
  view: string;
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
  view?: string;
}
