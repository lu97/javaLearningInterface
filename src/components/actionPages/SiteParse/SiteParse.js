import React, { Component } from 'react';
import "./SiteParse.css";
import {ALL_LISTS, DATA_FORMAT, HEADS_LIST, NEWS, NOTE, RANGE, TAG_NAME} from "../../../constants/AppConstants";
import {bindActionCreators} from "redux";
import {setCurrentItemCode} from "../../../actions/DataStoreActions";
import {connect} from "react-redux";
import {setParseData} from "../../../actions/ActionPageActions";
import {getRestDataWithParams} from "../../../rests/appRests";
import {getItem} from "../../../constants/leftMenuConstants";

class SiteParse extends Component {
  constructor(props) {
    super(props);

    this.selectedChange = this.selectedChange.bind(this);
    this.formatChange = this.formatChange.bind(this);
    this.countTypeChange = this.countTypeChange.bind(this);
    this.countStartChange = this.countStartChange.bind(this);
    this.countEndChange = this.countEndChange.bind(this);
    this.getParseData = this.getParseData.bind(this);
    this.validateData = this.validateData.bind(this);
    this.setToStoreData = this.setToStoreData.bind(this);

    const { parseSite } = this.props;
    this.state = (parseSite.rs);
    console.log(this.state);
  }

  selectedChange(e) {
    this.setState({
      selectType: e.currentTarget.value
    });
  }
  countEndChange(e){
    this.setState({
      count: {
        end: e.currentTarget.value
      },
    });
  }
  countStartChange(e){
    this.setState({
      count: {
        start: e.currentTarget.value
      },
    });
  }
  formatChange(event){
    this.setState({dataFormat: event.target.value});
  }
  countTypeChange(event){
    this.setState({countType: event.target.value});
  }
  setToStoreData(){

  }
  validateData(){
    return true;
    //TODO написать валидацию всех полей и подсветить ошибки
  }

  getParseData(){
    const { currentItemCode,  setParseData} = this.props;
    if(this.validateData){
      getRestDataWithParams(getItem(currentItemCode), setParseData, this.state);
    }
  }

  render() {
    return <div className="siteParse">
      <table>
        <tr>
          <td>Адрес</td>
          <td><input type="text" value={this.state.url}/></td>
        </tr>
        <tr>
          <td>Условие выборки</td>
          <td>
            <span><input name="selected"
                         type="radio"
                         value={TAG_NAME}
                         onChange={this.selectedChange}
                         checked={this.state.selectType === TAG_NAME}/>
            По названию тега</span>
            <span><input
                name="selected"
                type="radio"
                value={DATA_FORMAT}
                onChange={this.selectedChange}
                checked={this.state.selectType === DATA_FORMAT}
            /> По формату данных</span>
          </td>
        </tr>
        <tr>
          <td>
            Формат данных
          </td>
          <td>
            <select value={this.state.dataFormat} onChange={this.formatChange} disabled={this.state.selectType === TAG_NAME} >
              <option value={HEADS_LIST}>Список (Перечень заголовков)</option>
              <option value={NOTE}>Запись (Заголовок - содержимое)</option>
              <option value={NEWS}>Новость (заголовок, содержимое, дата публикации, автор, теги, связанные статьи, изображения)</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            Тег (название тега вводится без скобок, пример - p,  br, h3)
          </td>
          <td>
            <input type="text" disabled={this.state.selectType === DATA_FORMAT} value={this.state.tag}/>
          </td>
        </tr>
        <tr>
          <td>Количество записей</td>
          <td>
            <select value={this.state.countType} onChange={this.countTypeChange}>
              <option value={ALL_LISTS}>Все</option>
              <option value={RANGE}>Указать диапазон</option>
            </select>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>с <input disabled={this.state.countType === ALL_LISTS}
                       value={this.state.count.start}
                       onChange={this.countStartChange}
                       className="range"
          />
             по <input disabled={this.state.countType === ALL_LISTS}
                       value={this.state.count.end}
                       onChange={this.countEndChange}
                       className="range"
            /></td>
        </tr>
        <tr>
          <td colSpan="2"><div className="getParseBtn" onClick={this.getParseData}>Получить данные</div> </td>
        </tr>
      </table>
    </div>;
  }
}
const mapStateToProps = state =>{
  const { currentItemCode, parseSite} = state.actionPagesStore;
  return {currentItemCode, parseSite};
};
const mapDispatchToProps = dispatch =>({
  ...bindActionCreators({
    setParseData
  }, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(SiteParse);
