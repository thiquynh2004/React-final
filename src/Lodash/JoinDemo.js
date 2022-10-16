import _ from "lodash";
import React from "react";

export default function JoinDemo() {
  let array = ["quynh", "quynh ne", "potato"];

  let arrPerson = [
    {id: 1, name: "John", age:"20"},
    {id: 2, name: "Johnny", age:"21"},
    {id: 3, name: "JohnNatal", age:"22"}
  ]
  //lodash
  const resultLodash = _.join(array, "-");
  //es6
  const result = array.join("-");

  // Find 
  const name = _.find(arrPerson, item => item.id === 2);

  return <div>
    <h1>Demo hàm Join</h1>
    {result}
    {resultLodash}
    <h1>Demo hàm Find</h1>
    <p>Name: {name.name} , Age: {name.age}</p>
  </div>;
}
