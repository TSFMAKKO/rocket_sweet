import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4">
        <Outlet /> {/* 相當於 Vue 的 <RouterView /> */}
      </main>
      <Footer />
    </div>
  );
}
