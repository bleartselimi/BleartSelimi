import "./Noise.css";
import { useEffect, useRef } from "react";

const Noise = () => {

    const noiseRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        let counter: number = 0;
        const id = setInterval(() => {
            if (noiseRef.current) {
                noiseRef.current.style.transform = `translate(${((Math.random() * 10) * (Math.round(Math.random()) ? 1 : -1)).toFixed(2)}%, ${((Math.random() * 15) * (Math.round(Math.random()) ? 1 : -1)).toFixed(2)}%)`;
            }
            if (counter === 50) {
                counter = 0;
            }
            else counter++;
        }, 75)

        return () => clearInterval(id)
    }, [])

    return (
        <div className='noise' ref={noiseRef}></div>
    )
}

export default Noise