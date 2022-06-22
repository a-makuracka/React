import { Footer } from '../footer/footer.js';
import { Header } from '../header/header.js';
import { useSelector } from 'react-redux'
import { singleTripSelector } from '../../selectors/singleTripSelector';
import './booking_style.css'

export const Booking = () => {   
    const trip = useSelector(singleTripSelector);
    return (
        <div className="booking">
            <Header className="header"></Header>
            <div className='booking_whole_trip'>
                <input type='image' 
                    className='booking_image' 
                    src={ trip.obrazek } 
                    alt={ trip.obrazek_tekst }>
                </input>
                <div className='booking_description'>
                    <h2 className='booking_tripTitle'>{'Zarezerwuj wycieczkę: '+trip.nazwa}</h2>
                    <div className='booking_price'>
                        <p className='booking_tripDesc'>{trip.opis}</p>
                        <h4 className='booking_tripPrice'>{"Cena: "+trip.cena}</h4>
                    </div>
                    <h3 className='booking_form_title'>{"Formularz rezerwacyjny"}</h3>
                    <form classname="myform">  
                        <label>
                            Imię: <input type="text" className="name" />
                        </label><br></br><br></br>
                        <label>
                            Nazwisko: <input type="text" className="surname" />
                        </label><br></br><br></br>
                        <label>
                            Telefon: <input type="text" className="phone" />
                        </label><br></br><br></br>
                        <label>
                            Adres e-mail: <input type="text" className="email" />
                        </label><br></br><br></br>
                        <label>
                            Liczba osób: <input type="text" className="count" />
                        </label><br></br><br></br>
                        <label>
                        Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z art. 6 ust. 1 lit. a) Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych), dalej: „RODO”
                        (... tutaj powinna być dalsza część wynikająca z przepisów prawa ...)
                            <input
                                name="isGoing"            
                                type="checkbox"
                                />
                        </label><br></br><br></br>
                        <button className='submit_button'>
                            Zatwierdź
                        </button>
                        
                    </form>
                </div>
            </div>
            <Footer className="footer"></Footer>
        </div>
    )
}