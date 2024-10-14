import { Fragment } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import RootLayout from "./components/layout";

export default function App() {
  return (
    <RootLayout>
      <Fragment>
        <Outlet />
        <ScrollRestoration />
      </Fragment>
    </RootLayout>
  );
}
