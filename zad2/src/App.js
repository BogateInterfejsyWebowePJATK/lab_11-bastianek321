import './App.css';
import OrderedList from "./components/OrderedList";
import {useState} from "react"

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomNumbers(amount){
  let numbers = [];
  for(let i = 0; i < amount; i++){
    numbers[i] = getRandomInt(0, 100)
  }
  return numbers
}

function App() {
  let [numbers, setNumbers] = useState(getRandomNumbers(10))
  console.log(numbers)
  return (
    <OrderedList items={numbers} refresh={_ => {setNumbers(getRandomNumbers(10))}} />
  );
}

export default App;
