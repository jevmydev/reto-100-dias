import { useEffect, useState, useRef } from "react";

export const useHeaderScroll = (mainRef) => {
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [isTopHeader, setIsTopHeader] = useState(true);
    const lastScrollYRef = useRef(0);

    const handleScroll = () => {
        const { scrollTop } = mainRef.current;
        const isScrollTop = scrollTop === 0;

        const isScrollingUp = scrollTop < lastScrollYRef.current;

        setIsTopHeader(isScrollTop);
        setIsScrollingUp(isScrollingUp);

        lastScrollYRef.current = scrollTop;
    };

    useEffect(() => {
        mainRef.current.addEventListener("scroll", handleScroll);
        return () => mainRef.current.removeEventListener("scroll", handleScroll);
    }, []);

    return { isScrollingUp, isTopHeader };
};
