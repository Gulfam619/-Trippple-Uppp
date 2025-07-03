import { Route, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import Signin from "../pages/Authtication/Signin";
import Signup from "../pages/Authtication/Signup";
import DefaultLayout from "../layout";

const Routing = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Landing />} />

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>

  );
};

export default Routing;
