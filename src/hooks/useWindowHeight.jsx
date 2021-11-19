import { useState, useEffect } from "react";


export default function useWindowHeight(initialValue) {
    const [headerHeight, setHeaderHeight] = useState(initialValue);

    useEffect(() => {
        setHeaderHeight(window.innerHeight);

        const handleResize = () => {
            console.log(window);
            setHeaderHeight(window.innerHeight);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [headerHeight, setHeaderHeight]);

    return headerHeight;
}
