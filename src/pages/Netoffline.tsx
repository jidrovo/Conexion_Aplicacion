import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent
} from "@ionic/react";

function Netoffline(){
const [isOnline,setIsOnline]=useState(navigator.onLine);

useEffect(()=>{
  const handleStatusChange = () => {
    setIsOnline(navigator.onLine);
  };
  window.addEventListener('online',handleStatusChange);
  window.addEventListener('offline',handleStatusChange);
  return()=>{
    window.removeEventListener('online',handleStatusChange);
    window.removeEventListener('offline',handleStatusChange);
  };
},[isOnline]);
return(
  <div className='container'>
        <h3>Welcome to KindaCode.com</h3>
        <p>Turn on/off your Wifi to see what happens</p>
        {isOnline ?(
            <h1 className="online">You are Online</h1>
        ): (
            <h1 className="offline"> You are Offline</h1>
        )}
        </div>
);
}
export default Netoffline;


