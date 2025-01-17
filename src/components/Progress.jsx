import { useState, useEffect } from "react";

export default function Progress({ duration, reset,checkAnswer }) {
    const [remainingTime, setRemainingTime] = useState(duration);

    useEffect(() => {
        if (reset) {
            setRemainingTime(duration); 
        }
    }, [reset, duration]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => {
                if (prevTime <= 100) {
                    clearInterval(interval); 
                    checkAnswer()
                    return 0;
                }
                return prevTime - 50; 
            });
        }, 50);

        return () => clearInterval(interval); 
    }, [remainingTime]); 

    return (
        <progress
            id="question-time"
            max={duration}
            value={remainingTime}
            style={{ width: "100%" }}
        />
    );
}
