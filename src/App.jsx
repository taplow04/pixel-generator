import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./components/Welcome";
import GridSetup from "./components/GridSetup";
import GridWrapper from "./components/GridWrapper";
import "./App.css";
import logo from "../src/assets/react.svg";

function App() {

  const router = createBrowserRouter([
    {path: "/", element: <Welcome />},
    {path: "/create-grid", element: <GridSetup />},
    {path: "/grid/:gridSize", element: <GridWrapper />}
  ]);

  return (
    <>
    <img src={logo} className="logo" />
     <RouterProvider router={router} />
    </> 
  )
}

export default App
