import React, { useState, useEffect } from "react";
import Switch from "react-switch"
import { FaCalendarAlt } from 'react-icons/fa';


import "./Ghadi.css";


export default function Ghadi() {
  const options = { year: 'numeric', month: 'long', day: '2-digit', weekday: 'short' }
  const [clock, setClock] = useState(new Date().toLocaleTimeString());
  const [tarik, setTarik] = useState(new Date().toLocaleDateString("en-IN", options))
  const [checked, setChecked] = useState(true)

  useEffect(() => {
    setInterval(tick, 1000)
  });

  useEffect(() => {
    setTarik(new Date().toLocaleDateString("en-IN", options));
  })



  const toggle = () => {
    setChecked(!checked)
  }

  function tick() {
    return setClock(new Date().toLocaleTimeString())
  }

//TODO: convert view and text to html tags. instead of inline style use class/css

  return (
    <div className='GhadiBody'>
      <div className='switchAndCalendar'>
        <Switch onChange={toggle} checked={checked} />
        <FaCalendarAlt size="30" />
      </div>

      <div className='circleStyle'> 
        <div className='textDisplay'>
          <h1>{clock}</h1>
          {checked && (<h4>{tarik}</h4>)}
        </div>
      </div>
    </div>
  );
}







