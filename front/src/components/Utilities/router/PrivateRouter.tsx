// import {useEffect} from "react";
import {Navigate, Outlet} from "react-router-dom";
import ROUTES from "../../../constants/routes";
// import {MESSAGE} from "../../../constants";

const PrivateRouter = () => {
    // let isAuth: AuthType = null;
    // const value = sessionStorage.getItem("user");

    // if (value) {
    //     isAuth = JSON.parse(value);
    // }

    // useEffect(() => {
    //     if (!isAuth) {
    //         alert(MESSAGE.PRIVATE_ROUTE);
    //     }
    // }, [isAuth]);

    // return !isAuth ? <Navigate to={ROUTES.HOME.PATH} replace /> : <Outlet />;
    return document.cookie ? <Navigate to={ROUTES.USER_PAGE.PATH} replace /> : <Outlet />;
};

export default PrivateRouter;
