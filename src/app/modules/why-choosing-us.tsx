import { MoveRightIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "Luxury facilities",
    description:
      "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
  },
  {
    title: "Affordable Price",
    description:
      "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.",
  },
  {
    title: "Many Choices",
    description:
      "We provide many unique work space choices so that you can choose the workspace to your liking.",
  },
];

export const WhyChoosingUs = () => {
  return (
    <section className="mx-auto flex w-full flex-col items-start justify-center gap-16 px-12 py-16 md:flex-row md:items-center md:gap-[102px] md:px-20 md:py-[120px]">
      <h2 className="w-full text-[32px] leading-[normal] font-bold md:w-[242px] md:text-[42px]">
        Why Choosing Us
      </h2>
      <div className="flex w-fit flex-col gap-7 overflow-x-auto md:flex-row">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className={`border-none bg-transparent shadow-none`}
          >
            <CardContent className="flex w-full flex-col space-y-3.5 p-0 md:w-[284px]">
              <h3 className="mb-5 text-2xl leading-[normal] font-bold">
                {feature.title}
              </h3>
              <p className="text-base leading-[185%] font-normal">
                {feature.description}
              </p>
              <a
                className="flex items-center space-x-4 text-[#e58311]"
                href="#"
              >
                <span className="text-sm font-medium">More Info</span>
                <MoveRightIcon />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
