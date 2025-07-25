import Main from "../layout/Main";
import Home from "../pages/homepage";
import { createBrowserRouter} from 'react-router'
import HowItWorks from "../pages/how-it-works";
import ForSchool from "../pages/For school";
import PricingPlan from "../pages/pricing-plan";
import FAQ from "../pages/FAQ";
import Login from "../pages/login";
import Register from "../pages/register";

const router = createBrowserRouter([
     {
          path: "/",
          element: <Main />,
          children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/how-it-works",
                element: <HowItWorks />
            },
            {
                path: "/pricing",
                element: <PricingPlan />
            },
            {
                path: "/faq",
                element: <FAQ />
            },
            {
                path: "/for-schools",
                element: <ForSchool />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
          ]
     },
]);

export default router;
