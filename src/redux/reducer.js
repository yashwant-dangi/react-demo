const initialState = {
    firstname: [{ name: "yash", id: 1 }, { name: "ashish", id: 2 }],
    lastName: []
}

function rootReducer(state = initialState, action) {
    return state;
}

export default rootReducer;