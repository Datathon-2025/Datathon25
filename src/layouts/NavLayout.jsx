import Navbar from "../components/Navbar.jsx";
import { ReactFlowProvider } from 'reactflow';
import { Outlet, useLocation } from "react-router";

import WorkspaceSidebar from "../components/Workflow/WorkspaceSidebar.tsx"

export default function NavLayout() {
  const location = useLocation();

  const isCanvasRoute = location.pathname.includes('canvas');
  return (
    <>
      <Navbar />
      <div className={isCanvasRoute ? 'w-full h-screen' : ''}>
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
