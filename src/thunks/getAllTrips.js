export const getAllTrips = () => async dispatch => {

    fetch('http://localhost:3000/react/all').then(data => {
        console.log("pobieranie:");
        console.log(data);
        data.json().then(data_from_db => {

            console.log("przy pobieraniu" + data_from_db);
            dispatch({ type: "main", properties: data_from_db});

        });

    })

}