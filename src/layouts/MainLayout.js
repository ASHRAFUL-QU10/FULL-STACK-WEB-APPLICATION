import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  );
};

export default MainLayout;
