import './App.css';
import { useSelector } from 'react-redux'
import { statusSelector } from '../selectors/statusSelector';
import { Main } from '../components/main/index.js';
import { Trip } from '../components/trip/index.js';
import { Booking } from './booking';

export const App = () => {
  const status = useSelector(statusSelector);
  switch(status) {
    case "main":
      return (<Main></Main>)
    case "trip":
      return (<Trip></Trip>)
    case "booking":
      return (<Booking></Booking>)
    default:
      return (<Main></Main>) 
  }
} 

