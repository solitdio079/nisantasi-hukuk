import Card3 from "./card3";

export default function Teams3(){
    return (<>
     <div className="py-8 sm:py-16 lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
      <div
        id="multi-slide"
        data-carousel='{ "loadingClasses": "opacity-0", "slidesQty": { "xs": 1, "md": 2 } }'
        className="relative flex w-full gap-12 max-lg:flex-col md:gap-16 lg:items-center lg:gap-24"
      >
        <div>
          <div className="space-y-4">
            <p className="text-primary text-sm font-medium uppercase">Our Team</p>
            <h2 className="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">Brains behind our success team</h2>
            <p className="text-base-content/80 text-xl">We have a diverse group of talented individuals who bring unique skills and perspectives to our projects.

</p>
          </div>
          <div className="mt-10 flex gap-4">
            <button
              className="btn btn-square btn-sm carousel-prev btn-primary carousel-disabled:opacity-100 carousel-disabled:btn-outline relative hover:text-white"
              disabled
            >
              <span className="icon-[tabler--arrow-left] size-5"></span>
            </button>
            <button
              className="btn btn-square btn-sm carousel-next btn-primary carousel-disabled:opacity-100 carousel-disabled:btn-outline relative hover:text-white"
            >
              <span className="icon-[tabler--arrow-right] size-5"></span>
            </button>
          </div>
        </div>
        <div className="carousel rounded-box">
          <div className="carousel-body gap-6 opacity-0">
           
            <div className="carousel-slide">
              <Card3 imgSrc={"https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/team/team-18.png"} name={"Cristofer Kenter"} role={"UX Researcher"}/>
            </div>
           
            <div className="carousel-slide">
             <Card3 imgSrc={"https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/team/team-20.png"} name={"Gustavo Dokidis"} role={"Sales Lead"}/>
            </div>
           
            <div className="carousel-slide">
              <Card3 imgSrc={"https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/team/team-21.png"} name={"Alena Lubin"} role={"Product Manager"}/>
            </div>

            <div className="carousel-slide">
              <Card3 imgSrc={"https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/team/team-19.png"} name={"Maria Donin"} role={"Customer Support"}/>
            </div>

           
            
            
          </div>
        </div>
      </div>
    </div>
  </div>
    </>)
}