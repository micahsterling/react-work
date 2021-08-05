import './App.css';
import { PokemonScreen, SinglePokemonScreen } from './screens';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={PokemonScreen} />
        <Route exact path="/pokemon" component={SinglePokemonScreen} />
      </Router>
    </div>
  );
}

export default App;
