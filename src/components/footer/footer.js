import './footer_style.css'
import { useDispatch } from 'react-redux'

export const Footer = () => {
    const dispatch = useDispatch();
    return (
        <div className="header">
            <button onClick={() => {
                            dispatch({
                                type: "main",
                                // properties: props.id
                            })
                        }}>
                O firmie
            </button>
            <button onClick={() => {
                            dispatch({
                                type: "main",
                                // properties: props.id
                            })
                        }}>
                Polityka prywatności
            </button>
            <button onClick={() => {
                            dispatch({
                                type: "main",
                                // properties: props.id
                            })
                        }}>
                Kontakt
            </button>
        </div>
    )
}