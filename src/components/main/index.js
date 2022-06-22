import { useSelector } from 'react-redux';
import { Footer } from '../footer/footer.js';
import { Header } from '../header/header.js';
import '../header/header_style.css'
import './main_style.css'
import { Sale } from './sale.js';
import { Tripbox } from './tripbox.js';
import { allTripsSelector } from '../../selectors/allTripsSelector'

export const Main = () => {
    let arr_trips = [];
    const selector_trips = useSelector(allTripsSelector);
    for (let trip of selector_trips) {
        arr_trips.push(
            <Tripbox
                id={trip.id}
                key={trip.id}
                name={trip.nazwa}
                img={trip.obrazek}
                img_text={trip.obrazek_tekst}
                desc={trip.opis}
                price={trip.cena}>
            </Tripbox>
        )
    }
    return (
        <div className="main">
            <Header className="header"></Header>
            <div className='main_content'>
                <div className='scrollable'>
                    {arr_trips}
                </div>
                <div className='sale_main'>
                    <Sale></Sale>
                </div>
            </div>
            <Footer className="footer"></Footer>
        </div>
    )
}