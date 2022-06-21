import { Footer } from '../footer/footer.js';
import { Header } from '../header/header.js';
import { useSelector } from 'react-redux'
import { singleTripSelector } from '../../selectors/singleTripSelector';
import './trip_style.css'

export const Trip = () => {   
    const trip = useSelector(singleTripSelector);
    return (
        <div className="trip">
            <Header className="header"></Header>
            <div className='whole_trip'>
                <input type='image' 
                    className='trip_image' 
                    src={ trip.obrazek } 
                    alt={ trip.obrazek_tekst }>
                </input>
                <div className='trip_description'>
                    <h2 className='trip_tripTitle'>{trip.nazwa}</h2>
                    <p className='trip_tripDesc'>{trip.opis}</p>
                    <div className='trip_price'>
                        <h4 className='trip_tripDesc'>{trip.cena}</h4>
                        <button className='button_to_form'>
                            Zarezerwuj
                        </button>
                    </div>
                </div>
            </div>
            <Footer className="footer"></Footer>
        </div>
    )
}