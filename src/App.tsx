import './App.css';
import { Person } from './components/Person';
import { Greet } from './components/Greet';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';


function App() {
  // const personName = {
  //   first: 'Eryk',
  //   last: 'Cygielski'
  // }
  
  // const nameList = [
  //   {
  //     first: 'Peter',
  //     last: 'Parker'
  //   },
  //   {
  //     first: 'Bruce',
  //     last: 'Wayne'
  //   },
  //   {
  //     first: 'Tony',
  //     last: 'Stark'
  //   },
  //   {
  //     first: 'Eryk',
  //     last: 'Cygielski'
  //   }
  // ]



  return (
    <div className="App">
      <Status status = 'success' />
      <Heading>This could be a price tag!</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
      {/* <Greet name='Timmy' messageCount={20} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/> */}
    </div>
  );
}

export default App;
