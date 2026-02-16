import { createBrowserRouter } from "react-router-dom";
import HomePage from "../features/home/routes/home";

const AppRouter = () => {
    return createBrowserRouter([
        {
            path: "/",
            element: <HomePage />
        }
    ])

}

export default AppRouter