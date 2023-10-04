// import {Navigate, Outlet, useLocation} from "react-router-dom";
// import ROUTES from "../../../constants/routes";

// const PublicRouter = () => {
//     const {pathname} = useLocation();
//     let isAuth: AuthType = null;
//     const value = sessionStorage.getItem("userToken");

//     if (typeof value === "string") {
//         isAuth = JSON.parse(value);
//     }

//     if (pathname === ROUTES.HOME.PATH) {
//         return isAuth ? (
//             <Navigate to={ROUTES.USER_PAGE.PATH} replace />
//         ) : (
//             <Outlet />
//         );
//     }

//     return isAuth ? <Navigate to={ROUTES.HOME.PATH} replace /> : <Outlet />;
// };

// export default PublicRouter;
