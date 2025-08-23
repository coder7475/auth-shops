import type { ReactNode } from "react";
import Footer from "./Footer";
// import Navbar from "./Navbar";

interface IProps {
  children: ReactNode;
}

export default function CommonLayout({ children }: Readonly<IProps>) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Navbar /> */}
      <div className="grow-1">{children}</div>
      <Footer />
    </div>
  );
}
