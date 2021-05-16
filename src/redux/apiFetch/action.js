
import {
    FETCH_SUCCESS,
    FETCH_FAILED
} from './type'

import axios from 'axios' //used axios library to make GET request

 export const fetchData = async dispatch =>{

    try {
        
        await axios.get("https://api.randomuser.me/")
        .then(res=>dispatch({
            type: FETCH_SUCCESS,
            payload: res.data.results        
        }

        ))
        
        
    } catch (e) {
        // console.log(e);
        dispatch({
            type: FETCH_FAILED
        })
    }
}

