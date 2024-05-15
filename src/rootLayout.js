import * as React from 'react';
import { ParallaxProvider } from "react-scroll-parallax";

export default function RootLayout({ children }) {
    return (
        <ParallaxProvider>
            {children}
        </ParallaxProvider>
    );
  }