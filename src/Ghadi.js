import React, { useState, useEffect } from "react";
import Switch from "react-switch"
import { StyleSheet, View, Text} from 'react-native';
import {FaCalendarAlt} from 'react-icons/fa';


import "./Ghadi.css";


export default function Ghadi(){
  const options = { year: 'numeric', month: 'long', day: '2-digit', weekday: 'short' }
  const [clock, setClock] = useState(new Date().toLocaleTimeString());
  const [tarik, setTarik] = useState(new Date().toLocaleDateString("en-IN", options))
  const[checked,  setChecked] = useState(true)

  useEffect(() => {
    setInterval(tick, 1000)
  });

  useEffect(() => {
    setTarik(new Date().toLocaleDateString("en-IN",options))
  })

  

  const toggle = ()=>{
      setChecked(!checked)
  }

  function tick() {
    return setClock(new Date().toLocaleTimeString())
  }

  const styles = StyleSheet.create(
    {
        CircleShape: {
            width: 250,
            height: 250,
            alignSelf: "center",
            borderRadius: 250 / 2,
            backgroundColor: 'darkgrey',
            borderEndColor:'black'
            
        },
        Display:{
            textAlign:"center",
            marginTop: 50,
            fontSize:20,
            color: 'blue',
            
        }

    }
)

  

  return (
    <div className="GhadiBody">
        <div className='switchAndCalendar'>
            <Switch onChange ={toggle} checked ={checked}/>
            <FaCalendarAlt size="30"/>
        </div>

        <View style={styles.CircleShape}>
            <Text style={styles.Display}>
                <h1>{clock}</h1>
                {checked && (<h4>{tarik}</h4>)}
            </Text>    
        </View>
    </div>
  );
}



       
            
        

