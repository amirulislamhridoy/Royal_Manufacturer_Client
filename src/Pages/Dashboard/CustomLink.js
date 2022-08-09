import React from 'react';
import {
    Routes,
    Route,
    Outlet,
    Link,
    useMatch,
    useResolvedPath,
  } from "react-router-dom";

const CustomLink = ({children, to}) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        // <div>
            <Link style={{color: match && '#ffa500'}} to={to}>{children}</Link>
        // </div>
    );
};

export default CustomLink;