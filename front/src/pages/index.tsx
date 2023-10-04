import ROUTES from "@/constants/routes";
// import PublicRouter from "@/components/Utilities/router/PublicRouter";
import Login from "@/pages/Login/Login";
import SignUp from "@/pages/SignUp/SignUp";
import Portfolio from "@/pages/Portfolio/Portfolio";
import Home from "./Home/Home";


interface Route {
    element: JSX.Element;
    name?: string;
    path?: string;
}

const PAGE_LIST: Route[] = [
    {
        path: ROUTES.HOME.PATH,
        name: ROUTES.HOME.NAME,
        element: <Home />,
    },
    {
        path: ROUTES.LOGIN.PATH,
        name: ROUTES.LOGIN.NAME,
        element: <Login />,
    },
    {
        path: ROUTES.SIGN_UP.PATH,
        name: ROUTES.SIGN_UP.NAME,
        element: <SignUp />,
    },
    {
        path: ROUTES.PORTFOLIO.PATH,
        name: ROUTES.PORTFOLIO.NAME,
        element: <Portfolio />,
    },
];



export default PAGE_LIST;
