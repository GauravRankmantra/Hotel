import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";
import Layout from "./Layout";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Room from "./pages/Room";
import Event from "./pages/Event";


const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
           
            <Route path="/contact" element={<Contact />} />
             <Route path="/rooms" element={<Room />} />
             <Route path="/events" element={<Event />} />
          </Route>
          {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forget_pass" element={<ForgetPass />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
