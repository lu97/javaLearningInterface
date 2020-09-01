import React, { Component } from 'react';
import "./SiteParse.css";

class SiteParse extends Component {
  render() {
    return <div className="siteParse">
      <table>
        <tr>
          <td>Адрес</td>
          <td><input type="text"/></td>
        </tr>
        <tr>
          <td>Условие выборки</td>
          <td>
            <span><input name="selected" type="radio" value="tagName"/> По названию тега</span>
            <span><input name="selected" defaultChecked={true} type="radio" value="dataFormat"/> По формату данных</span>
          </td>
        </tr>
        <tr>
          <td>
            Формат данных
          </td>
          <td>
            <select>
              <option>Список (Перечень заголовков)</option>
              <option>Запись (Заголовок - содержимое)</option>
              <option>Новость (заголовок, содержимое, дата публикации, автор, теги, связанные статьи, изображения)</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            Тег (название тега вводится без скобок, пример - p,  br, h3)
          </td>
          <td>
            <input type="text"/>
          </td>
        </tr>
        <tr>
          <td>Количество записей</td>
          <td>
            <select>
              <option>Все</option>
              <option>Указать диапазон</option>
            </select>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>с <input/> по <input/></td>
        </tr>
        <tr>
          <td colSpan="2"><div className="getParseBtn">Получить данные</div> </td>
        </tr>
      </table>
    </div>;
  }
}

export default SiteParse;
