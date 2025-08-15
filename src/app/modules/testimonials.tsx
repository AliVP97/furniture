import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Bang Upin",
    role: "Pedagang Asongan",
    image: "/ellipse-1131-2.png",
    backgroundImage: "/unsplash--hqhx3lbn18-1.png",
    blurImage: "/unsplash--hqhx3lbn18.png",
    quote:
      "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
    rating: "/group-48095424-2.png",
    union: "/union.svg",
  },
  {
    name: "Ibuk Sukijan",
    role: "Ibu Rumah Tangga",
    image: "/ellipse-1131.png",
    backgroundImage: "/unsplash-jaxs8tk5iww-1.png",
    blurImage: "/unsplash-jaxs8tk5iww.png",
    quote:
      "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah",
    rating: "/group-48095424.png",
    union: "/union-1.svg",
  },
  {
    name: "Mpok Ina",
    role: "Karyawan Swasta",
    image: "/ellipse-1131-1.png",
    backgroundImage: "/unsplash-h2-3dl9ylpu-1.png",
    blurImage: "/unsplash-h2-3dl9ylpu-1.png",
    quote: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    rating: "/group-48095424-1.png",
    union: "/union-2.svg",
  },
];

export const Testimonials = () => {
  return (
    <>
      <section className="relative w-full py-8 bg-[#f7f7f7]">
        <h2 className="absolute w-[413px] top-[42px] left-0 [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-[#1e1e1e] text-[42px] text-center tracking-[0] leading-[normal]">
          Our Client Reviews
        </h2>
        <div className="absolute top-0 left-[129px] [font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-[#e58411] text-lg text-center tracking-[3.15px] leading-[normal]">
          TESTIMONIALS
        </div>
      </section>
      {testimonials.map((testimonial, index) => (
        <Card
          key={testimonial.name}
          className={`absolute w-[415px] h-[506px] top-[4439px] ${
            index === 0
              ? "left-[82px]"
              : index === 1
              ? "left-[536px]"
              : "left-[944px]"
          } bg-transparent border-none shadow-none`}
        >
          <CardContent className="p-0">
            <div
              className={`absolute w-[370px] h-[506px] top-0 ${
                index === 0 ? "left-[45px]" : "left-0"
              }`}
            >
              <div
                className={`relative w-[400px] h-[556px] ${
                  index === 0 ? "left-[-13px]" : "left-[-15px]"
                }`}
              >
                <img
                  className="w-[400px] h-[480px] top-[76px] left-0 rounded-[44.39px] blur-[25px] absolute object-cover"
                  alt="Unsplash"
                  src={testimonial.blurImage}
                />
                <img
                  className={`absolute rounded-[18.12px] object-cover ${
                    index === 0
                      ? "w-[370px] h-[476px] top-0 left-[13px]"
                      : "w-[370px] h-[476px] top-0 left-4"
                  }`}
                  alt="Unsplash"
                  src={testimonial.backgroundImage}
                />
                <div
                  className={`absolute w-[336px] h-[239px] top-[219px] ${
                    index === 0 ? "left-[18px]" : "left-[33px]"
                  }`}
                >
                  <div
                    className={`relative w-[334px] h-[239px] bg-[100%_100%]`}
                    style={{ backgroundImage: `url(${testimonial.union})` }}
                  >
                    <div className="absolute w-[50px] h-[55px] top-2 left-[142px]">
                      <div
                        className={`relative w-[76px] h-[76px] -top-2 left-[-13px] bg-cover bg-[50%_50%]`}
                        style={{
                          backgroundImage: `url(/ellipse-1132${
                            index === 1 ? "-1" : ".png"
                          }`,
                        }}
                      >
                        <img
                          className="absolute w-[50px] h-[50px] top-2 left-[13px] object-cover"
                          alt="Ellipse"
                          src={testimonial.image}
                        />
                      </div>
                    </div>
                    <div
                      className={`absolute h-[42px] top-[71px] ${
                        index === 0
                          ? "w-[115px] left-[113px]"
                          : index === 1
                          ? "w-[109px] left-[116px]"
                          : "w-[103px] left-[119px]"
                      }`}
                    >
                      <h3
                        className={`absolute top-0 [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-[#1e1e1e] text-lg text-center tracking-[0] leading-[normal] ${
                          index === 0
                            ? "left-3"
                            : index === 1
                            ? "left-px"
                            : "left-2.5"
                        }`}
                      >
                        {testimonial.name}
                      </h3>
                      <p className="absolute top-7 left-0 opacity-60 [font-family:'Gilroy-Regular-Regular',Helvetica] font-normal text-[#1e1e1e] text-xs text-center tracking-[0] leading-[normal] whitespace-nowrap">
                        {testimonial.role}
                      </p>
                    </div>
                    <p className="absolute w-[252px] top-[135px] left-[42px] opacity-80 [font-family:'Gilroy-Regular-Regular',Helvetica] font-normal text-[#1e1e1e] text-sm text-center tracking-[0] leading-[normal]">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <img
                      className="absolute w-[90px] h-3.5 top-52 left-[122px]"
                      alt="Group"
                      src={testimonial.rating}
                    />
                  </div>
                </div>
              </div>
            </div>
            {index !== 1 && (
              <Button
                className={`absolute w-[89px] h-[89px] top-[131px] p-0 bg-transparent border-none shadow-none hover:bg-transparent ${
                  index === 0 ? "left-0" : "left-[325px]"
                }`}
              >
                <img
                  className="w-[89px] h-[89px]"
                  alt="Frame"
                  src={
                    index === 0
                      ? "/frame-48095401-1.svg"
                      : "/frame-48095395-2.svg"
                  }
                />
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </>
  );
};
