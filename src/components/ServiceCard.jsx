function ServiceCard({ icon, title, description }) {
  return (
    <div className="group h-80 w-full [perspective:1000px]">
      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* FRONT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-[#E0E0E0] bg-white p-8 text-center shadow-sm [backface-visibility:hidden]">

          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#42A5F5]/10" />

          <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F7FA] text-3xl">
            {icon}
          </div>

          <h3 className="relative text-xl font-bold text-[#0A183F]">
            {title}
          </h3>

          <p className="relative mt-3 text-sm font-medium text-[#0D47A1]">
            Hover to explore →
          </p>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 flex flex-col justify-center rounded-3xl bg-[#0D47A1] p-8 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">

          <div className="mb-4 text-3xl">
            {icon}
          </div>

          <h3 className="text-xl font-bold">
            {title}
          </h3>

          <p className="mt-4 leading-7 text-white/85">
            {description}
          </p>

        </div>

      </div>
    </div>
  );
}

export default ServiceCard;