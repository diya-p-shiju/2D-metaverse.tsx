import Footer from "@/components/molecules/Footer";
import Header from "@/components/molecules/Header";
import SideBar from "@/components/molecules/SideBar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen grid grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] bg-black ">
      {/* Header */}
      <div className="col-span-2">
        <Header />
      </div>

      {/* Sidebar (NavBar) */}
      <div className="row-span-2 ">
        <SideBar />
      </div>

      {/* Main Content */}
      <div >{children}</div>

      {/* Footer */}
      <div className="col-span-2 ">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
