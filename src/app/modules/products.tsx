import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MoveRightIcon,
  PlusIcon,
  StarIcon,
} from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  {
    label: "Chair",
    value: "chair",
  },
  {
    label: "Beds",
    value: "beds",
  },
  {
    label: "Sofa",
    value: "sofa",
  },
  {
    label: "Lamp",
    value: "lamp",
  },
];

const products = [
  {
    name: "Sakarias Armchair",
    category: "chair",
    price: 392,
    image: "/products/1.png",
    rating: 1,
  },
  {
    name: "Baltsar Chair",
    category: "chair",
    price: 299,
    image: "/products/2.png",
    rating: 1,
  },
  {
    name: "Anjay Chair",
    category: "chair",
    price: 519,
    image: "/products/3.png",
    rating: 1,
  },
  {
    name: "Nyantuy Chair",
    category: "chair",
    price: 921,
    image: "/products/4.png",
    rating: 1,
  },
  {
    name: "Sample Bed",
    category: "beds",
    price: 921,
    image: "/products/3.png",
    rating: 0.5,
  },
  {
    name: "Sample Sofa",
    category: "sofa",
    price: 921,
    image: "/products/4.png",
    rating: 0.7,
  },
  {
    name: "Sample Lamp",
    category: "lamp",
    price: 921,
    image: "/products/2.png",
    rating: 0.2,
  },
];

export const Products = () => {
  return (
    <section className="w-full bg-[#f7f7f7] px-12 py-12 md:py-24">
      <h2 className="mx-auto mb-8 w-fit text-4xl font-bold md:text-[42px]">
        Best Selling Product
      </h2>
      {/* Product Category Tabs */}
      <Tabs
        defaultValue="chair"
        className="mb-[60px] flex h-fit w-full flex-col items-center gap-10 md:gap-20"
      >
        <TabsList className="inline-flex h-auto items-start rounded-[44px] bg-[#eeeeee] p-1.5">
          {categories.map(({ label, value }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="flex h-[45px] w-[84px] items-center justify-center gap-2.5 rounded-[32px] p-1"
            >
              <span className="text-lg">{label}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map(({ label: categoryLable, value: categoryValue }) => (
          <TabsContent
            key={categoryValue}
            value={categoryValue}
            className="relative flex w-full max-w-[1200px] items-center"
          >
            {/* <div className="w-full"> */}
            <div className="flex w-full snap-x snap-proximity gap-[42px] overflow-x-auto md:snap-none">
              {products
                .filter(({ category }) => category === categoryValue)
                .map((product) => (
                  <Card
                    key={product.name}
                    className={
                      "mt-12 snap-start border-none bg-[#FAFAFA] shadow-none"
                    }
                  >
                    <CardContent className="relative flex h-[442px] flex-col rounded-[20px] p-0">
                      <div className="mx-5 -mt-12 h-[288px] w-[218px]">
                        <Image
                          width={218}
                          height={256}
                          alt="Group"
                          src={product.image}
                        />
                      </div>

                      <div className="flex h-[202px] grow flex-col justify-between rounded-b-[20px] bg-white px-5 pt-3 pb-7 text-[#0d1a39]">
                        <div className="flex flex-col gap-1.5">
                          <Badge
                            variant="secondary"
                            className="p-0 text-base font-normal text-[#8d8d8d]"
                          >
                            {categoryLable}
                          </Badge>
                          <h3 className="text-[22px] font-semibold">
                            {product.name}
                          </h3>
                          <div className="flex gap-0.5">
                            {Array(Math.floor(product.rating * 5))
                              .fill(0)
                              .map((_, index) => (
                                <StarIcon
                                  key={index}
                                  fill="#F6B76F"
                                  stroke="#F6B76F"
                                  size={18}
                                />
                              ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-start gap-0.5">
                            <span className="text-base font-semibold">$</span>
                            <span className="text-[22px] font-semibold">
                              {product.price}
                            </span>
                          </div>
                          <Button className="h-12 w-12 rounded-full border-none bg-[#0D1B39] p-3 text-white shadow-none">
                            <PlusIcon className="!h-6 !w-6" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
            {/* </div> */}
            <Button className="absolute -start-6 top-24 h-[50px] w-[50px] rounded-full bg-white p-0">
              <ArrowLeftIcon />
            </Button>
            <Button className="absolute -end-6 top-24 h-[50px] w-[50px] rounded-full bg-white p-0">
              <ArrowRightIcon />
            </Button>
          </TabsContent>
        ))}
      </Tabs>
      <Button
        variant="link"
        className="mx-auto flex items-center gap-3 p-0 text-lg text-[#e58311]"
      >
        View All
        <MoveRightIcon />
      </Button>
    </section>
  );
};
