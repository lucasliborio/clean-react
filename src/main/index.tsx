import React from "react"
import ReactDOM from "react-dom"

import { Router } from "@/presentation/components/router/router"
import { RouterProvider } from "react-router-dom"

ReactDOM.render(
  <RouterProvider router={Router} />,
  document.getElementById('main')
)
