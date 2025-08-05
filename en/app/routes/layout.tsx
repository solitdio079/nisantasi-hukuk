import type { Route } from "./+types/home";
//import { Welcome } from "../welcome/welcome";
import Navbar from "~/components/Navbar";
import { Outlet } from "react-router";
import Footer from "~/components/Footer";




export default function Home() {
  return <div data-theme="dark">
    
     <Navbar/> <Outlet/>
  <a href="https://wa.me/905326861522" target="_blank" className="btn fixed btn-xl bottom-6 right-6 btn-circle btn-gradient btn-success" aria-label="Circle Gradient Icon Button"> <span className="icon-[tabler--brand-whatsapp] size-10 shrink-0"></span></a>
   <Footer/></div>;
}
