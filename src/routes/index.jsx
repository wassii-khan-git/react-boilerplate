import React, { useEffect, useState, Suspense } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import Layout from "../components/layouts/layout";
import Home from "../components/home";
import Login from "../components/login";
import { useAuth } from "../hooks/index";
import SignUp from "../components/sign-up";

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
  const DashboardRoutes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "dashboard",
          element: <Home />,
        },
      ],
    },
    { path: "*", element: <h1>Not Found</h1> },
  ]);

  // Default routes
  const DefaultRoutes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "signup", element: <SignUp /> },
      ],
    },
    { path: "*", element: isValidRoute ? <Login /> : <h1>Not Found</h1> },
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
      {auth?.token && isValidRoute ? DashboardRoutes : DefaultRoutes}
    </Suspense>
  );
};
export default CustomRoute;
