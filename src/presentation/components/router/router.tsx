import React from "react"
import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage } from "../../pages/login/login"

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}
