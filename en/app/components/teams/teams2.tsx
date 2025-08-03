import Card2 from "./card2";

export default function Teams2() {
  return (
    <>
      <div className="bg-base-200 py-8 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
          <div className="flex flex-col gap-12">
            <div className="space-y-4 text-center">
              <span className="badge badge-soft badge-primary rounded-xl">
                Creative Team
              </span>
              <h2 className="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl ">
                Meet the Brilliant Minds Behind Our Success
              </h2>
              <p className="text-base-content/80 text-xl">
                A passionate team of innovators, creators, and problem-solvers
                working together to make an impact.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:grid-cols-5 mt-12">
           <Card2 imgSrc={ "https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png"} name={"Phillip Rothman"} role={"Founder & CEO"} />
           <Card2 imgSrc={ "https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png"}  name={"James Kenter"} role={"Engineering Manager"} />
           <Card2 imgSrc={ "https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png"}  name={"Alena Lubin"} role={"Frontend Developer"} />
           <Card2 imgSrc={ "https://cdn.flyonui.com/fy-assets/avatar/avatar-4.png"}  name={"Cristofer Kenter"} role={"Product Designer"} />
           <Card2 imgSrc={ "https://cdn.flyonui.com/fy-assets/avatar/avatar-5.png"}  name={"Carter Saris"} role={"UX Researcher"} />
          </div>
        </div>
      </div>
    </>
  );
}
