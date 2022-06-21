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
                <p className='tripTitle'>{props.name}</p>
                <p className='tripDesc'>{props.desc}</p>
                <div className='price'>
                    <p className='tripDesc'>{props.price}</p>
                    <button onClick={() => {
                            dispatch({
                                type: "trip",
                                properties: props.id
                            })
                        }}>
                        Zarezerwuj
                    </button>
                </div>
            </div>
        </div>
    )
}