import logo from './logo.svg';
import './App.css';
import ListItem from "./components/ListItem";
import OrderedList from "./components/OrderedList";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomTenNumbers(){
  let numbers = [];
  for(let i = 0; i < 10; i++){
    numbers[i] = getRandomInt(0, 100)
  }
  return numbers
}

function App() {
  let numbers = getRandomNumbers()
  console.log(numbers)
  return (
    <OrderedList items={numbers}/>
  );
}

export default App;
