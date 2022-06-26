import Footer from "../common/Footer";
import Header from "../common/Header";

const MainLayout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default MainLayout;
