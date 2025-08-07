import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "~/components/Navbar";
//import Hero1 from "~/components/hero/hero1";
import Hero2 from "~/components/hero/hero2";
import Contact2 from "~/components/contact/contact2";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: " Nişantaşı Hukuk Bürosu ve Danışmanlık" },
    { name: "description", content: "Istanbul ve Nişantaşı avukatlık bürosu" },
  ];
}

export default function Home() {
  return (
    <>
      {" "}
      <Hero2 />
      <div className="bg-base-200 py-8 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
          <div className="flex justify-center items-center flex-col gap-5 mx-auto mb-12 w-fit sm:mb-16 lg:mb-24">
            <h2 className="text-base-content text-2xl font-bold md:text-3xl lg:text-4xl">
            Bizimle İletişimde Geçin
            </h2>
            <p className="text-base-content text-md md:text-lg lg:text-xl">
            Sorularınız, destek talepleriniz veya iş birliği için bizimle iletişime geçin — sizden haber almak bizi mutlu eder!
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:px-6 lg:px-8 my-12 mx-auto">
          <div className="card card-border shadow-none intersect:motion-preset-slide-right intersect:motion-delay-[600ms] intersect:motion-ease-spring-bouncier">
            <div className="p-5 gap-5 flex flex-row">
              <Link to={"#"} className="w-fit p-3 bg-primary rounded-md mb-4">
                <span className="icon-[tabler--send] text-primary-content size-8 rtl:rotate-180 "></span>
              </Link>

              <div>
                <h5 className="card-title mb-2.5 text-xl">E-posta</h5>
                <p className="mb-4">nisantasiavukatlık@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="card card-border shadow-none intersect:motion-preset-slide-right intersect:motion-delay-[800ms] intersect:motion-ease-spring-bouncier">
            <div className="p-5 gap-5 flex flex-row">
              <Link to={"#"} className="w-fit p-3 bg-primary rounded-md mb-4">
                <span className="icon-[tabler--messages] text-primary-content size-8 rtl:rotate-180 "></span>
              </Link>

              <div>
                <h5 className="card-title mb-2.5 text-xl">Whatsapp</h5>
                <p className="mb-4">+90 532 686 15 22</p>
              </div>
            </div>
          </div>
          <div className="card card-border shadow-none intersect:motion-preset-slide-right intersect:motion-delay-[1000ms] intersect:motion-ease-spring-bouncier">
            <div className="p-5 gap-5 flex flex-row">
              <Link to={"#"} className="w-fit p-3 bg-primary rounded-md mb-4">
                <span className="icon-[tabler--map-pin] text-primary-content size-8 rtl:rotate-180 "></span>
              </Link>

              <div>
                <h5 className="card-title mb-2.5 text-xl">Adresimiz</h5>
                <p className="mb-4">Nişantaşı, Istanbul Türkiye</p>
              </div>
            </div>
          </div>
        </div>
          
        </div>
      </div>
      <div className="grid items-center gap-12 lg:grid-cols-1">
        <div>
          <div style={{ width: "100%" }}>
         
            <iframe
              width="100%"
              className="h-80 lg:h-[350px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255348.37250196154!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x153471b249df9bf3%3A0x2992f933dcc8cfb0!2sAVUKAT%20MAHMUT%20FELHAN%20HUKUK%20VE%20DANI%C5%9EMANLIK%20OF%C4%B0S%C4%B0!5e0!3m2!1sen!2str!4v1754276511039!5m2!1sen!2str"
            >
              <a href="https://www.mapsdirections.info/fr/calculer-la-population-sur-une-carte">
                Carte démographique
              </a>
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
}
