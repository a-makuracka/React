export const getTrip = (id) => async dispatch => {
    
    fetch(`http://localhost:2000/react/trip/${id}`).then(data => {

        data.json().then(data_from_db => {
            console.log("pobrana wycueczka:")
            console.log(data_from_db.id);
            console.log(data_from_db.nazwa);
            console.log(data_from_db.obrazek);
            console.log(data_from_db.obrazek_tekst);
            console.log(data_from_db.opis);
            console.log(data_from_db.cena);
            dispatch({ type: "trip", properties: data_from_db})
        })
    })

}