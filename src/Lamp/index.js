import React, { Component } from "react";
import "./style.css";

/* 
1. Створити компоненту Lamp (Лампочка), яка має булевий стан (true/false). Якщо стан true - увімкнено - відобразити кружечок жовтого кольору 
з помаранчевою рамочкою, якщо false - вимкнено - кружечок сірого кольору з чорною рамочкою. Також додати кнопку, яка змінюватиме стан компоненти 
("перемикач" лампочки). Стилі можна винести в окремий css-селектор і призначати його або прибирати при рендерингу компоненти. 
*/

class Lamp extends Component {
  constructor(props) {
    super(props);
    this.state = { light: false };
  }
  changeLamp = (event) => {
    this.setState({ light: !this.state.light });
  };
  render() {
    return (
      <div
        onClick={this.changeLamp}
        className={this.state.light ? "lamp-on" : "lamp-off"}
      ></div>
    );
  }
}

export default Lamp;
