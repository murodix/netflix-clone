import { useState, useEffect } from "react";

export default function useIsScrollFromTop(value) {

    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setIsScroll(window.scrollY >= value ? true : false) 
        }
        
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [value]);


    return [isScroll, setIsScroll];
}