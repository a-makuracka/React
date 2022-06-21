export const getTrip = (id) => async dispatch => {

    fetch(`http://localhost:2000/react/trip/${id}`).then(data => {

        data.json().then(data_from_db => {
            dispatch({ type: "trip", properties: data_from_db})

        })
    })

}