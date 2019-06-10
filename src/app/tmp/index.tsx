import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ITmpDto } from "../../dtos/tmp_dto";
import { IRootState } from "../../store/state";
import { tmpActions } from "./actions";

interface ITmpProps {
  dataDto: ITmpDto;
  actions: any;
}
class Tmp extends React.Component<ITmpProps> {
  public constructor(props: ITmpProps) {
    super(props);
  }

  public componentDidMount() {
    setTimeout(() => {
      this.props.actions.tmpLoadData();
    }, 1000);
  }

  public render() {
    const dto = this.props.dataDto;
    return (
      <div className="App">
        <h1>{dto.title}</h1>
        <h2>{dto.subTile}</h2>
      </div>
    );
  }
}

function mapStateToProps(state: IRootState) {
  return { dataDto: state.tmp.dataDto };
}
function mapDispatchToProps(dispatch: Dispatch) {
  return { actions: bindActionCreators(tmpActions, dispatch) };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tmp);
