import { useState, useEffect } from 'react';

export default function Timer() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <p>Time: {time} seconds</p>
    );
}