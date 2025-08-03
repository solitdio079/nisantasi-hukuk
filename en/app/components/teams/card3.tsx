export default function Card3({imgSrc, name, role}) {
  return (
    <>
      <div className="card border-none sm:max-w-sm">
        <figure>
          <img
            src={imgSrc}
            alt="Watch"
          />
        </figure>
        <div className="card-body  flex flex-row items-center flex-nowrap justify-between">
            <div className="flex flex-col">
            <h5 className="text-lg font-bold"> {name} </h5>
            <p> {role} </p>
            </div>
       
          <div className="card-actions h-5 gap-3">
            <a href="#" className="text-accent">
              <span className="icon-[tabler--brand-facebook] size-5.5"></span>
            </a>
            <a href="#" className="text-primary">
              <span className="icon-[tabler--brand-twitter] size-5.5"></span>
            </a>
            <a href="#" className="text-neutral">
              <span className="icon-[tabler--brand-github] size-5.5"></span>
            </a>
           
          </div>
        </div>
      </div>
    </>
  );
}
