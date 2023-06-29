import './App.css';
import { Person } from './components/Person';
import { Greet } from './components/Greet';
import { PersonList } from './components/PersonList';


function App() {
  const personName = {
    first: 'Eryk',
    last: 'Cygielski'
  }
  
  const nameList = [
    {
      first: 'Peter',
      last: 'Parker'
    },
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Tony',
      last: 'Stark'
    },
    {
      first: 'Eryk',
      last: 'Cygielski'
    }
  ]


  return (
    <div className="App">
      <Greet name='Timmy' messageCount={20} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
