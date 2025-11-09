import { ReactNode } from "react";
import Header from "./Header";
import Hero from "./Hero";
import "./Layout.less";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="site-wrapper">
      <Header />
      <Hero />
      <main className="page-content" aria-label="Content">
        <div className="wrapper">{children}</div>
      </main>
    </div>
  );
}

export default Layout;
