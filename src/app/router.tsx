import { createBrowserRouter } from "react-router-dom";
import HomePage from "../features/home/routes/home";
import { InstallationRoute } from "../features/installation/routes/installation";

const AppRouter = () => {
    return createBrowserRouter([
        {
            path: "/",
            element: <HomePage />
        },
        {
            path: "/installation",
            element: <InstallationRoute />
        }
    ])

}

export default AppRouter