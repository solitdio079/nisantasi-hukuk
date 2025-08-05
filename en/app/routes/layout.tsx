import type { Route } from "./+types/home";
//import { Welcome } from "../welcome/welcome";
import Navbar from "~/components/Navbar";
import { Outlet, Meta } from "react-router";
import Footer from "~/components/Footer";


export function meta({}: Route.MetaArgs) {
  return [
    { title: " Nişantaşı Hukuk Bürosu ve Danışmanlık" },
    { name: "description", content: "İstanbul Nişantaşı'nda uzman avukatlık hizmetleri: aile, ceza, iş hukuku ve daha fazlası."},
    { name: "keywords", content: "avukat, istanbul avukat, Istanbul ve Nişantaşı avukatlık bürosu, avukatlık, nişantaşı avukatlık, istanbul avukat bürosu,Ceza Hukuku Hizmetleri, İş ve Sosyal Güvenlik Hukuku, Miras Hukuku,Sözleşmeler Hukuku,Boşanma ve Nafaka hukuku"  },
    {name:"robots", content:"index, follow"}
  ];
}


export default function Home() {
  return <div data-theme="dark">
    <Meta/>
     <Navbar/> <Outlet/>
  <a href="https://wa.me/905326861522" target="_blank" className="btn fixed btn-xl bottom-6 right-6 btn-circle btn-gradient btn-success" aria-label="Circle Gradient Icon Button"> <span className="icon-[tabler--brand-whatsapp] size-10 shrink-0"></span></a>
   <Footer/></div>;
}
