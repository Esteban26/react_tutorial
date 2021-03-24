import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';

//Components 
import Header from './components/Header'
import MainContent from './components/MainContent'
// third party libraries.

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <MainContent />
    </>
  )
}

export default App;
