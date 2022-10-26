import React from "react"
import ReactDOM from "react-dom"
import { Router } from "@/presentation/components/router/router"
import { RouterProvider } from "react-router-dom"

import "@/presentation/styles/globals.scss"
ReactDOM.render(
  <Router/>,
  document.getElementById('main')
)
