'use client'

import { useEffect, useState } from "react";

const Clock = () => {
    const [date, setDate] = useState({
        hour: '00',
        minutes: '00',
        seconds: '00'
    });
    const [isDay, setIsDay] = useState('');

    useEffect(()=> {
        const timeInterval = setInterval(()=>{
            const getDate = new Date();
            const hour = getDate.getHours().toString();
            const minutes = getDate.getMinutes().toString();
            const seconds = getDate.getSeconds().toString();
            const getTime = {hour, minutes, seconds}
            setDate(getTime);

            if (+hour >= 6 && +hour < 18) {
                setIsDay('Day');
              } else {
                setIsDay('Night');
              }

        }, 1000)

        return () => clearInterval(timeInterval);
    }, []);

    return (
        <div className="custom-font">
            {date.hour}:{date.minutes}:{date.seconds} {isDay === 'Day' ? 'AM' : 'PM'}
        </div>
    )
}

export default Clock;