import logo from './logo.svg';
// import './App.css';
import PersonCard from './componets/personcard';
function App() {
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
      <PersonCard firstName="smith" lastName="johnathan" age={ 9 } hairColor="Black" />
    </div>
  );
}

export default App;
