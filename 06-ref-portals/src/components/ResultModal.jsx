import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

// If react version 19 or lower, use forwardRef.
export default function ResultModal({ ref, targetTime, remainingTime, onReset }) {


    const userLost = remainingTime <= 0;
    const formattedTimeReamining = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 1000);

    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return createPortal(
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>You lost...</h2>}
            {!userLost && <h2>Your score is <strong>{score}</strong> </h2>}
            <p> The target time was <strong>{targetTime} second{targetTime > 1 ? 's' : ''}</strong></p>
            <p>You stopped the time with <strong>{formattedTimeReamining} seconds lefts</strong></p>
            <button onClick={() => {
                dialog.current?.close();
                onReset();
            }
            }>Close</button>
        </dialog>,
        document.getElementById('modal')
    );
}