import React, { useEffect, useState, Suspense } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import DefaultLayout from "../components/layouts/defaultLayout";
import Home from "../pages/home";
import Login from "../pages/login";
import { useAuth } from "../hooks/index";
import SignUp from "../pages/sign-up";
import NotFoundPage from "../pages/not-found";

const CustomRoute = () => {
  // loading
  const [loading, setLoading] = useState(true);
  // auth
  const { auth } = useAuth();
  // navigate
  const navigate = useNavigate();
  // location
  const { pathname } = useLocation();
  // valid routes
  const validRoutes = ["/login", "/signup", "/dashboard"];
  // is valid route
  const isValidRoute = validRoutes.some((item) => item === pathname);

  useEffect(() => {
    setLoading(false);
  }, [auth]);

  // check for already logged in
  useEffect(() => {
    // if user is logged in
    if (auth?.token) {
      navigate("/dashboard");
    }
  }, [auth, navigate]);

  // Doctor routes
  const DefaultAdminRoutes = useRoutes([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          path: "default",
          element: <Home />,
        },
      ],
    },
    { path: "*", element: <NotFoundPage /> },
  ]);

  // Default routes
  const DefaultRoutes = useRoutes([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "signup", element: <SignUp /> },
      ],
    },
    { path: "*", element: isValidRoute ? <Login /> : <NotFoundPage /> },
  ]);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      {auth?.token && isValidRoute ? DefaultAdminRoutes : DefaultRoutes}
    </Suspense>
  );
};
export default CustomRoute;
