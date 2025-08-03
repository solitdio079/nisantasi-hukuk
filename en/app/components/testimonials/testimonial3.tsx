import ReverseScroll from "./reverseScroll";
import ScrollCards from "./scrollCards";

export default function Testimonial3() {
  return (
    <>
      <div className="bg-base-200 py-8 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
          <div className="relative flex flex-col items-center justify-center mx-auto mb-12 w-fit sm:mb-16 lg:mb-24">
          <span className=" uppercase text-primary text-center">
              Testimonial
            </span>
            <h2 className="text-base-content text-center text-2xl font-bold md:text-3xl lg:text-4xl">
            Words of praise from others about our presence
            </h2>
          
          </div>
          <div className="flex flex-col gap-12">
          <ScrollCards/>
          <ReverseScroll/>
          </div>

         
        </div>
      </div>
    </>
  );
}
