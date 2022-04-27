import './App.css';
import Conversor from './components/Conversor';

function App() {
  return (
    <div className="App">
      <h1>Conversor de Moedas</h1>
      <div className="linha">
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      </div>
      <div className="linha">
        <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
        <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
      </div>
      <div className="linha">
        <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
        <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
      </div>
    </div>
  );
}

export default App;
