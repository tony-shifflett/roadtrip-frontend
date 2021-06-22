
import { applyMiddleware, compose, createStore } from 'redux';
import react, {useEffect} from 'react'
//thunk middleware allows asynch logic to be used 
import thunkMiddleware from 'redux-thunk'

//get plant data from database
const url = 'http:/localhost:8000'

//idk what this does but it's in the documentation - requires further reading
const middlewareEnhancer = applyMiddleware(thunkMiddleware)
//per documentation
const composedEnhancers = compose (middlewareEnhancer)


//initial state set to empty array 
const initialState = [];


//action creator function 'add' ; accepts a plant object as parameter and uses it as payload

export function addTrip(trip) {
    return {type:'add', payload:trip}
}

//action creator function 'remove' ; accepts plant object and uses it as payload
export function removeTrip (trip) {
    return {type: 'remove', payload: trip}
}

//get data from database     written based on documentation - requires investigation             
export async function getTrips(dispatch, getState){
    const response = await fetch (url +'/Roadtrip/')
    const data = await response.json()
    dispatch({type:'get', payload: data})
}



//reducer function takes in an action and returns new state based on that action
const tripReducer = (state = initialState, action) => {

    //switch statement to check action.type, which describes what happens to state
    switch (action.type) {
        //add returns new state that includes existing state + payload
        case 'add':
            return [...state, action.payload]
        //remove uses a filter function to return all objects in state - the plant being removed
        case 'remove':
            return state.filter((aTrip)=>aTrip._id !==action.payload._id)

        //get state from database 
        case 'get':
            return action.payload

        //default returns current state
        default: 
            return state;
    }
}
//adding composedEnhancers to create store per documentation (adds middleware?)
const store = createStore(tripReducer, composedEnhancers)

export default store 