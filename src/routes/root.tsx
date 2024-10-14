import Dashboard from "@/modules/dashboard/dashboard";
import RequireAuth from "@auth-kit/react-router/RequireAuth";
import React, { Suspense } from "react";
import type { RouteObject } from "react-router-dom";

const Login = React.lazy(() => import("@/modules/auth/login"));

export const routes: Array<RouteObject> = [
  {
    index: true,
    element: (
      <Suspense>
        <RequireAuth fallbackPath="/login">
          <Dashboard />
        </RequireAuth>
      </Suspense>
    ),
  },
  {
    path: "login",
    element: (
      <Suspense>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
];

export default routes;
