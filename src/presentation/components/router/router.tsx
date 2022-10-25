import React from "react"
import { createBrowserRouter } from "react-router-dom"
import { Login } from "../../pages"
import "@/presentation/styles/globals.scss"

export const Router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  }
])
