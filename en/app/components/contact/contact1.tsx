export default function Contact1() {
  return (
    <>
      <div className="bg-base-200 py-8 sm:py-16 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
          <div className="relative mx-auto mb-12 w-fit sm:mb-16 lg:mb-24">
            <h2 className="text-base-content text-2xl font-bold md:text-3xl lg:text-4xl">
              Bize Ulaşın
            </h2>
            <span className="from-primary/40 to-primary/5 absolute start-0 top-9 h-1 w-full rounded-full bg-gradient-to-r"></span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <img
              src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/contact/contact-8.png"
              alt="Contact illustration"
              className="size-full"
            />

            <div>
              <h3 className="text-base-content mb-6 text-2xl font-semibold">
              Yardımcı olmaktan mutluyuz!
              </h3>
              <p className="text-base-content/80 mb-10 text-lg font-medium">
                Her türlü hukuki sorunuz, destek talebiniz veya iş birliği için
                bizimle iletişime geçebilirsiniz. Uzman ekibimiz en kısa sürede
                size geri dönüş sağlayacaktır.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="card shadow-none">
                  <div className="card-body items-center gap-3">
                    <div className="avatar avatar-placeholder">
                      <div className="border-primary/20 text-primary w-9 rounded-full border">
                        <span className="icon-[tabler--clock] text-primary size-6"></span>
                      </div>
                    </div>
                    <h4 className="text-base-content text-lg font-medium">
                    Ofis Saatleri
                    </h4>
                    <div className="text-center">
                      <p className="text-base-content/80">Pazartesi-Cuma</p>
                      <p className="text-base-content/80">8:00 am to 5:00 pm</p>
                    </div>
                  </div>
                </div>

                <div className="card shadow-none">
                  <div className="card-body items-center gap-3">
                    <div className="avatar avatar-placeholder">
                      <div className="border-primary/20 text-primary w-9 rounded-full border">
                        <span className="icon-[tabler--map-pin] text-primary size-6"></span>
                      </div>
                    </div>
                    <h4 className="text-base-content text-lg font-medium">
                      Adresimiz
                    </h4>
                    <address className="text-base-content/80 text-center not-italic">
                      Nişantaşı
                      <br />
                      Istanbul, Türkiye
                    </address>
                  </div>
                </div>

                <div className="card shadow-none">
                  <div className="card-body items-center gap-3">
                    <div className="avatar avatar-placeholder">
                      <div className="border-primary/20 text-primary w-9 rounded-full border">
                        <span className="icon-[tabler--briefcase] text-primary size-6"></span>
                      </div>
                    </div>
                    <h4 className="text-base-content text-lg font-medium">
                      Office 2
                    </h4>
                    <address className="text-base-content/80 text-center not-italic">
                      802 Pension Rd,Maine
                      <br />
                      96812, USA
                    </address>
                  </div>
                </div>

                <div className="card shadow-none">
                  <div className="card-body items-center gap-3">
                    <div className="avatar avatar-placeholder">
                      <div className="border-primary/20 text-primary w-9 rounded-full border">
                        <span className="icon-[tabler--phone] text-primary size-6"></span>
                      </div>
                    </div>
                    <h4 className="text-base-content text-lg font-medium">
                      Telefonumuz
                    </h4>
                    <div className="text-center">
                      <p className="text-base-content/80">+90-532-686-1522</p>
                      
                    </div>
                  </div>
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
