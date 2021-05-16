import React, { useEffect } from 'react';

import './index.css';

import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/apiFetch/action'

import MainComponent from './Component/MainComponent/MainComponent'

export default function App(){
    const dispatch = useDispatch();
    const spinner = useSelector(state => state.apiFetch.spinner)
    useEffect(()=>{
        dispatch(fetchData)
    },[])
    
    return(
        <>
        {console.log(spinner)}
        {spinner === false ? <MainComponent /> : <h1>Loading...</h1> }
        </>
    )
}