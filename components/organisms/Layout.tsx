import React, { ReactNode } from "react";
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import Prompt from "../atoms/Prompt";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="d-flex flex-column gap-5 ">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
