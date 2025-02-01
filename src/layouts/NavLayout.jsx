import React from "react";
import Navbar from "../components/Navbar.jsx";
import { ReactFlowProvider } from "reactflow";
import { Outlet, useLocation } from "react-router";

export default function NavLayout() {
  const location = useLocation();
  const navbarRef = React.useRef(null);
  const navbarHeight = navbarRef.current ? navbarRef.current.clientHeight : 0;

  const isCanvasRoute = location.pathname.includes("canvas");
  return (
    <>
      <Navbar innerRef={navbarRef} />
      <div
        className={isCanvasRoute ? "w-full " : ""}
        style={
          isCanvasRoute
            ? {
                height: `calc(100vh - ${navbarHeight}px)`,
                paddingTop: `${navbarHeight}px`,
              }
            : {
                paddingTop: `${navbarHeight}px`,
              }
        }
      >
        {isCanvasRoute ? (
          <ReactFlowProvider>
            <Outlet />
          </ReactFlowProvider>
        ) : (
          <Outlet />
        )}
      </div>
    </>
  );
}
