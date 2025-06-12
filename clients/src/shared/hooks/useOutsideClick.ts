import { useEffect, useRef } from 'react'

export default function useOutsideClick(handler: any, listenerCapturing= true) {
    const ref: any = useRef(null);

    useEffect(function () {
        function handleClick(e: Event) {
            if (ref.current && !ref.current.contains(e.target)) {
                handler();
            }
        }

        document.addEventListener('click', handleClick, listenerCapturing);

        return () => document.removeEventListener("click", handleClick, listenerCapturing);
    }, [handler, listenerCapturing]
    );
    
    return ref;
}
