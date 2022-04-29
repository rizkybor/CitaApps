import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/books"

export default function RouteIndex() {
  return (
    <Fragment>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Fragment>
  )
}
