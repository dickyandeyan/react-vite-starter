import Content from "@/routes/auth/dashboard/content";
import Dashboard from "@/routes/auth/dashboard/dashboard";
import React, { Suspense } from "react";
import type { RouteObject } from "react-router-dom";

const Login = React.lazy(() => import("@/routes/auth/login"));

export const routes: Array<RouteObject> = [
  {
    index: true,
    element: (
      <Suspense>
        <Dashboard />
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
    path: "content",
    element: <Content />,
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
];

export default routes;
