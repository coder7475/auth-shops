import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import Analytics from "@/pages/Admin/Analytics";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Features from "@/pages/Features";
import Blogs from "@/pages/FooterPages/Blogs";
import Careers from "@/pages/FooterPages/Careers";
import HelpCenter from "@/pages/FooterPages/HelpCenter";
import Press from "@/pages/FooterPages/Press";
import Safety from "@/pages/FooterPages/Safety";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import Privacy from "@/pages/Privacy";
import Register from "@/pages/Register";
import Terms from "@/pages/Terms";
import Assessment from "@/pages/User/Assessment";
import Verify from "@/pages/Verify";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "features",
        Component: Features,
      },
      {
        path: "faq",
        Component: FAQ,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "terms",
        Component: Terms,
      },
      {
        path: "privacy",
        Component: Privacy,
      },
      {
        path: "careers",
        Component: Careers,
      },
      {
        path: "safety",
        Component: Safety,
      },
      {
        path: "/blogs",
        Component: Blogs,
      },
      {
        path: "help",
        Component: HelpCenter,
      },
      {
        path: "press",
        Component: Press,
      },
      {
        path: "blog",
        Component: Blogs,
      },
      {
        path: "verify",
        Component: Verify,
      },
    ],
  },
  {
    path: "/admin",
    Component: DashboardLayout,
    children: [
      {
        path: "analytics",
        Component: Analytics,
      },
    ],
  },
  {
    path: "/user",
    Component: DashboardLayout,
    children: [
      {
        path: "assessment",
        Component: Assessment,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
