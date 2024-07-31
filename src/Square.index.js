import React, { Component } from "react";

/* 
3. Створити компоненту з кнопкою, за натиснення на яку примонтовується дочірня компонента Square, яка виглядає як жовтий квадрат. 
За другого натиснення на кнопку дочірня компонента відмонтовується (знищується). Реалізувати за рахунок стану батьківської компоненти і 
умовного рендерингу на його основі. Дослідити, який шлях проходить компонента під час цього, виводячи на консоль статус компоненти 
у різних методах життєвого циклу
*/

class Square extends Component {
  componentDidMount() {
    console.log("Компонента була примонтована");
  }
  shouldComponentUpdate() {
    console.log("Щось змінилося?");
  }

  componentDidUpdate() {
    console.log("Щось все-таки змінилося");
  }

  componentWillUnmount() {
    console.log("Компонента буде відмонтована");
  }
  render() {
    return (
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "gold" }}
      ></div>
    );
  }
}

export default Square;
