import { ITmpDto } from "../../dtos/tmp_dto";
import { IAction, IActionPayloaded } from "../../store/IAction";

export const TMP_LOAD_DATA = "TMP_LOAD_DATA";
export const TMP_DATA_LOADED = "TMP_DATA_LOADED";

export const tmpActions = {
  tmpLoadData: () => {
    return { type: TMP_LOAD_DATA } as IAction;
  },

  tmpDataLoaded: (dto: ITmpDto): IActionPayloaded<ITmpDto> => {
    return { type: TMP_DATA_LOADED, payload: dto } as IActionPayloaded<ITmpDto>;
  }
};
