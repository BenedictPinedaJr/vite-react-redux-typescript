import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import DiscoverPage from "./discover.page";
import ErrorPage from "./error.page";
import LoginPage from "./login.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "discover",
        element: <DiscoverPage />
      },
    ]
  },
  {
    path: "login",
    element: <LoginPage />
  },
]);

export default router;