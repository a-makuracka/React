import './App.css';
import { useSelector } from 'react-redux'
import { statusSelector } from '../selectors/statusSelector';
import { Main } from '../components/main/index.js';
import { Trip } from '../components/trip/index.js';

export const App = () => {
  const status = useSelector(statusSelector);
  switch(status) {
    case "main":
      return (<Main></Main>)
    case "trip":
      return (<Trip></Trip>)
    default:
      return (<Main></Main>) 
  }
} 

