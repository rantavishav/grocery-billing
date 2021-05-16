import {
    FETCH_SUCCESS,
    FETCH_FAILED
} from './type'

const intialState = {

    resultArray: [],
    spinner: true
};

export default (state = intialState, actions) =>{
    switch(actions.type) {
        case FETCH_SUCCESS:
            return{
                ...state,
                resultArray: actions.payload,
                spinner:false
            }
        case FETCH_FAILED:
            return{
                ...state,
                spinner: true
            
            }  
            
        default:
                return state;
    }
}