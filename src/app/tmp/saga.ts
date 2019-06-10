import { put, select, takeEvery } from "redux-saga/effects";
import { ITmpDto } from "../../dtos/tmp_dto";
import { IAction } from "../../store/IAction";
import { IRootState } from "../../store/state";
import { tmpActions, TMP_LOAD_DATA } from "./actions";
import { safeSagaExecute } from "../../middleware/saga";

export class TmpApiSaga {
  public constructor() {
    this.loadData = this.loadData.bind(this);
  }

  public static Initialize() {
    const saga = new TmpApiSaga();
    return saga.watch();
  }

  public *watch() {
    yield takeEvery(TMP_LOAD_DATA, a => safeSagaExecute(a, this.loadData));
  }

  private *loadData(action: IAction) {
    const state: IRootState = yield select();

    const dto = {
      title: state.tmp.dataDto.title + "+1",
      subTile: state.tmp.dataDto.subTile
    } as ITmpDto;
    yield put(tmpActions.tmpDataLoaded(dto));
  }
}
