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
    /*arr_trips.push(<Tripbox
        id={1}
        key={1}
        name={'Góry szerokie'}
        img={'https://blog.goldensubmarine.com/wp-content/uploads/nag%C5%82owek-gory.jpg'}
        img_text={"goooooooooooooooooooooooooooory"}
        desc={"opiiiiissssssssssssssssssssssssssssssssssssssssss"}
        price={45}>
        </Tripbox>)
    arr_trips.push(<Tripbox
        id={2}
        key={2}
        name={'Morza szerokie'}
        img={'https://blog.goldensubmarine.com/wp-content/uploads/nag%C5%82owek-gory.jpg'}
        img_text={"goooooooooooooooooooooooooooory"}
        desc={"opiiiiissssssssssssssssssssssssssssssssssssssssss"}
        price={45}>
        </Tripbox>)*/
    console.log(selector_trips);
    for (let trip of selector_trips) {
        console.log(trip.id);
        console.log(trip.key);
        console.log(trip.nazwa);
        console.log(trip.obrazek);
        console.log(trip.obrazek_tekst);
        console.log(trip.opis);
        console.log(trip.cena);
        
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