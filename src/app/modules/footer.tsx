import { Button } from "@/components/ui/button";

const footerSections = [
  {
    title: "Services",
    items: ["Email Marketing", "Campaigns", "Branding"],
  },
  {
    title: "Furniture",
    items: ["Beds", "Chair", "All"],
  },
  {
    title: "Follow Us",
    items: [
      { text: "Facebook", icon: "/001-facebook.png" },
      { text: "Twitter", icon: "/003-twitter.png" },
      { text: "Instagram", icon: "/004-instagram.png" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="relative w-full py-12 bg-[#f7f7f7] flex flex-col items-center">
      <div className="relative w-[1442px] h-[464px] -top-px -left-px bg-[#f7f7f7]">
        <div className="absolute w-[1070px] h-6 top-[383px] left-[189px]">
          <p className="absolute top-0.5 left-0 opacity-50 [font-family:'DM_Sans',Helvetica] font-normal text-[#1e2832] text-[15px] tracking-[-0.20px] leading-[normal]">
            Copyright © 2021
          </p>
          <Button
            variant="link"
            className="absolute top-0 left-[797px] opacity-80 [font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-[#1e1e1e] text-[15px] tracking-[0] leading-6 p-0 h-auto"
          >
            Terms &amp; Conditions
          </Button>
          <Button
            variant="link"
            className="absolute top-0 left-[970px] opacity-80 [font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-[#1e1e1e] text-[15px] tracking-[0] leading-6 p-0 h-auto"
          >
            Privacy Policy
          </Button>
        </div>
        <div className="absolute w-[1064px] h-[146px] top-[119px] left-[189px]">
          <div className="w-[293px] h-[146px] absolute top-0 left-0">
            <h3 className="w-20 h-[35px] absolute top-0 left-0 text-[#1e1e1e] [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-[28px] tracking-[0.28px] leading-[normal]">
              Panto
            </h3>
            <p className="absolute w-[293px] top-[63px] left-0 opacity-80 [font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-[#1e1e1e] text-[15px] tracking-[0] leading-6">
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
          </div>
          {footerSections.map((section, sectionIndex) => (
            <div
              key={section.title}
              className={`absolute w-[133px] h-[146px] top-0 ${
                sectionIndex === 0
                  ? "left-[445px]"
                  : sectionIndex === 1
                  ? "left-[688px]"
                  : "left-[931px]"
              }`}
            >
              <h4 className="absolute -top-px left-0 [font-family:'DM_Sans',Helvetica] font-normal text-[#f6973f] text-[17px] tracking-[-0.23px] leading-[normal]">
                {section.title}
              </h4>
              {section.items.map((item, itemIndex) => (
                <div
                  key={typeof item === "string" ? item : item.text}
                  className={`absolute top-[${
                    41 + itemIndex * 40
                  }px] left-0 flex items-center gap-2`}
                >
                  {typeof item === "object" && (
                    <img
                      className={`w-${
                        item.icon.includes("facebook") ? "2.5" : "5"
                      } h-${
                        item.icon.includes("facebook")
                          ? "5"
                          : item.icon.includes("twitter")
                          ? "4"
                          : "5"
                      }`}
                      alt={`Element ${item.text.toLowerCase()}`}
                      src={item.icon}
                    />
                  )}
                  <Button
                    variant="link"
                    className={`opacity-80 [font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-[#1e1e1e] text-[15px] tracking-[0] leading-6 p-0 h-auto ${
                      typeof item === "object" ? "" : "left-0"
                    }`}
                  >
                    {typeof item === "string" ? item : item.text}
                  </Button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
