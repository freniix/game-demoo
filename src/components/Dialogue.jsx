import { useRef, useImperativeHandle } from "react";
export default function Dialogue({ref, result ,time}){
    const dialogu = useRef(null);
    useImperativeHandle(ref, ()=>{
        return{
            show(){
                dialogu.current.showModal();
            }
        }
    })
    return(
        <dialog ref={dialogu} className="result-modal">
            <h2>You {result}</h2>
            <p>Initial time was <strong>{time} seconds</strong></p>
            <p> You stopped timer before <strong>X</strong> seconds</p>
            <form method="dialog"> 
                <button>Close</button>
            </form>
        </dialog>
    )
}