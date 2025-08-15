import { ChevronDownIcon, SearchIcon } from "lucide-react";

const navigationItems = [
  { label: "Furniture", hasDropdown: true },
  { label: "Shop" },
  { label: "About Us" },
  { label: "Contact" },
];

export const Hero = () => {
  return (
    <section className="relative min-h-[880px] w-full bg-[url(/header-banner.jpg)] bg-cover bg-center px-12 text-white md:min-h-[1084] md:px-0">
      {/* Overlay Layer */}
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(180deg,rgba(255,255,255,0)_86.13%,#fff_100%)] p-5" />
      {/* Top Bar */}
      <nav className="flex items-start justify-between py-10 md:px-20">
        {/* Logo */}
        <div className="text-[28px] leading-[normal] font-bold tracking-[0.28px]">
          Panto
        </div>
        {/* Navigation */}
        <div className="mx-auto hidden w-[478px] items-center justify-between md:flex">
          <div className="flex items-center justify-center gap-2">
            <div className="mt-[-1.00px] w-fit text-lg leading-[normal] font-medium tracking-[0]">
              Furniture
            </div>
            <ChevronDownIcon className="" />
          </div>
          {navigationItems.slice(1).map((item, index) => (
            <div
              key={item.label}
              className={"text-lg leading-[normal] font-medium"}
            >
              {item.label}
            </div>
          ))}
        </div>
        {/* Shopping Bag */}
        <div className="relative">
          <img className="" alt="cart" src="/icons/bag.png" />
          <div className="absolute end-0 top-0.5 rounded-full bg-amber-600 p-0.5">
            0
          </div>
        </div>
      </nav>
      {/* Main Heading */}
      <h1 className="mx-auto mt-11 mb-4 max-w-[860px] text-center text-[50px] leading-[130%] font-bold tracking-tight md:text-[80px]">
        Make Your Interior More Minimalistic &amp; Modern
      </h1>
      {/* Subtitle */}
      <p className="mx-auto mb-11 max-w-[606px] text-center leading-[160%] font-normal md:text-2xl">
        Turn your room with panto into a lot more minimalist and modern with
        ease and speed
      </p>
      {/* SearchIcon Bar */}
      <div className="mx-auto flex w-[342px] items-center justify-between rounded-[42px] border border-solid border-[#ffffff99] bg-[#ffffff26] py-2 ps-5 pe-2 backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
        <input
          className="bg-transparent text-lg placeholder:font-normal placeholder:text-white"
          name="search"
          placeholder="Search furniture"
        />
        <SearchIcon
          className="rounded-full bg-amber-600 p-3"
          width={40}
          height={40}
        />
      </div>

      {/* Decorative Elements */}
      {/* <div className="rounded-2xl border-[0.86px] border-solid border-[#ffffff99] bg-[#ffffff33] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
        <div className="rotate-180 rounded-[5.14px] bg-white" />
      </div>
      <div className="rounded-2xl border-[0.86px] border-solid border-[#ffffff99] bg-[#ffffff33] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
        <div className="rotate-180 rounded-[5.14px] bg-white" />
      </div>
      <div className="rounded-[18.5px] border-[0.86px] border-solid border-[#ffffff99] bg-[#ffffff33] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
        <div className="rotate-180 rounded-[5.95px] bg-white" />
      </div> */}
    </section>
  );
};
