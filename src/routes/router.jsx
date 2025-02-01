
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";


// import Protected from "../layouts/Protected";
import NavLayout from "../layouts/NavLayout.jsx"

// import Login from "../pages/Login";
import Logout from "../pages/login/Logout.jsx";

import Home from "../pages/Home";

import Canvas from "../pages/canvas/Canvas.jsx"
import Dashboard from "../pages/Dashboard.jsx"
import Campaign from "../pages/campaign/Campaign.jsx"
import Login from "../pages/login/Login.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/* <Route Component={Protected}> */}
      <Route index Component={Home} />
      <Route Component={NavLayout}>
        
        <Route path="canvas" Component={Canvas} />
        <Route path="dashboard" Component={Dashboard} />
      </Route>
      <Route path="campaign" Component={Campaign} />
      {/* </Route> */}
      <Route path="login" Component={Login} />
      <Route path="logout" Component={Logout} />
    </Route >
  )
);

export default router;
