import React,{ useEffect, useRef, useState } from "react";


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
    useEffect(() => {
        console.log(nowTime);
    });
    return (
        <>
            <h1 className={"text-2xl m-1"}>=</h1>
            <h1 className={"text-2xl m-1"}>Youtrack</h1>
            <h1 className={"text-2xl m-1"}> het is vandaag {nowTime}</h1>
        </>
    );
}