import { useState } from 'react';
import './App.css';
import CartWidget from './components/CartWidget';
import ItemList from './components/ItemList';
import Counter from './components/counter';
import Header from './components/header';


function App() {
  const[counter, setCounter] = useState(0);

  const isValidCounter = counter > 0;

  const incrementCounter = () => {
    setCounter((prevCounter)=> prevCounter + 1);
  };
  
  const decrementCounter = () => {
    if(!isValidCounter)return;
    setCounter((prevCounter)=> prevCounter - 1);
  };



  return (
    
      <div>
        <Header logo="Shatterdome"/>
        <Counter isValidCounter={isValidCounter} counter={counter} onDecrementCounter={decrementCounter} onIncrementCounter ={incrementCounter}/>
        <ItemList texto='------' />
        <CartWidget />
      </div>

      
  );
}

export default App;
