import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Masterlayout from "./Components/Masterlayout/Masterlayout";
import Notfound from "./Components/Notfound/Notfound";
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Bags from "./Components/Bags/Bags";
import Sneakers from "./Components/Sneakers/Sneakers";
import Belt from "./Components/Belt/Belt";
import Contact from "./Components/Contact/Contact";

function App() {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <Masterlayout />,
      errorElement: <Notfound />,
      children: [
        { index: true, element: <Home /> },
        { path: "Bags", element: <Bags /> },
        { path: "Sneakers", element: <Sneakers /> },
        { path: "Belt", element: <Belt /> },
        { path: "Contact", element: <Contact /> },
        { path: "register", element: <Register /> },
        {
          path: "login",
          element: <Login />,
          children: [{ path: "register", element: <Register /> }],
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
