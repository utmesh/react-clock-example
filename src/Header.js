import React from 'react'
import './App.css'
import {FaClock} from 'react-icons/fa';

export default function Header(){
    const HeaderStyle ={
        margin: 10,
       
    }
    const HeaderStyleh1 = {
        color: 'white'
    }
    return(
        <div className = 'Header'>
            <FaClock size="55" style = {HeaderStyle} />
            <h1 style = {HeaderStyleh1}>React Clock</h1> 

        </div>

    )
}