export default function About2() {
  return (
    <div className="bg-base-200 py-8 sm:py-16 lg:py-24">
      <div className="grid gap-6 lg:grid-cols-2  px-10 lg:px-20 mb-12 motion-translate-y-in-100 motion-blur-in-md">
        <div>
          <div className="space-y-4 mb-12">
            <span className="uppercase text-primary"> about us</span>
            <h2 className="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">
              Building a Legacy of Excellence
            </h2>
            <p className="text-base-content/80 text-xl">
              Our story is a testament to the power of collaboration and
              resilience. Together, we have navigated challenges, celebrated
              milestones, and crafted a narrative of growth and achievement in
              the construction industry.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <div className="card card-border hover:border-accent shadow-none sm:max-w-sm">
              <div className="card-body">
                <h5 className="card-title text-xl">50+ years</h5>
                <p className="mb-4">
                  Bringing architectural visions to life for 50 years.
                </p>
              </div>
            </div>
            <div className="card card-border hover:border-accent shadow-none sm:max-w-sm">
              <div className="card-body">
                <h5 className="card-title text-xl">100+ Projects</h5>
                <p className="mb-4">
                  Delivered precisely with quality commitment.
                </p>
              </div>
            </div>
            <div className="card card-border hover:border-accent shadow-none sm:max-w-sm">
              <div className="card-body">
                <h5 className="card-title text-xl">20+ Awards</h5>
                <p className="mb-4">
                  Recognizing our innovation and dedication.
                </p>
              </div>
            </div>
            <div className="card card-border hover:border-accent shadow-none sm:max-w-sm">
              <div className="card-body">
                <h5 className="card-title text-xl">99% Success</h5>
                <p className="mb-4">
                  Showing our commitment to client satisfaction.
                </p>
              </div>
            </div>
          </div>
          <a href="#" className="btn btn-md btn-primary  btn-gradient">
            Read More
            <span className="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
          </a>
        </div>
        <div>
          <img
            className="rounded-lg"
            src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/about/about-4.png"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3  px-10 lg:px-20">
        <div className="card card-border  shadow-none">
          <div className="card-body">
            <h5 className="card-title text-xl flex gap-4"><span className="icon-[tabler--circle-check] size-6 rtl:rotate-180"></span>Why Choose Us?</h5>
            <p className="mb-4">
              Our project management tools boost collaboration and streamline
              processes.
            </p>
          </div>
        </div>
        <div className="card card-border  shadow-none">
          <div className="card-body">
            <h5 className="card-title text-xl flex gap-4"><span className="icon-[tabler--circle-check] size-6 rtl:rotate-180"></span>Our Vision</h5>
            <p className="mb-4">
            Our project management tools boost collaboration and streamline processes.
            </p>
          </div>
        </div>
        <div className="card card-border  shadow-none">
          <div className="card-body">
            <h5 className="card-title text-xl flex gap-4 items-center"> <span className="icon-[tabler--circle-check] size-6 rtl:rotate-180"></span>Our Team</h5>
            <p className="mb-4">
            Our professionals are dedicated to exceptional results and service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
