import './App.css';

//Components 
import Header from './components/Header.jsx'

function App() {
  const name = 'Esteban'
  const age = '29'
  const login = false

  if (login)
    return (
      <>
        <Header />
        <h1>My name is {name} and I'm {age} old.</h1>
      </>
    );
  else
    return (
        <>
          <Header />
          <h1>Usuario anónimo</h1>
        </>
    )
}

export default App;
