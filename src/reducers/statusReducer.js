const initialState = {
    status : "main",
    trip: null,
    all_trips: [],
}

export const statusReducer = (state = initialState, action) => {
    console.log(action.status);
    switch (action.type) {
        case "main": {
            console.log("jest main state");
            return {  
                ...state,
                status: "main",
                all_trips: action.properties
            }
        }
        case "trip":
            return {
                ...state,
                status: "trip",
                trip: action.properties
            }
        default: {
            return state;
        }
    }
}