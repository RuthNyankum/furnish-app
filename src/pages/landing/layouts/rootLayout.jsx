import { Outlet } from "react-router-dom";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";

const RootLayout = () => {
  return <>
  <Navbar />
  <Outlet />

  <Footer />
  </>
};

export default RootLayout;