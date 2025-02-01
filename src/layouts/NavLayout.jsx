import React from "react";
import Navbar from "../components/Navbar.jsx";
import { ReactFlowProvider } from "reactflow";
import { Outlet, useLocation } from "react-router";

export default function NavLayout() {
  const location = useLocation();
  const navbarRef = React.useRef(null);
  const [navbarHeight, setNavbarHeight] = React.useState(0);

  React.useEffect(() => {
    if (!navbarRef.current) return;
    const resizeObserver = new ResizeObserver(() => {
      setNavbarHeight(navbarRef.current.clientHeight);
    });
    resizeObserver.observe(navbarRef.current);
    return () => resizeObserver.disconnect(); // clean up
  }, []);

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
