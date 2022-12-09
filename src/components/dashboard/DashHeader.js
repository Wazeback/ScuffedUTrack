import React,{ useEffect, useRef, useState } from "react";
import Sidenav from "../sidenav/Sidenav";


export default function DashHeader() {
    const newDate = useRef(new Date());

    const [currentHours, setCurrentHours] = useState(newDate.current.getDate());
    const [currentMinutes, setCurrentMinutes] = useState(newDate.current.getMonth() + 1);
    const [currentSeconds, setCurrentSeconds] = useState(newDate.current.getFullYear());
    setInterval(() => {
        newDate.current = new Date();
        setCurrentHours(newDate.current.getDate());
        setCurrentMinutes(newDate.current.getMonth() + 1);
        setCurrentSeconds(newDate.current.getFullYear());
    }, 1000);
    const nowTime = `${currentHours}-${currentMinutes}-${currentSeconds}`;
    return (
        <>

            <Sidenav className={"text-4xl m-5 text-white"}>Youtrack</Sidenav>
            <h1 className={"text-2xl m-1"}> het is vandaag {nowTime}</h1>
        </>
    );
}