'use client'

import {TimeInput} from "@nextui-org/date-input";
import { now, getLocalTimeZone } from '@internationalized/date';
import { useEffect, useState } from "react";

export default function Clock() {
    const [isMount, setIsMount] = useState(false);
    const [currentTime, setCurrentTime] = useState(now(getLocalTimeZone()));
    useEffect(() => {
        setIsMount(true)
        const timer = setInterval(() => {
          setCurrentTime(now(getLocalTimeZone()));
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);

      if(!isMount) {
        return
      }

  return (
    <TimeInput
    className="w-fit absolute right-1 top-1 z-50"
    aria-label="clock"
    value={currentTime}
    onChange={(newTime) => setCurrentTime(newTime)}
    hideTimeZone
    granularity="second" />
  );
}