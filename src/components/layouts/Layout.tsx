import Footer from "@/components/molecules/Footer";
import NavBar from "@/components/molecules/NavBar";
import Header from "@/components/molecules/Header";

const Layout = ({ children }) => {
  return (
    <div className="h-screen grid grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] bg-black ">
      {/* Header */}
      <div className="col-span-2 bg-red-500">
        <Header />
      </div>

      {/* Sidebar (NavBar) */}
      <div className="row-span-2 bg-blue-500">
        <NavBar />
      </div>

      {/* Main Content */}
      <div className="bg-white">
        {children}
      </div>

      {/* Footer */}
      <div className="col-span-2 bg-green-500">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;