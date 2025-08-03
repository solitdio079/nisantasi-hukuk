export default function Card2({imgSrc, name, role}) {
  return (
    <div className="flex flex-col items-center">
      <div className="avatar -mb-16 z-2">
        <div className="size-32 border-4 border-white rounded-full">
          <img
            src={imgSrc}
            alt="avatar"
          />
        </div>
      </div>
      <div className="card flex flex-col items-center justify-center min-w-60 sm:max-w-sm pt-20">
        <div className="card-body flex flex-col items-center justify-center">
          <h5 className="text-lg font-bold"> {name} </h5>
          <p> {role} </p>
          <div className="card-actions h-5 gap-3">
            <a href="#" className="text-accent">
              <span className="icon-[tabler--brand-facebook] size-5.5"></span>
            </a>
            <a href="#" className="text-primary">
              <span className="icon-[tabler--brand-twitter] size-5.5"></span>
            </a>
            <a href="#" className="text-base-content">
              <span className="icon-[tabler--brand-github] size-5.5"></span>
            </a>
            <a href="#" className="text-pink-500">
              <span className="icon-[tabler--brand-instagram] size-5.5"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
