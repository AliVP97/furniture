import { Button } from "@/components/ui/button";

export const Materials = () => {
  return (
    <>
      <section className="absolute w-[690px] h-[591px] top-[3504px] left-[972px]">
        <img
          className="absolute w-[468px] h-[523px] top-[68px] left-0 rounded-[49px] blur-[25px] object-cover"
          alt="Rectangle"
          src="/rectangle-1446-1.png"
        />
        <div className="absolute w-[495px] h-[422px] top-0 left-[195px] bg-[#f7f7f7] rounded-[20px] rotate-180" />
        <img
          className="absolute w-[445px] h-[445px] top-[66px] left-[23px] rounded-[20px] object-cover"
          alt="Rectangle"
          src="/rectangle-1446-1.png"
        />
      </section>
      <div className="absolute w-[223px] h-[250px] top-[3431px] left-[730px]">
        <div className="relative w-[276px] h-[300px] left-[-27px]">
          <img
            className="absolute w-[276px] h-[283px] top-[17px] left-0"
            alt="Rectangle"
            src="/rectangle-1448.png"
          />
          <img
            className="absolute w-[223px] h-[229px] top-0 left-[27px]"
            alt="Rectangle"
            src="/rectangle-1450.png"
          />
        </div>
      </div>
      <div className="absolute w-[223px] h-[338px] top-[3707px] left-[730px]">
        <div className="relative w-[277px] h-[401px] top-[-13px] left-[-27px] bg-[url(/rectangle-1448-1.png)] bg-[100%_100%]">
          <img
            className="absolute w-[223px] h-[317px] top-[13px] left-[27px]"
            alt="Rectangle"
            src="/rectangle-1450-1.png"
          />
        </div>
      </div>
      <h2 className="absolute w-[413px] top-[3596px] left-20 [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-[#1e1e1e] text-[42px] tracking-[0] leading-[normal]">
        Very Serious Materials For Making Furniture
      </h2>
      <p className="absolute w-[556px] top-[3772px] left-20 opacity-80 [font-family:'Gilroy-Regular-Regular',Helvetica] font-normal text-[#1e1e1e] text-lg tracking-[0] leading-[33.3px]">
        Because panto was very serious about designing furniture for our
        environment, using a very expensive and famous capital but at a
        relatively low price
      </p>
      <div className="absolute w-[123px] h-[26px] top-[3896px] left-20">
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
      <div className="absolute top-[3554px] left-20 [font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-[#e58411] text-lg tracking-[3.15px] leading-[normal]">
        MATERIALS
      </div>
    </>
  );
};
