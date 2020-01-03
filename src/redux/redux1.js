import { createStore } from 'redux';

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

let store = createStore(counter)

store.subscribe(() => console.log(store.getState()))
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })


window.inc = function () {
    store.dispatch({ type: 'INCREMENT' })
}
window.dec = function () {
    store.dispatch({ type: 'INCREMENT' })
}
window.state = function () {
    return store.getState() //or
    //console.log(store.getState())
} 
