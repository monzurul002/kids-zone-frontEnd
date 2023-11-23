import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const { user } = useContext(AuthContext)
const PrivateRoute = ({ children }) => {
    const location = useLocation()
    if (user) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }}  ></Navigate>
};

export default PrivateRoute;