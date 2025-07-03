import { Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import Signin from "../pages/Authtication/Signin";
import Signup from "../pages/Authtication/Signup";

const Routing = () => {
  return (
    <Routes>
      <Route path="/  " element={<Landing />} />

      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default Routing;
