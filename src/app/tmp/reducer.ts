import { ITmpDto } from "../../dtos/tmp_dto";
import { IActionPayloaded } from "../../store/IAction";
import { IReducerPayloaded } from "../../store/IReducer";
import { TMP_DATA_LOADED } from "./actions";
import { ITmpState } from "./state";

const initialState = {
  dataDto: {
    title: "Hello CodeSandbox",
    subTile: "Start editing to see some magic happen!"
  }
} as ITmpState;

export class TmpReducer implements IReducerPayloaded<ITmpState> {
  public constructor() {
    this.reduce = this.reduce.bind(this);
  }

  public static Initialize(): (
    state: ITmpState,
    action: IActionPayloaded<any>
  ) => ITmpState {
    const reducer = new TmpReducer();
    return (state: ITmpState, action: IActionPayloaded<any>) =>
      reducer.reduce(state, action);
  }

  public reduce(
    state: ITmpState = initialState,
    action: IActionPayloaded<any>
  ): ITmpState {
    let newState = state;
    switch (action.type) {
      case TMP_DATA_LOADED:
        newState = this.onDataLoaded(state, action.payload);
        break;
    }

    return newState;
  }

  private onDataLoaded(state: ITmpState, payload: ITmpDto): ITmpState {
    return {
      ...state,
      dataDto: {
        title: payload.title,
        subTile: payload.subTile
      }
    } as ITmpState;
  }
}
