import type { ReactNode } from "react";

import ScrollToTop from "../ScrollToTop";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface IProps {
  children: ReactNode;
}

export default function CommonLayout({ children }: Readonly<IProps>) {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <div className="grow-1">{children}</div>
      <Footer />
    </div>
  );
}
