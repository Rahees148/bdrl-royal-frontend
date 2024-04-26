import { useEffect } from 'react';

const useClickOutside = (ref, cb, excludedTargets) => {
    useEffect(() => {
        function handleClickOutside(event) {
            event.stopPropagation();
            if (ref && ref.current && !ref.current?.contains(event.target.parentNode)) {
                const targets = excludedTargets
                    ? excludedTargets[0].current && excludedTargets[0].current.length > 1
                        ? excludedTargets[0].current.map((item) => item.current)
                        : excludedTargets.map((item) => item.current)
                    : [];
                if (!targets.includes(event.target.parentNode)) {
                    cb();
                }
            }
        }
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);
};

export default useClickOutside;
