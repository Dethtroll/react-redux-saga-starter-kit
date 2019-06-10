import { Action } from "redux";

export interface IAction extends Action {}

export interface IActionPayloaded<T> extends IAction {
  type: string;
  payload?: T;
}
