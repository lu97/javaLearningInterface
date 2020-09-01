import React, { Component } from 'react';
import {defaultRestGetData} from "../../../rests/appRests";
import {bindActionCreators} from "redux";
import {setCurrentItemCode} from "../../../actions/DataStoreActions";
import {connect} from "react-redux";
import {setTestRestData} from "../../../actions/ActionPageActions";
import {getItem} from "../../../constants/leftMenuConstants";

class TestRest extends Component {
  constructor(props) {
    super(props);
    this.getRequest = this.getRequest.bind(this);
  }
  render() {
    const { testRestData } = this.props;
    return<div className="testRest">
      <div className="testRestBtn" onClick={this.getRequest}>Нажмите</div>
      <div className="testRestAns">{testRestData && testRestData.content}</div>
    </div>;
  }
  getRequest(){
    const {currentItemCode, setTestRestData} = this.props;
    defaultRestGetData(getItem(currentItemCode).path, setTestRestData);
  }
}

const mapStateToProps = state =>{
  const { currentItemCode } = state.dataStore;
  const { testRestData } = state.actionPagesStore;
  return {currentItemCode, testRestData};
};

const mapDispatchToProps = dispatch =>({
  ...bindActionCreators({
    setTestRestData
  }, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(TestRest);

