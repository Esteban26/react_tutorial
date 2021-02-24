import './App.css';
//Components 
import Header from './components/Header.jsx'
import Person from './components/Person'
// third party libraries.
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
        <hr />
        { /* Reusable component */}
        <Person
          id={1}
          name="Alfredo"
          age={29}
          birthday={new Date(1991, 2, 26)}
          hobbies={['fut', 'dibujar', 'ver películas']}
          flag
        >
          This is the children.
        </Person>
        <Person
          id={2}
          name="Esteban"
          age={30}
          birthday={new Date(1991, 2, 26)}
          hobbies={['cocinar', 'platicar', 'jugar']}
          flag={null}
        >
          This is the children.
        </Person>
      </>
    )
}

export default App;
