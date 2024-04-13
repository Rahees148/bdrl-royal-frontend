import { useWindowSize as useReactWindowSize } from '@react-hook/window-size';
import { BREAKPOINTS } from '../constants';

const useWindowSize = () => {
    const [width, height] = useReactWindowSize({
        wait: 200,
    });

    const isTablet = width < BREAKPOINTS.desktop && width >= BREAKPOINTS.mobile;
    const isMobile = width < BREAKPOINTS.mobile;
    const isDesktop = width >= BREAKPOINTS.desktop;
    const isTabletLg = width >= BREAKPOINTS.tabletLg;
    const isDesktopLg = width >= BREAKPOINTS.desktopLg;

    return {
        width,
        height,
        isDesktopLg,
        isDesktop,
        isTablet,
        isMobile,
        isTabletLg,
    };
};

export default useWindowSize;
