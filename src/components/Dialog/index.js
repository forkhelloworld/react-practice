import React from "react";

/* 
2. Створити компоненту Діалог, яка отримує через пропси ім’я користувача і виводить h2 з текстом “Привіт, (ім’я користувача)
 */

export default function Dialog({ name }) {
  return <h2>Привіт, {name}</h2>;
}
