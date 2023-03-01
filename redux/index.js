const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

// action is an object that has type property 
// action creator is a function that return an action
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}


const initialState = {
    numOfCakes: 10
}


// Reducer is pure function that accepts state and action as arguements,
// and return the next state of the application 
// (previousState, action) => newState

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state, // first make a copy of the curState
            numOfCakes: state.numOfCakes - 1 // update 
        }
        default: return state
    }
}

const store = createStore(reducer)
console.log('Initial state', store.getState())

// store.subscribe take listener (Function) as argument, 
// The callback to be invoked any time an action has been dispatched (see line 42-44), 
// store.subscribe return a function that unsubscribes the change listener
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()
