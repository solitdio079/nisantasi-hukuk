import GoldTables from "./goldTables";

export default function Hero2() {
  return (
    <div className="bg-base-100">
      <main className="h-screen">
        <div className="flex h-full flex-col justify-between gap-18 overflow-x-hidden pt-20 md:gap-24 md:pt-25 lg:gap-15 lg:pt-27.5">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 justify-self-center px-4 text-center sm:px-6 lg:px-8">
            <div className="bg-base-200 border-base-content/20 flex w-fit items-center gap-2.5 rounded-full border px-3 py-2">
              <span className="badge badge-primary shrink-0 rounded-full">
                AI-Powered
              </span>
              <span className="text-base-content/80">
              Asırlık Mirasın Işıltısı
              </span>
            </div>
            <h1 className="text-base-content relative z-1 text-5xl leading-[1.15] font-bold max-md:text-2xl md:max-w-3xl md:text-balance">
              <span>
              Gelenekten ilham alan, el işçiliğiyle hayat bulan takılar
              </span>
              <svg
                width="223"
                height="12"
                viewBox="0 0 223 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-1.5 left-10 -z-1 max-lg:left-4 max-md:hidden"
              >
                <path
                  d="M1.30466 10.7431C39.971 5.28788 76.0949 3.02 115.082 2.30401C143.893 1.77489 175.871 0.628649 204.399 3.63102C210.113 3.92052 215.332 4.91391 221.722 6.06058"
                  stroke="url(#paint0_linear_10365_68643)"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_10365_68643"
                    x1="19.0416"
                    y1="4.03539"
                    x2="42.8362"
                    y2="66.9459"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.2" stop-color="var(--color-primary)" />
                    <stop
                      offset="1"
                      stop-color="var(--color-primary-content)"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </h1>
            <p className="text-base-content/80 max-w-3xl">
            Anadolu’nun zengin motiflerinden ilham alan tasarımlarımızla geçmişin ruhunu günümüze taşıyoruz. Her parça, ustalığın ve ruhun izlerini taşır.
            </p>

            <a href="#" className="btn btn-primary btn-gradient btn-lg">
            Şimdi Keşfet
              <span className="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
            </a>
          </div>
          <div className="flex gap-6 flex-nowrap overflowy-x-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_50px,_black_calc(100%-50px),transparent_100%)]">
            <GoldTables/>
            <GoldTables/>
            <GoldTables/>
            
           
          </div>
        </div>
      </main>
    </div>
  );
}
