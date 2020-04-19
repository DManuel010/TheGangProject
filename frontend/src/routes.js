import React from "react";
import { Redirect } from "react-router-dom";
import NotFoundError from "./containers/NotFoundError";
import Home from "./containers/Home";
import DemoPlayground from "./containers/DemoPlayground";
import SmiteBuilder from "./containers/SmiteBuilder";

export const errorRoutes = [
  {
    name: "Error",
    component: NotFoundError,
    path: "*",
    hidden: true,
    type: "Error",
  },
];

export const ROUTE_NAMES = {
  LOGIN: "/login",
};

export default [
  {
    name: "Home",
    component: Home,
    path: "/",
    exact: true,
    protected: false,
  },
  {
    name: "DemoPlayground",
    component: DemoPlayground,
    path: "/test",
    exact: true,
    protected: false,
  },
  {
    name: "ProtectedDemoPlayground",
    component: DemoPlayground,
    path: "/protected-test",
    exact: true,
    protected: true,
  },
  {
    name: "Smite",
    component: () => <Redirect to="/smite-builder/" />, // this route will redirect to route builder
    path: "/smite",
    exact: true,
    protected: false,
  },
  {
    name: "SmiteBuilder",
    component: SmiteBuilder,
    path: "/smite-builder/*", // this means it will match anything start with smite-builder
    exact: true,
    protected: false,
  },
];
