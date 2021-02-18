import './App.css';

//Components 
import Header from './components/Header.jsx'
import { nanoid as getNanoId } from 'nanoid'

function App() {
  const name = 'Esteban'
  const age = '29'
  const login = true
  const numbers = [1, 2, 3, 4, 5]
  const familyMembers = ['Siman', 'Moshi-oshi', 'Sarita', 'Deivi']

  return (login) &&
    (
      <>
        <Header />
        <h1>My name is {name} and I'm {age} old.</h1>
        <h3>{numbers.join(',')}</h3>
        <ul>
          {
            familyMembers.map(member => {
              return (
                <li key={getNanoId()}>{member}</li>
              )
            })
          }
        </ul>
      </>
    )
}

export default App;
