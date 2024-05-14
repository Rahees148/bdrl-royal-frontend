import * as React from 'react';
import RootLayout from "./src/rootLayout"
import "./src/scss/index.scss"
export const wrapRootElement = ({ element }) => <RootLayout>{element}</RootLayout>