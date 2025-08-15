import { Button } from "@/components/ui/button";

export const Experience = () => {
  return (
    <>
      <section className="absolute w-[728px] h-[591px] top-[2650px] left-[-65px]">
        <img
          className="absolute w-[625px] h-[523px] top-[68px] left-[65px] rounded-[49px] blur-[25px] object-cover"
          alt="Rectangle"
          src="/rectangle-1447.png"
        />
        <div className="absolute w-[495px] h-[422px] top-0 left-0 bg-[#f7f7f7] rounded-[20px]" />
        <div className="absolute w-[495px] h-[301px] top-[138px] left-[233px] bg-[#f7f7f7] rounded-[20px]" />
        <img
          className="absolute w-[602px] h-[445px] top-[66px] left-[65px]"
          alt="Rectangle"
          src="/rectangle-1446.png"
        />
      </section>
      <div className="absolute w-[413px] top-[2774px] left-[743px] [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-[#1e1e1e] text-[42px] tracking-[0] leading-[normal]">
        We Provide You The Best Experience
      </div>
      <p className="absolute w-[556px] top-[2898px] left-[743px] opacity-80 [font-family:'Gilroy-Regular-Regular',Helvetica] font-normal text-[#1e1e1e] text-lg tracking-[0] leading-[33.3px]">
        You don&apos;t have to worry about the result because all of these
        interiors are made by people who are professionals in their fields with
        an elegant and lucurious style and with premium quality materials
      </p>
      <div className="absolute w-[123px] h-[26px] top-[3055px] left-[743px]">
        <Button
          variant="link"
          className="p-0 h-auto text-[#e58311] [font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-sm tracking-[0] leading-[25.9px]"
        >
          More Info
        </Button>
        <img
          className="absolute w-12 h-6 top-px left-[73px]"
          alt="Grommet icons form"
          src="/grommet-icons-form-next-link.svg"
        />
      </div>
      <div className="absolute top-[2732px] left-[743px] [font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-[#e58411] text-lg tracking-[3.15px] leading-[normal]">
        EXPERIENCES
      </div>
    </>
  );
};
