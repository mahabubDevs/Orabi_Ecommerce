import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar"
import RootLayout from "./components/layout/RootLayout";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      
    </Route>
  )
);

function App() {



  return <RouterProvider router={router} />;
}

export default App
