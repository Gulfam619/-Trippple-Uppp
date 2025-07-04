import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Authtication/Signin";
import Signup from "../pages/Authtication/Signup";
import DefaultLayout from "../layout";
import Dashboard from "../pages/DashboardPages/Dashboard";

const Routing = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>

  );
};

export default Routing;
