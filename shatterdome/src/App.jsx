import './App.css';
import CartWidget from './components/CartWidget';
import ItemList from './components/ItemList';
import Header from './components/header';


function App() {


  return (
    
      <div>
        <Header />
        <ItemList texto='David' />
        <CartWidget />
      </div>

      
  );
}

export default App;
