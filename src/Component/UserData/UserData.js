import { useState } from 'react';
import { useSelector } from 'react-redux'

export default function UserdData(){
    const [newData, setData] =useState(null)
    const data = useSelector(state => state.apiFetch); //

    return(
        <div >
            <h1>Hi { data.resultArray[0].name.first }! from {data.resultArray[0].location.city}</h1>

            <h1>Phone no: {data.resultArray[0].phone}</h1>
            
        </div>      
    )
}