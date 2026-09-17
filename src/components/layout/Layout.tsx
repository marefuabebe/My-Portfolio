import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-bg-dark">
      <Navbar />
      <main id="main-content" className="flex-1 pt-[60px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
