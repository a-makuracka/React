import './App.css';
import { useSelector } from 'react-redux'
import { modeSelector } from '../selectors/modeSelector';
import { Main } from '../components/main/index.js';
import { Trip } from '../components/trip/index.js';
// import { Error } from '../components/error'

export const App = () => {
  const mode = useSelector(modeSelector);
  switch(mode) {
    case "main":
      return (<Main></Main>)
    case "trip":
      return (<Trip></Trip>)
    default:
      return (<Main></Main>) //return (<Error></Error>)
  }
}

