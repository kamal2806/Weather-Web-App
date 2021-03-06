import { FETCH_WEATHER } from "../actions/index";

// a reducer returns a piece of a state, it receives an action from the action creator
export default function(state=[],action){
    // console.log('Action received', action);
    switch(action.type) {
        case FETCH_WEATHER:
            // return state.concat([action.payload.data]);
            return [action.payload.data, ...state];
    }
    return state;
}