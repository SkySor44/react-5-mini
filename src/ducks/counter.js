const initialState = {
    currentValue: 0
}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT'

//This function is an action creator
//Param is a number you want to increment by
export function increment(num){
    return {
        type: INCREMENT,
        payload: num
    }
}

export function decrement(num){
    return {
        type: DECREMENT,
        payload: num
    }
}


//Redux will automatically compare the new object below to current state and if it is different it will change state and rerender everything and update it in all components that subscribed
export default function reducer(state = initialState, action){
    switch(action.type){
        case INCREMENT:
            return {
                currentValue: state.currentValue + action.payload
            }

        case DECREMENT:
            return {
                currentValue: state.currentValue - action.payload
            }

        default:
            return state;
    }
}