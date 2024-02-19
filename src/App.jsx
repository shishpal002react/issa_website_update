import { NavBar } from "./components/NavBar";
import { AllRoutes } from "./routes/AllRoutes";
import "./App.css";
import { Footer } from "./components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      {/* {location.pathname !== "/support-account-management" && <NavBar />}
      <AllRoutes />
      {location.pathname !== "/support-notes" &&
        location.pathname !== "/support-account-management" && <Footer />} */}
      {/* <Footer /> */}
      <NavBar />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
