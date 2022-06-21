import './footer_style.css'
import { useDispatch } from 'react-redux'
import { getAllTrips } from '../../db/getAllTrips';

export const Footer = () => {
    const dispatch = useDispatch();
    return (
        <div className="header">
            <button onClick={() => dispatch(getAllTrips())}>
                O firmie
            </button>
            <button onClick={() => dispatch(getAllTrips())}>
                Polityka prywatności
            </button>
            <button onClick={() => dispatch(getAllTrips())}>
                Kontakt
            </button>
        </div>
    )
}