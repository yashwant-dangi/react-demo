import { createStore } from 'redux';
import react from 'react';

const ADD_TODO = "ADD_TODO";

const initialstate = {
    todos: []
}
// action reducers
function add_todo(text) {
    return { type: ADD_TODO, value: text }
}

//reducer
function reducer(state = initialstate, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign({},state,{
                todos: state.todos.concat(action.value)
            })
        default:
            return state
    }
}

let store = createStore(reducer);
store.subscribe(()=> console.log(store.getState()))
store.dispatch(add_todo("Hello"));
store.dispatch(add_todo("World"));

window.add = (text) => {
    store.dispatch(add_todo(text))
}


// export default class Redux extends React.Component {
//     render() {
//         return(
//             <div>
//                 redux tutorial
//             </div>
//         )
//     }
// }