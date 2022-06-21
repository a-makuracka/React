import './tripbox_style.css'
import { useDispatch } from 'react-redux'
import { getTrip } from '../../db/getTrip'

export const Tripbox = (props) => {
    const dispatch = useDispatch();
    return (
        <div className="tripbox">
            <input type='image' 
                className='tripbox_image' 
                src={ props.img } 
                alt={ props.img_text }>
            </input>
            <div className='description'>
                <h2 className='tripTitle'>{props.name}</h2>
                <p className='tripDesc'>{props.desc}</p>
                <div className='price'>
                    <h4 className='tripDesc'>{props.price}</h4>
                    <button onClick={() => dispatch(getTrip(props.id))}>
                        Zarezerwuj
                    </button>
                </div>
            </div>
        </div>
    )
}