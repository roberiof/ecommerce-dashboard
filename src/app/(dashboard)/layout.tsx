import { ReactNode } from "react";

import Header from "@/components/molecules/Header/Header";
import Sidebar from "@/components/molecules/Sidebar/Sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-fixed opacity-90 before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-black/10 before:opacity-50"
        style={{ backgroundImage: "url('/login/background.svg')" }}
      />
      <Header />
      <Sidebar />
      <div className="relative left-[150px] flex gap-16 pt-8 pb-12 pr-8 w-[90vw]">
        {children}
      </div>
    </main>
  );
};

export default Layout;
