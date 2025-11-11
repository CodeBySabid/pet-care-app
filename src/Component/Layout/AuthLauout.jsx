import React from 'react';
import { Outlet } from 'react-router';

const AuthLauout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLauout;