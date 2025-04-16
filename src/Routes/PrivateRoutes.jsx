import React, {  useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext);

    if(user) {
        return children;
    }
    return <Navigate to={'/login'}></Navigate>;
};

export default PrivateRoutes;