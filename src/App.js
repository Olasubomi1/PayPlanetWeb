import React from "react";
import { Route, Switch, Redirect, Routes, Outlet } from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";
import NotFound from "./Components/NotFound";
import Nav from "./Components/Nav";
import NavigationBar from "./Components/Nav";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
