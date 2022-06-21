import './sale_style.css'


export const Sale = () => {
    return (
        <div className='sale'>
            <h2 className='sale_header'>{"Promocje"}</h2>
            <div className='sale1'>
                <h4 className='sale_gory_wysokie'>{"Góry wysokie"}</h4>
                <p className='sale_date1'>{"1-31 lutego"}</p>
                <button>
                    Zarezerwuj
                </button>
            </div>
            <div className='sale2'>
                <h4 className='sale_inne_miejsce'>{"Inne miejsce"}</h4>
                <p className='sale_date2'>{"5-31 lutego"}</p>
                <button>
                    Zarezerwuj
                </button>
            </div>
            <div className='sale3'>
                <h4 className='sale_morze'>{"Morze"}</h4>
                <p className='sale_date3'>{"5-21 czerwca"}</p>
                <button>
                    Zarezerwuj
                </button>
            </div>
            
        </div>
    )
}