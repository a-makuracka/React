const initialState = {
    mode : "main",
    trip: null,
    all_trips: [],
}

export const modeReducer = (state = initialState, action) => {
    console.log(action.mode);
    switch (action.type) {
        case "main": {
            console.log("jest main state");
            return {  
                ...state,
                mode: "main",
                //all_trips: action.properties
            }
        }
        case "trip":
            return {
                ...state,
                mode: "trip",
                //trip: action.properties
            }
        default: {
            return state;
        }
    }
}