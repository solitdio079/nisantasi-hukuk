import type { Route } from "./+types/home";
//import { Welcome } from "../welcome/welcome";
import Navbar from "~/components/Navbar";
import { Outlet } from "react-router";
import Footer from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <> <Navbar/> <Outlet/> <Footer/></>;
}
