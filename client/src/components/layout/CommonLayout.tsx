import type { ReactNode } from "react";

import ScrollToTop from "../ScrollToTop";

interface IProps {
  children: ReactNode;
}

export default function CommonLayout({ children }: Readonly<IProps>) {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />

      <div className="grow-1">{children}</div>
    </div>
  );
}
