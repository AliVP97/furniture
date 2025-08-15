import { MoveRightIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export const Experience = () => {
  return (
    <>
      <section className="flex w-full flex-col gap-12 p-12 md:flex-row md:gap-20 md:px-0 md:py-60">
        <div className="relative min-h-[300px] md:h-[674px] md:w-1/3 md:max-w-[690px]">
          <div className="absolute end-56 top-0 hidden h-[422px] w-[495px] rounded-[20px] bg-[#f7f7f7]" />
          <div className="absolute end-0 top-[138px] hidden h-[300px] w-[494px] rounded-[20px] bg-[#f7f7f7]" />
          <Image
            className="absolute top-8 rounded-[50px] object-cover opacity-50 blur-[25px] md:end-[88px] md:top-[118px] md:h-[424px] md:w-[556px]"
            height={424}
            width={556}
            alt="Rectangle"
            src="/experience-banner.jpg"
          />
          <Image
            className="absolute rounded-[20px] object-cover md:end-[60px] md:top-[66px] md:h-[446px] md:w-[630px]"
            height={446}
            width={630}
            alt="Rectangle"
            src="/experience-banner.jpg"
          />
        </div>
        <div className="flex flex-col gap-5 md:pt-20">
          <div className="text-lg font-semibold text-[#e58411]">
            EXPERIENCES
          </div>
          <div className="w-full text-2xl font-bold text-[#1e1e1e] md:w-[412px] md:text-[42px]">
            We Provide You The Best Experience
          </div>
          <p className="max-w-[556px] leading-[185%] font-normal text-[#1e1e1e] opacity-80 md:text-lg">
            You don&apos;t have to worry about the result because all of these
            interiors are made by people who are professionals in their fields
            with an elegant and lucurious style and with premium quality
            materials
          </p>
          <div className="flex items-center gap-3 text-[#e58311]">
            <Button variant="link" className="p-0 text-sm font-medium">
              More Info
            </Button>
            <MoveRightIcon />
          </div>
        </div>
      </section>
    </>
  );
};
