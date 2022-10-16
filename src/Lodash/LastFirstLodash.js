import _ from "lodash";
import React from "react";

export default function LastFirstLodash() {
  const arrStudent = [
    { id: 1, name: "John", age: "20" },
    { id: 2, name: "Johnny", age: "21" },
    { id: 3, name: "JohnNatal", age: "22" },
  ];

  const firstItem = _.first(arrStudent);
  const lastItem = _.last(arrStudent);

  const arr = [["001", "Quynh"], ["002", "JohnNatal"], ["003", "JohnN"]];
  const [id, name] = _.first(arr);
  const [id2, name2] = _.last(arr)
  return (
    <div>
      <h1>Lấy phần tử đầu tiên trong mảng: {firstItem.name}</h1>
      <h1>Lấy phần tử đầu cuối trong mảng: {lastItem.name}</h1>
      <hr/>

      <h2>{id} : {name}</h2>
      <h2>{id2} : {name2}</h2>
    </div>
  );
}
