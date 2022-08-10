import React from 'react';
import {useLocation, Navigate} from 'react-router-dom';

const PrivatePage = ({children}) => {
    const location = useLocation();
    const auth = children;

    if (!auth) {
        return <Navigate to='/login' state={{from: location}}/>
    }

    return (
        <div>
            Это приватная страница
        </div>
    );
};

export default PrivatePage;