import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './index.css'
import './tailwindTop.css'

import Home from './pages/Home'
import Verification from './pages/Verification'

export default function App() {
  return (
    <>
    <Home></Home>
    <BrowserRouter>
      <Routes>
        <Route component={Home} path="/" />
        <Route component={Verification} path="/verify" />
      </Routes>
    </BrowserRouter>
    </>
  )
}