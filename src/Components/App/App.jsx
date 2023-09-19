import "./App.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Masterlayout from "./../Masterlayout/Masterlayout";
import Notfound from "./../Notfound/Notfound";
import Home from "./../Home/Home";
import Register from "./../Register/Register";
import Login from "./../Login/Login";
import Bags from "../Bags/Bags";
import Sneakers from "../Sneakers/Sneakers";
import Belt from "../Belt/Belt";
import Contact from "../Contact/Contact";
import { useState } from "react";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import Profile from "./../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [userData, setuserData] = useState(null);
  let saveUSerData = () => {
    let encodedToken = localStorage.getItem("token");
    let decodedToken = jwtDecode(encodedToken);
    setuserData(decodedToken);
    console.log(decodedToken);
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      saveUSerData();
    }
  }, []);
  let logout = () => {
    localStorage.removeItem("token");
    saveUSerData(null);
    return <Navigate to="login" />;
  };
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Masterlayout userData={userData} logout={logout} />,
      errorElement: <Notfound />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute userData={userData}>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "Bags",
          element: (
            <ProtectedRoute userData={userData}>
              <Bags />
            </ProtectedRoute>
          ),
        },
        {
          path: "Sneakers",
          element: (
            <ProtectedRoute userData={userData}>
              <Sneakers />
            </ProtectedRoute>
          ),
        },
        {
          path: "Belt",
          element: (
            <ProtectedRoute userData={userData}>
              <Belt />
            </ProtectedRoute>
          ),
        },
        {
          path: "Contact",
          element: (
            <ProtectedRoute userData={userData}>
              <Contact />
            </ProtectedRoute>
          ),
        },
        {
          path: " Profile",
          element: (
            <ProtectedRoute userData={userData}>
              <Profile userData={userData} />
            </ProtectedRoute>
          ),
        },
        { path: "register", element: <Register /> },
        {
          path: "login",
          element: <Login saveUSerData={saveUSerData} />,
        },
      ],
    },
  ]);
  return (
    <div ClassName="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
