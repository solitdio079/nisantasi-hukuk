import aboutImg from "./about2.jpg"

export default function About2() {
  return (
    <div className="bg-base-200 py-8 sm:py-16 lg:py-24">
      <div className="grid gap-6 lg:grid-cols-2  px-10 lg:px-20 mb-12 motion-translate-y-in-100 motion-blur-in-md">
        <div>
          <div className="space-y-4 mb-12">
            <span className="uppercase text-primary">Hakkımızda</span>
            <h2 className="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">
            Nişantaşı Hukuk Bürosu ve Danışmanlık
            </h2>
            <p className="text-base-content/80 text-xl">
            Bireysel ve kurumsal müvekkillerine yüksek standartlarda hukuki hizmet sunmak amacıyla İstanbul’un kalbinde kurulmuştur.
            Alanında uzman ve deneyimli avukat kadromuzla; ceza hukuku, ticaret hukuku, aile hukuku, iş hukuku, icra-iflas hukuku ve gayrimenkul hukuku başta olmak üzere birçok alanda danışmanlık ve dava süreçlerini titizlikle yürütmekteyiz.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <div className="card card-border hover:border-accent shadow-none sm:max-w-sm intersect:motion-preset-slide-right intersect:motion-delay-[400ms] intersect:motion-ease-spring-bouncier">
              <div className="card-body">
                <h5 className="card-title text-xl">Ceza Hukuku Hizmetleri</h5>
                <p className="mb-4">
                Suç isnadıyla karşılaşan bireylerin savunulması, mağdurların haklarının korunması, soruşturma ve kovuşturma süreçlerinin takibi.
                </p>
              </div>
            </div>
            <div className="card card-border hover:border-accent shadow-none sm:max-w-sm intersect:motion-preset-slide-right intersect:motion-delay-[600ms] intersect:motion-ease-spring-bouncier">
              <div className="card-body">
                <h5 className="card-title text-xl">İş ve Sosyal Güvenlik Hukuku</h5>
                <p className="mb-4">
                İşçi-işveren ilişkilerinde doğan uyuşmazlıkların çözümü, işe iade davaları, tazminat hesaplamaları, SGK işlemleri.
                </p>
              </div>
            </div>
            <div className="card card-border hover:border-accent shadow-none sm:max-w-sm intersect:motion-preset-slide-right intersect:motion-delay-[800ms] intersect:motion-ease-spring-bouncier">
              <div className="card-body">
                <h5 className="card-title text-xl"> Miras Hukuku</h5>
                <p className="mb-4">
                Miras paylaşımı, vasiyetname hazırlanması, veraset ilamı alınması ve miras davalarının yürütülmesi.
                </p>
              </div>
            </div>
            <div className="card card-border hover:border-accent shadow-none sm:max-w-sm intersect:motion-preset-slide-right intersect:motion-delay-[1000ms] intersect:motion-ease-spring-bouncier">
              <div className="card-body">
                <h5 className="card-title text-xl">Sözleşmeler Hukuku</h5>
                <p className="mb-4">
                Her türlü sözleşmenin hazırlanması, gözden geçirilmesi ve olası uyuşmazlıklarda hukuki destek sağlanması.
                </p>
              </div>
            </div>
          </div>
         
        </div>
        <div>
          <img
           
            src={aboutImg}
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3  px-10 lg:px-20">
        <div className="card card-border  shadow-none intersect:motion-preset-slide-right intersect:motion-delay-[400ms] intersect:motion-ease-spring-bouncier">
          <div className="card-body">
            <h5 className="card-title text-xl flex gap-4"><span className="icon-[tabler--circle-check] size-6 rtl:rotate-180"></span>Neden Bizi Tercih Etmelisiniz?</h5>
            <p className="mb-4">
              <ul>
                <li>Uzman ve deneyimli avukat kadrosu</li>
                <li>Hızlı, şeffaf ve çözüm odaklı hizmet</li>
                <li>Etik değerlere ve gizliliğe bağlılık</li>
                <li>Müvekkil memnuniyetini ön planda tutan yaklaşım</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="card card-border  shadow-none intersect:motion-preset-slide-right intersect:motion-delay-[600ms] intersect:motion-ease-spring-bouncier">
          <div className="card-body">
            <h5 className="card-title text-xl flex gap-4"><span className="icon-[tabler--circle-check] size-6 rtl:rotate-180"></span>Vizyonumuz</h5>
            <p className="mb-4">
            Hukukun üstünlüğünü savunarak, güvenilir ve yenilikçi bir hukuk bürosu olarak ulusal düzeyde örnek gösterilen bir marka olmak.
            </p>
          </div>
        </div>
        <div className="card card-border  shadow-none intersect:motion-preset-slide-right intersect:motion-delay-[800ms] intersect:motion-ease-spring-bouncier">
          <div className="card-body">
            <h5 className="card-title text-xl flex gap-4 items-center"> <span className="icon-[tabler--circle-check] size-6 rtl:rotate-180"></span>Misyonumuz</h5>
            <p className="mb-4">
            Müvekkillerimizin haklarını en etkin şekilde korumak, her alanda kaliteli ve erişilebilir hukuki hizmet sunmak.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
