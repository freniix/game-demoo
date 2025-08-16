import { useRef, useState } from "react"
import Dialogue from "./Dialogue";
export default function TimeChallange({title, time}){
    const timer = useRef(null)
    const dialogueRef = useRef(null)   

    const [timerExpired, setTimerExpired]  = useState(false);
    const [timerStarted, setTimerStarted] =  useState (false);

    function handleStart(){
        timer.current = setTimeout(()=>{
            dialogueRef.current.show();
            setTimerStarted(false)
            setTimerExpired(true)
        }, time*1000);


        setTimerStarted(true);
    }

    function handleStop(){
        clearTimeout(timer.current);
        setTimerExpired(false)
        setTimerStarted(false)
        dialogueRef.current.show();
    }
    return(
     <>
     < Dialogue ref={dialogueRef} result={timerExpired? "lost": "won"}  time={time} />
           <section className="challenge">
               <h2>{title}</h2>
               <p className="challenge-time ">{time} second{time< 0 ? "s": ""}</p>
               <button onClick={timerStarted? handleStop: handleStart} >{timerStarted? "Stop timer": 'Start Timer'}</button>
               <p>{timerStarted? "Timer is running..." : "Timer inactive"}</p>
           </section>
     </>
    )
}
