import { BreadCrumb } from "./components/BreadCrumb";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
