import logo from "../../img/icons/logo.png";

export default function BrandLogo() {
  return (
    <div className="flex items-center gap-2">
      <img
        src={logo}
        alt="Chill Logo"
        className="w-[29px] h-[24px] md:w-[50px] md:h-[44px]"
      />

      <span
        className="
          w-[63px]
          h-[24px]
          md:w-[109px]
          md:h-[44px]
          font-brand
          font-normal
          text-[28px]
          md:text-[50px]
          leading-[110%]
          tracking-[0]
          text-white
          flex
          items-center
          justify-center
          text-center
          select-none
        "
      >
        CHILL
      </span>
    </div>
  );
}
