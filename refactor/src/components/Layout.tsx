import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="main-container">
        <Header />
        {/* <div > */}
        <main>{children}</main>
        {/* </div> */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
