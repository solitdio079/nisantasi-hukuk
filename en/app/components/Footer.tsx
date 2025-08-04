import { Link } from "react-router"
import logo from  "./logo.png"

export default function Footer(){
    return (<>
   <footer className="footer bg-base-200/60 p-10">
  <aside className="gap-6">
    <div className="flex items-center gap-2 text-xl font-bold text-base-content">
    <Link
    className="link flex text-base-content link-neutral text-xl font-bold no-underline"
    to="/"
  >
   <img src={logo} className="w-24 lg:w-32"/>
  </Link>
    </div>
    <p className="text-base-content text-sm">Güvenilir ve Etkin Hukuki Çözümler</p>
  </aside>
  <nav className="text-base-content">
    <h6 className="footer-title">Servislerimiz</h6>
    <a href="#" className="link link-hover">Ceza Hukuku Hizmetleri</a>
    <a href="#" className="link link-hover">İş ve Sosyal Güvenlik Hukuku</a>
    <a href="#" className="link link-hover">Miras Hukuku</a>
    <a href="#" className="link link-hover">Sözleşmeler Hukuku</a>
  </nav>
  <nav className="text-base-content">
    <h6 className="footer-title">Kurumsal</h6>
    <Link to="/about2" className="link link-hover">Hakkımızda</Link>
    <Link to="/contact1" className="link link-hover">İletişim</Link>
   
  </nav>
  <nav className="text-base-content">
    <h6 className="footer-title"> Hukuki</h6>
    <a href="#" className="link link-hover">Kullanım Şartları</a>
    <a href="#" className="link link-hover">Gizlilik Politikası</a>
    <a href="#" className="link link-hover">Çerez Politikası</a>
  </nav>
</footer>
    </>)
}