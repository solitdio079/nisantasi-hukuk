export default function Testimonial1(){
    return (<>
    <div className="py-8 sm:py-16 lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        id="multi-slide"
        data-carousel='{ "loadingClasses": "opacity-0", "slidesQty": { "xs": 1, "md": 2 } }'
        className="relative flex w-full gap-12 max-lg:flex-col md:gap-16 lg:items-center lg:gap-24"
      >
        <div>
          <div className="space-y-4">
            <p className="text-primary text-sm font-medium uppercase">Real Customers</p>
            <h2 className="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">Customers Feedback</h2>
            <p className="text-base-content/80 text-xl">From career changes to dream jobs, here's how FlyonUI helped.</p>
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
              <div className="card card-border hover:border-primary transition-border h-full shadow-none duration-300">
                
                <div className="card-body gap-5">
                 
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="size-10 rounded-full">
                        <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-17.png" alt="Craig Bator" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base-content font-medium">Craig Bator</h4>
                      <p className="text-base-content/80 text-sm">
                        CEO & Co Founder at
                        <span className="text-base-content font-semibold">Zendesk</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <span className="icon-[tabler--star-filled] text-warning size-6 shrink-0"></span>
                    <span className="icon-[tabler--star-filled] text-warning size-6 shrink-0"></span>
                    <span className="icon-[tabler--star-filled] text-warning size-6 shrink-0"></span>
                    <span className="icon-[tabler--star-filled] text-warning size-6 shrink-0"></span>
                    <span className="icon-[tabler--star-filled] text-warning size-6 shrink-0"></span>
                  </div>
                 
                  <p className="text-base-content/80">
                    FlyonUI has made designing my web applications effortless. The components are easy to customize and
                    integrate seamlessly!
                  </p>
                </div>
              </div>
            </div>
           
            <div className="carousel-slide">
              <div className="card card-border hover:border-primary transition-border h-full shadow-none duration-300">
               
                <div className="card-body gap-5">
                 
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="size-10 rounded-full">
                        <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-5.png" alt="Craig Bator" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base-content font-medium">Martin Dorwart</h4>
                      <p className="text-base-content/80 text-sm">
                        Product manager at
                        <span className="text-base-content font-semibold">Orbit</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <span className="icon-[tabler--star-filled] text-warning size-6 shrink-0"></span>
                    <span className="icon-[tabler--star-filled] text-warning size-6 shrink-0"></span>
                    <span className="icon-[tabler--star-filled] text-warning size-6 shrink-0"></span>
                    <span className="icon-[tabler--star-filled] text-warning size-6 shrink-0"></span>
                    <span className="icon-[tabler--star-half-filled] text-warning size-6 shrink-0"></span>
                  </div>
                  
                  <p className="text-base-content/80">
                    With FlyonUI, I can easily track my investments and see how they.re performing in real-time.
                  </p>
                </div>
              </div>
            </div>
           
            <div className="carousel-slide">
              <div className="card card-border hover:border-primary transition-border h-full shadow-none duration-300">
               
                <div className="card-body gap-5">
                 
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="size-10 rounded-full">
                        <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png" alt="Alexandra Lee" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base-content font-medium">Alexandra Lee</h4>
                      <p className="text-base-content/80 text-sm">
                        Lead Developer at
                        <span className="text-base-content font-semibold">TechNova</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <span className="icon-[tabler--star-filled] text-warning size-6 shrink-0"></span>
                    <span className="icon-[tabler--star-filled] text-warning size-6 shrink-0"></span>
                    <span className="icon-[tabler--star-filled] text-warning size-6 shrink-0"></span>
                    <span className="icon-[tabler--star-filled] text-warning size-6 shrink-0"></span>
                    <span className="icon-[tabler--star-filled] text-warning size-6 shrink-0"></span>
                  </div>
                  
                  <p className="text-base-content/80">
                    FlyonUI's components saved us so much time! The responsive designs and intuitive interface made our
                    development process faster and more efficient.
                  </p>
                </div>
              </div>
            </div>

           
            <div className="carousel-slide">
              <div className="card card-border hover:border-primary transition-border h-full shadow-none duration-300">
               
                <div className="card-body gap-5">
                 
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="size-10 rounded-full">
                        <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-12.png" alt="Jason Wu" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base-content font-medium">Jason Wu</h4>
                      <p className="text-base-content/80 text-sm">
                        Product Designer at
                        <span className="text-base-content font-semibold">InnovateX</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <span className="icon-[tabler--star-filled] text-warning size-6 shrink-0"></span>
                    <span className="icon-[tabler--star-filled] text-warning size-6 shrink-0"></span>
                    <span className="icon-[tabler--star-filled] text-warning size-6 shrink-0"></span>
                    <span className="icon-[tabler--star-filled] text-warning size-6 shrink-0"></span>
                    <span className="icon-[tabler--star-filled] text-warning size-6 shrink-0"></span>
                  </div>
                  
                  <p className="text-base-content/80">
                    FlyonUI’s design library helped us scale our UI design efforts while maintaining a consistent,
                    professional look. Couldn’t have asked for a better tool!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>)
}