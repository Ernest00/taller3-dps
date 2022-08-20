import logo from './logo.svg';
import './App.css';
import Avatar from './components/avatar';
import Details from './components/details';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <p>Portafolio 📒</p>
      </div>
      <div className="App-contain">
      <Avatar></Avatar>
      <Details></Details>
      </div>
    </div>
  );
}


export default App;
