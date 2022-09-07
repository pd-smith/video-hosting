import React from "react";
import { Route } from "react-location";
import AppLayout from "../components/layout/AppLayout";

export const routes: Route[] = [
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <div>At the home screen</div>,
      },
      {
        path: "video/:videoId",
        import: () =>
          import("./videos/video-layout-module").then(
            (module) => module.default
          ),
        children: [
          {
            path: "/",
            import: () =>
              import("./videos/video-page-module").then(
                (module) => module.default
              ),
          },
        ],
      },
      {
        path: "*",
        element: <div>Not Found</div>,
      },
    ],
  },
];
