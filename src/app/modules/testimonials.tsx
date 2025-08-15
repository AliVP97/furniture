import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Bang Upin",
    role: "Pedagang Asongan",
    image: "/reviews/Bang Upin profile.jpg",
    backgroundImage: "/reviews/Bang Upin.jpg",
    quote:
      "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
    rating: 4,
  },
  {
    name: "Ibuk Sukijan",
    role: "Ibu Rumah Tangga",
    image: "/reviews/Ibuk Sukijan profile.jpg",
    backgroundImage: "/reviews/Ibuk Sukijan.jpg",
    quote:
      "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah",
    rating: 4,
  },
  {
    name: "Mpok Ina",
    role: "Karyawan Swasta",
    image: "/reviews/Mpok Ina profile.jpg",
    backgroundImage: "/reviews/Mpok Ina.jpg",
    quote: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    rating: 4,
  },
];

export const Testimonials = () => {
  return (
    <section className="relative w-full pt-[240px]">
      <h2 className="mb-5 text-center text-lg font-semibold text-[#e58411]">
        TESTIMONIALS
      </h2>
      <div className="mb-[60px] text-center text-[42px] font-bold">
        Our Client Reviews
      </div>
      <div className="relative mx-auto max-w-[1286px]">
        <div className="relative mx-auto flex w-full snap-x snap-proximity items-center gap-10 overflow-x-auto px-12 pb-[240px] md:snap-none">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className={"snap-center border-none shadow-none"}
            >
              <CardContent className="relative h-[476px] w-[370px] p-0">
                <Image
                  className={
                    "absolute inset-x-0 bottom-[-30px] mx-auto h-[380px] w-[300px] rounded-[44px] object-cover opacity-40 blur-[50px]"
                  }
                  width={300}
                  height={380}
                  alt="background blur"
                  src={testimonial.backgroundImage}
                />
                <Image
                  className={
                    "absolute h-[476px] w-[370px] rounded-[18px] object-cover"
                  }
                  width={370}
                  height={476}
                  alt="background"
                  src={testimonial.backgroundImage}
                />
                <div className="absolute bottom-0 m-[18px] flex flex-col items-center rounded-[18px] bg-white p-[18px] pt-[38px]">
                  <div className="absolute top-[-32px] h-[66px] w-[66px] rounded-full bg-white object-cover" />
                  <Image
                    className="absolute top-[-20px] h-[50px] w-[50px] rounded-full object-cover opacity-50 blur-[14px]"
                    width={50}
                    height={50}
                    alt="profile blur"
                    src={testimonial.image}
                  />
                  <Image
                    className="absolute top-[-24px] h-[50px] w-[50px] rounded-full object-cover"
                    width={50}
                    height={50}
                    alt="profile"
                    src={testimonial.image}
                  />
                  <h3 className={"mb-1.5 text-lg font-bold"}>
                    {testimonial.name}
                  </h3>
                  <p className="mb-[22px] text-xs font-normal opacity-60">
                    {testimonial.role}
                  </p>
                  <p className="mb-[22px] h-[52px] text-center text-sm font-normal opacity-80">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex gap-1.5">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, index) => (
                        <StarIcon
                          key={index}
                          fill="#F6B76F"
                          stroke="#F6B76F"
                          size={18}
                        />
                      ))}
                    {Array(5 - testimonial.rating)
                      .fill(0)
                      .map((_, index) => (
                        <StarIcon
                          key={index}
                          fill="#F6973F"
                          stroke="#F6973F"
                          size={18}
                          opacity={0.3}
                        />
                      ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button className="absolute start-[24px] top-[144px] h-[50px] w-[50px] rounded-full bg-white p-0">
          <ArrowLeftIcon />
        </Button>
        <Button className="absolute end-[24px] top-[144px] h-[50px] w-[50px] rounded-full bg-white p-0">
          <ArrowRightIcon />
        </Button>
      </div>
    </section>
  );
};
