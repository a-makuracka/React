const initialState = {
    status : "main",
    trip: null,
    all_trips: [],
}

export const statusReducer = (state = initialState, action) => {
    switch (action.type) {
        case "main": {
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
        case "booking" :
            return {
                ...state,
                status: "booking",
            }
        default: {
            return state;
        }
    }
}