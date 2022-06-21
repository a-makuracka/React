import { Footer } from '../footer/footer.js';
import { Header } from '../header/header.js';
import { useSelector } from 'react-redux'
//import { singleTripSelector } from '../selectors/singleTripSelector';
import './trip_style.css'

export const Trip = () => {   
    //const trip = useSelector(singleTripSelector);
    return (
        <div className="trip">
            <Header className="header"></Header>
            <div className='whole_trip'>
                <input type='image' 
                    className='trip_image' 
                    src={ 'https://blog.goldensubmarine.com/wp-content/uploads/nag%C5%82owek-gory.jpg'/*trip.img*/ } 
                    alt={ 'lalal'/*trip.img_text*/ }>
                </input>
                <div className='trip_description'>
                    <h2 className='trip_tripTitle'>{'tdcfljsndfjvncshzdncishnduicsdcs'/*trip.name*/}</h2>
                    <p className='trip_tripDesc'>{'tDla studentów rozpoczynających studia od roku akademickiego 2020/21 podział na przedmioty obieralne i obieralne stałe zostanie zniesiony i wymagane będzie po prostu zaliczenie 3 przedmiotów obieralnych.  Dla tych, którzy rozpoczęli studia wcześniej, zmodyfikowanie wymagań (i zastąpienie przedmiotu obieralnego stałego "zwykłym" przedmiotem obieralnym) wymaga zgody Dziekana (złóż podanie w usos).tDla studentów rozpoczynających studia od roku akademickiego 2020/21 podział na przedmioty obieralne i obieralne stałe zostanie zniesiony i wymagane będzie po prostu zaliczenie 3 przedmiotów obieralnych.  Dla tych, którzy rozpoczęli studia wcześniej, zmodyfikowanie wymagań (i zastąpienie przedmiotu obieralnego stałego "zwykłym" przedmiotem obieralnym) wymaga zgody Dziekana (złóż podanie w usos).tDla studentów rozpoczynających studia od roku akademickiego 2020/21 podział na przedmioty obieralne i obieralne stałe zostanie zniesiony i wymagane będzie po prostu zaliczenie 3 przedmiotów obieralnych.  Dla tych, którzy rozpoczęli studia wcześniej, zmodyfikowanie wymagań (i zastąpienie przedmiotu obieralnego stałego "zwykłym" przedmiotem obieralnym) wymaga zgody Dziekana (złóż podanie w usos).tDla studentów rozpoczynających studia od roku akademickiego 2020/21 podział na przedmioty obieralne i obieralne stałe zostanie zniesiony i wymagane będzie po prostu zaliczenie 3 przedmiotów obieralnych.  Dla tych, którzy rozpoczęli studia wcześniej, zmodyfikowanie wymagań (i zastąpienie przedmiotu obieralnego stałego "zwykłym" przedmiotem obieralnym) wymaga zgody Dziekana (złóż podanie w usos).tDla studentów rozpoczynających studia od roku akademickiego 2020/21 podział na przedmioty obieralne i obieralne stałe zostanie zniesiony i wymagane będzie po prostu zaliczenie 3 przedmiotów obieralnych.  Dla tych, którzy rozpoczęli studia wcześniej, zmodyfikowanie wymagań (i zastąpienie przedmiotu obieralnego stałego "zwykłym" przedmiotem obieralnym) wymaga zgody Dziekana (złóż podanie w usos).tDla studentów rozpoczynających studia od roku akademickiego 2020/21 podział na przedmioty obieralne i obieralne stałe zostanie zniesiony i wymagane będzie po prostu zaliczenie 3 przedmiotów obieralnych.  Dla tych, którzy rozpoczęli studia wcześniej, zmodyfikowanie wymagań (i zastąpienie przedmiotu obieralnego stałego "zwykłym" przedmiotem obieralnym) wymaga zgody Dziekana (złóż podanie w usos).'/*trip.desc*/}</p>
                    <div className='trip_price'>
                        <p className='trip_tripDesc'>{'34'/*trip.price*/}</p>
                        <button>
                            Zarezerwuj
                        </button>
                    </div>
                </div>
            </div>
            <Footer className="footer"></Footer>
        </div>
    )
}