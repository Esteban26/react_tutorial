import './App.css';

//Components 
import Header from './components/Header.jsx'

function App() {
  const name = 'Esteban'
  const age = '29'
  const login = true

  return (login) &&
    (
      <>
        <Header />
        <h1>My name is {name} and I'm {age} old.</h1>
      </>
    )
}

export default App;
