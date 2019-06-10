import { IAction, IActionPayloaded } from "./IAction";

export interface IReducer<T> {
  reduce(state: T, action: IAction): T;
}

export interface IReducerPayloaded<T> {
  reduce(state: T, action: IActionPayloaded<any>): T;
}
