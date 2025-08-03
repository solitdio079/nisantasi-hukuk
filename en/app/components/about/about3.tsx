export default function About3() {
  return (
    <div className="bg-base-200 py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
        <div className="flex flex-col gap-12">
          <div className="space-y-4 text-center">
            <span className="badge badge-soft badge-primary rounded-xl">
              About Us
            </span>
            <p className="text-base-content/80 text-xl">
              Our achievement story stands as a powerful testament to teamwork
              and perseverance. United, we have faced challenges, celebrated
              victories, and woven a narrative of growth and success.
            </p>
            <a href="#" className="btn btn-primary btn-lg btn-gradient">
              Read More
              <span className="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
            </a>
          </div>

          <nav
            className="tabs tabs-bordered  justify-center mb-6"
            aria-label="Tabs"
            role="tablist"
            aria-orientation="horizontal"
          >
            <button
              type="button"
              className="tab active-tab:tab-active active"
              id="tabs-center-item-1"
              data-tab="#tabs-center-1"
              aria-controls="tabs-center-1"
              role="tab"
              aria-selected="true"
            >
              Our Story
            </button>
            <button
              type="button"
              className="tab active-tab:tab-active"
              id="tabs-center-item-2"
              data-tab="#tabs-center-2"
              aria-controls="tabs-center-2"
              role="tab"
              aria-selected="false"
            >
              Our Mission
            </button>
            <button
              type="button"
              className="tab active-tab:tab-active"
              id="tabs-center-item-3"
              data-tab="#tabs-center-3"
              aria-controls="tabs-center-3"
              role="tab"
              aria-selected="false"
            >
              Our Vision
            </button>
          </nav>

          <div className="mt-3">
            <div
              id="tabs-center-1"
              role="tabpanel"
              aria-labelledby="tabs-center-item-1"
              className="grid md:grid-cols-2 gap-12 items-center justify-center"
            >
              <div>
                <img src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/about/about-12.png" />
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="text-xl lg:text-2xl">
                  Our story begins with a passion for excellence
                </h2>
                <p className="text-base-content/80">
                  We started with a small team of dedicated professionals
                  committed to making a difference. Through years of hard work
                  and perseverance, we've grown into a community of innovators
                  and problem-solvers. Our journey has been marked by continuous
                  learning, adaptation, and a relentless pursuit of quality in
                  everything we do.
                </p>
                <a href="#" className="btn max-w-52 btn-primary btn-lg btn-gradient">
                  Learn more
                  <span className="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
                </a>
              </div>
            </div>
            <div
              id="tabs-center-2"
              role="tabpanel"
              aria-labelledby="tabs-center-item-2"
              className="hidden grid md:grid-cols-2 gap-12 items-center justify-center"
            >
              <div>
                <img src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/about/about-13.png" />
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="text-xl lg:text-2xl">
                  We're all about creating awesome resources that help you
                  succeed!
                </h2>
                <p className="text-base-content/80">
                  We understand the immense importance of high-quality
                  educational materials in fostering effective learning
                  experiences. That's why we are deeply committed to supporting
                  educators in their vital roles. Our mission is to provide our
                  users with exceptional resources, comprehensive tools, and
                  steadfast support, ensuring they have everything they need to
                  thrive in their teaching endeavors. We believe that by
                  empowering educators with the best materials and assistance,
                  we can significantly enhance the learning journey for students
                  everywhere.
                </p>
                <a href="#" className="btn max-w-52 btn-primary btn-lg btn-gradient">
                  Get started
                  <span className="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
                </a>
              </div>
            </div>
            <div
              id="tabs-center-3"
              role="tabpanel"
              aria-labelledby="tabs-center-item-3"
              className="hidden grid md:grid-cols-2 gap-12 items-center justify-center"
            >
              <div>
                <img src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/about/about-2.png" />
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="text-xl lg:text-2xl">
                  Our vision is to transform how people learn and grow
                </h2>
                <p className="text-base-content/80">
                  We envision a world where quality education is accessible to
                  everyone, regardless of their background or circumstances. We
                  strive to create innovative solutions that break down barriers
                  to learning and enable individuals to reach their full
                  potential. By combining cutting-edge technology with
                  human-centered design, we aim to build a future where
                  education is engaging, effective, and empowering for all.
                </p>
                <a href="#" className="btn max-w-52 btn-primary btn-lg btn-gradient">
                  Discover more
                  <span className="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
