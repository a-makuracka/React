export const getAllTrips = () => async dispatch => {

    fetch(`http://localhost:2000/react/all`).then(data => {
        data.json().then(data_from_db => {
            dispatch({ type: "main", properties: data_from_db});

        });

    })

}