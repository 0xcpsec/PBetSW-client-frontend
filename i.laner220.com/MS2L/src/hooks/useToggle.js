import {
    useState,
    useCallback
} from 'react';

export const useToggle = (initialValue = false) => {
    const [isOn, setToggle] = useState(initialValue);
    const toggle = useCallback(() => setIsOn(v => !v), []);

    return {
        isOn,
        toggle,
        setToggle
    };
};