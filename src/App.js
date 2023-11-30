import './App.css';
import AddBudget from './components/addBudget';
import AddDepence from './components/addDepense';
import Header from './components/header';
import ListDipends from './components/listDipends';
import Statics from './components/statics';

function App() {
  return (
    <div className="App">
      <Header/>
      <Statics/> 
      <div id='nav'>
        <div id='btnsdiv'> 
          <AddBudget/>
          <AddDepence/>
        </div>
        <ListDipends/>
      </div>
    </div>
  );
}

export default App;
