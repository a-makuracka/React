export const getAllTrips = () => async dispatch => {

    fetch(`http://localhost:2000/react/all`).then(data => {
        console.log("pobieranie:");
        console.log(data);
        data.json().then(data_from_db => {

            console.log("przy pobieraniu");
            console.log(data_from_db);
            console.log(data_from_db[0].id);
            console.log(data_from_db[0].id);
            console.log(data_from_db[0].nazwa);
            console.log(data_from_db[0].obrazek);
            console.log(data_from_db[0].obrazek_tekst);
            console.log(data_from_db[0].opis);
            console.log(data_from_db[0].cena);
            dispatch({ type: "main", properties: data_from_db});

        });

    })

}