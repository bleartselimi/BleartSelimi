import { useEffect, useRef } from 'react';
import './Transition.css';
import { useGeneralContext } from '../../hooks/useGeneralContext';
import { useNavigate } from 'react-router';

const Transition = () => {

    const navigate = useNavigate();

    const { state, dispatch, transitionIn, transitionOut, menuOpend } = useGeneralContext();
    const slideTopRef = useRef<HTMLDivElement | null>(null);

    const transitionEvent = () => {
        if (
            (window.location.hash.slice(1, window.location.hash.length) !== state.transitionIn.to) &&
            state.transitionIn.transition &&
            !state.transitionOut
        ) {
            dispatch({ type: "GLOBAL_LOADING_STATE", payload: false });
            slideTopRef.current!.style.transform = "translateY(calc(0% - 1px))";
            setTimeout(() => {
                document.body.scrollTo(0,0);
                menuOpend(false);
                transitionOut(true);
                navigate(state.transitionIn.to);
                setTimeout(() => {
                    slideTopRef.current!.style.transform = "translateY(-100%)";
                    transitionOut(false);
                    transitionIn("", false);
                    setTimeout(() => {
                        dispatch({ type: "GLOBAL_LOADING_STATE", payload: true });
                    }, 500)
                }, 300)
            }, 750)
        }
    }

    useEffect(() => {
        transitionEvent();
    }, [state.transitionIn.transition, state.transitionOut])

    return (
        <>
            <div className='slide-top' ref={slideTopRef}></div>
        </>
    )
};

export default Transition