import { createBrowserRouter } from "react-router-dom";
import HomePage from "../features/home/routes/home";
import { InstallationRoute } from "../features/installation/routes/installation";
import { ThemingRoute } from "../features/theming/routes/theming";

const AppRouter = () => {
    return createBrowserRouter([
        {
            path: "/",
            element: <HomePage />
        },
        {
            path: "/installation",
            element: <InstallationRoute />
        },
        {
            path: "/theming",
            element: <ThemingRoute />
        }
    ])

}

export default AppRouter