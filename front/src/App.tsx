import PAGE_LIST from "./pages";
import {useRoutes} from "react-router-dom";

const App = () => {
    const routes = useRoutes(PAGE_LIST);

    return routes;
};

export default App;
