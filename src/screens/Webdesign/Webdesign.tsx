import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";
import { Input } from "../../components/ui/input";
import { SearchIcon, ChevronLeftIcon, ChevronRightIcon, ShoppingBagIcon } from "lucide-react";

const navigationItems = [
  { label: "Furniture", hasDropdown: true },
  { label: "Shop" },
  { label: "About Us" },
  { label: "Contact" }
];

const features = [
  {
    title: "Luxury facilities",
    description: "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.",
    position: "left-[452px]"
  },
  {
    title: "Affordable Price", 
    description: "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.",
    position: "left-[764px]"
  },
  {
    title: "Many Choices",
    description: "We provide many unique work space choices so that you can choose the workspace to your liking.",
    position: "left-[1076px]"
  }
];

const products = [
  {
    name: "Sakarias Armchair",
    category: "Chair",
    price: 392,
    image: "/group-3742.png",
    rating: "/group-172.png"
  },
  {
    name: "Baltsar Chair",
    category: "Chair", 
    price: 299,
    image: "/group-3742-1.png",
    rating: "/group-172-1.png"
  },
  {
    name: "Anjay Chair",
    category: "Chair",
    price: 519,
    image: "/group-3742-2.png", 
    rating: "/group-172-2.png"
  },
  {
    name: "Nyantuy Chair",
    category: "Chair",
    price: 921,
    image: "/group-3742-3.png",
    rating: "/group-172-3.png"
  }
];

const testimonials = [
  {
    name: "Bang Upin",
    role: "Pedagang Asongan",
    image: "/ellipse-1131-2.png",
    backgroundImage: "/unsplash--hqhx3lbn18-1.png",
    blurImage: "/unsplash--hqhx3lbn18.png",
    quote: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
    rating: "/group-48095424-2.png",
    union: "/union.svg"
  },
  {
    name: "Ibuk Sukijan", 
    role: "Ibu Rumah Tangga",
    image: "/ellipse-1131.png",
    backgroundImage: "/unsplash-jaxs8tk5iww-1.png",
    blurImage: "/unsplash-jaxs8tk5iww.png", 
    quote: "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah",
    rating: "/group-48095424.png",
    union: "/union-1.svg"
  },
  {
    name: "Mpok Ina",
    role: "Karyawan Swasta", 
    image: "/ellipse-1131-1.png",
    backgroundImage: "/unsplash-h2-3dl9ylpu-1.png",
    blurImage: "/unsplash-h2-3dl9ylpu-1.png",
    quote: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    rating: "/group-48095424-1.png",
    union: "/union-2.svg"
  }
];

const footerSections = [
  {
    title: "Services",
    items: ["Email Marketing", "Campaigns", "Branding"]
  },
  {
    title: "Furniture", 
    items: ["Beds", "Chair", "All"]
  },
  {
    title: "Follow Us",
    items: [
      { text: "Facebook", icon: "/001-facebook.png" },
      { text: "Twitter", icon: "/003-twitter.png" },
      { text: "Instagram", icon: "/004-instagram.png" }
    ]
  }
];

export const Webdesign = (): JSX.Element => {
  return (
    <div className="bg-white grid justify-items-center [align-items:start] w-screen">
<div className="bg-white overflow-hidden w-[1440px] h-[5622px] relative">
{/* Hero Section */}
        <section className="absolute w-[1440px] h-[1084px] top-0 left-0 bg-[url(/rectangle-1441.png)] bg-cover bg-[50%_50%]">
{/* SearchIcon Bar */}
          <div className="flex w-[344px] items-center justify-between pl-5 pr-2 py-2 absolute top-[504px] left-[548px] bg-[#ffffff26] rounded-[42px] border-[0.86px] border-solid border-[#ffffff99] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
<div className="relative w-[130px] h-[25px] opacity-80 [font-family:'Gilroy-Regular-Regular',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[27px] whitespace-nowrap">
SearchIcon furniture
            </div>
<img
              className="relative flex-[0_0_auto]"
              alt="Frame"
              src="/frame-48095395.svg"
            />
</div>
{/* Navigation */}
          <nav className="absolute w-[484px] h-[22px] top-[41px] left-[493px]">
<div className="inline-flex items-center justify-center gap-2 absolute top-0 left-0">
<div className="relative w-fit mt-[-1.00px] [font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]">
Furniture
              </div>
<ChevronLeftIcon className="relative w-[18px] h-[18px] text-white" />
</div>
{navigationItems.slice(1).map((item, index) => (
              <div key={item.label} className={`absolute top-0 ${index === 0 ? 'left-[164px]' : index === 1 ? 'left-[269px]' : 'left-[409px]'} [font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]`}>
{item.label}
              </div>
))}
          </nav>
{/* Logo */}
          <div className="top-[39px] left-20 text-white absolute [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-[28px] tracking-[0.28px] leading-[normal]">
Panto
          </div>
{/* Main Heading */}
          <h1 className="absolute top-40 left-[290px] [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-white text-[80px] text-center tracking-[-0.80px] leading-[104px]">
Make Your Interior More
            <br />
minimalistic &amp; Modern
          </h1>
{/* Subtitle */}
          <p className="absolute w-[606px] top-[382px] left-[418px] opacity-80 [font-family:'Gilroy-Regular-Regular',Helvetica] font-normal text-white text-2xl text-center tracking-[0] leading-[38.4px]">
Turn your room with panto into a lot more minimalist and modern with
            ease and speed
          </p>
{/* Decorative Elements */}
          <div className="absolute w-8 h-8 top-[743px] left-[103px] bg-[#ffffff33] rounded-2xl border-[0.86px] border-solid border-[#ffffff99] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
<div className="relative w-2.5 h-2.5 top-2.5 left-2.5 bg-white rounded-[5.14px] rotate-180" />
</div>
<div className="absolute w-8 h-8 top-[777px] left-[800px] bg-[#ffffff33] rounded-2xl border-[0.86px] border-solid border-[#ffffff99] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
<div className="relative w-2.5 h-2.5 top-2.5 left-2.5 bg-white rounded-[5.14px] rotate-180" />
</div>
<div className="absolute w-[37px] h-[37px] top-[809px] left-[1369px] bg-[#ffffff33] rounded-[18.5px] border-[0.86px] border-solid border-[#ffffff99] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
<div className="relative w-3 h-3 top-3 left-3 bg-white rounded-[5.95px] rotate-180" />
</div>
{/* Shopping Bag */}
          <div className="absolute w-10 h-[34px] top-[41px] left-[1326px]">
<img
              className="absolute w-[34px] h-[34px] top-0 left-0"
              alt="Bag"
              src="/bag.svg"
            />
<img
              className="absolute w-5 h-[25px] top-[3px] left-5"
              alt="Group"
              src="/group-48095384.png"
            />
</div>
<img
            className="absolute w-28 h-[138px] top-[585px] left-[249px]"
            alt="Group"
            src="/group-48095392.png"
          />
</section>
{/* Why Choosing Us Section */}
        <section className="absolute top-[1203px] left-0 w-full">
<h2 className="absolute top-[38px] left-20 [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-[#1e1e1e] text-[42px] tracking-[0] leading-[normal]">
Why
            <br />
Choosing Us
          </h2>
{features.map((feature, index) => (
            <Card key={feature.title} className={`absolute w-[284px] top-0 ${feature.position} bg-transparent border-none shadow-none`}>
<CardContent className="p-0">
<h3 className="opacity-90 [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-[#1e1e1e] text-2xl tracking-[0] leading-[normal] mb-[50px]">
{feature.title}
                </h3>
<p className="opacity-80 [font-family:'Gilroy-Regular-Regular',Helvetica] font-normal text-[#1e1e1e] text-base tracking-[0] leading-[29.6px] mb-[55px]">
{feature.description}
                </p>
<div className="flex items-center gap-2">
<span className="[font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-[#e58311] text-sm tracking-[0] leading-[25.9px]">
More Info
                  </span>
<img
                    className="w-12 h-6"
                    alt="Grommet icons form"
                    src="/grommet-icons-form-next-link.svg"
                  />
</div>
</CardContent>
</Card>
))}
        </section>
{/* Best Selling Product Section */}
        <section className="absolute w-[1440px] h-[906px] top-[1504px] left-0 bg-[#f7f7f7]">
<h2 className="absolute top-[49px] left-[525px] [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-[#1e1e1e] text-[42px] tracking-[0] leading-[normal]">
Best Selling Product
          </h2>
{/* Product Category Tabs */}
          <Tabs defaultValue="chair" className="absolute top-[134px] left-[546px]">
<TabsList className="inline-flex items-start p-1.5 bg-[#eeeeee] rounded-[44px] h-auto">
<TabsTrigger value="chair" className="flex w-[84px] h-[45px] items-center justify-center gap-2.5 p-1 bg-white rounded-[32px] data-[state=active]:bg-white">
<span className="opacity-80 [font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-[#1e1e1e] text-lg leading-[33.3px] tracking-[0]">
Chair
                </span>
</TabsTrigger>
<TabsTrigger value="beds" className="flex w-[84px] h-[45px] items-center justify-center gap-2.5 p-1 rounded-[32px]">
<span className="opacity-80 [font-family:'Gilroy-Regular-Regular',Helvetica] font-normal text-[#1e1e1e] text-lg tracking-[0] leading-[33.3px]">
Beds
                </span>
</TabsTrigger>
<TabsTrigger value="sofa" className="flex w-[84px] h-[45px] items-center justify-center gap-2.5 p-1 rounded-[32px]">
<span className="opacity-80 [font-family:'Gilroy-Regular-Regular',Helvetica] font-normal text-[#1e1e1e] text-lg tracking-[0] leading-[33.3px]">
Sofa
                </span>
</TabsTrigger>
<TabsTrigger value="lamp" className="flex w-[84px] h-[45px] items-center justify-center gap-2.5 p-1 rounded-[32px]">
<span className="opacity-80 [font-family:'Gilroy-Regular-Regular',Helvetica] font-normal text-[#1e1e1e] text-lg tracking-[0] leading-[33.3px]">
Lamp
                </span>
</TabsTrigger>
</TabsList>
<TabsContent value="chair" className="absolute w-[1287px] h-[492px] top-[137px] left-[-470px]">
<div className="absolute w-[1198px] h-[492px] top-0 left-[45px]">
{products.map((product, index) => (
                  <Card key={product.name} className={`absolute w-[268px] h-[492px] top-0 ${index === 0 ? 'left-0' : index === 1 ? 'left-[310px]' : index === 2 ? 'left-[620px]' : 'left-[930px]'} bg-transparent border-none shadow-none`}>
<CardContent className="relative h-[492px] p-0">
<div className="absolute w-[268px] h-[442px] top-[50px] left-0 bg-white rounded-[20px]" />
<img
                        className="absolute w-[268px] h-[239px] top-[50px] left-0"
                        alt="Rectangle"
                        src="/rectangle-55.svg"
                      />
<div className="absolute top-[303px] left-[21px]">
<Badge variant="secondary" className="absolute w-[43px] top-0 left-0 [font-family:'Inter',Helvetica] font-normal text-[#8d8d8d] text-[16.8px] leading-[normal] tracking-[0] bg-transparent border-none p-0 h-auto">
{product.category}
                        </Badge>
<h3 className="absolute top-[26px] left-0 [font-family:'Inter',Helvetica] font-semibold text-[#0d1a39] text-[21.3px] tracking-[0] leading-[normal]">
{product.name}
                        </h3>
<img
                          className="absolute w-[104px] h-[18px] top-[58px] left-0"
                          alt="Group"
                          src={product.rating}
                        />
</div>
<div className="absolute w-[225px] h-[49px] top-[416px] left-[21px]">
<div className="absolute w-[59px] h-[26px] top-3 left-0">
<span className="absolute w-[11px] top-0 left-0 [font-family:'Inter',Helvetica] font-semibold text-[#0d1a39] text-[15.2px] tracking-[0] leading-[normal]">
$
                          </span>
<span className="absolute top-0 left-3.5 [font-family:'Inter',Helvetica] font-semibold text-[#0d1a39] text-[21.3px] tracking-[0] leading-[normal]">
{product.price}
                          </span>
</div>
<Button className="absolute w-[49px] h-[49px] top-0 left-[177px] p-0 bg-transparent border-none shadow-none hover:bg-transparent">
<img
                            className="w-[49px] h-[49px]"
                            alt="Frame"
                            src="/frame-174.svg"
                          />
</Button>
</div>
<img
                        className={`absolute top-0 ${index === 0 ? 'w-[218px] h-[278px] left-6' : index === 1 ? 'w-[218px] h-[273px] left-6' : index === 2 ? 'w-[223px] h-[277px] left-[27px]' : 'w-[241px] h-[289px] left-[13px]'}`}
                        alt="Group"
                        src={product.image}
                      />
</CardContent>
</Card>
))}
              </div>
<Button className="absolute w-[89px] h-[89px] top-52 left-[1198px] p-0 bg-transparent border-none shadow-none hover:bg-transparent">
<img
                  className="w-[89px] h-[89px]"
                  alt="Frame"
                  src="/frame-48095395-1.svg"
                />
</Button>
<Button className="absolute w-[89px] h-[89px] top-52 left-0 p-0 bg-transparent border-none shadow-none hover:bg-transparent">
<img
                  className="w-[89px] h-[89px]"
                  alt="Frame"
                  src="/frame-48095401.svg"
                />
</Button>
</TabsContent>
</Tabs>
<div className="absolute w-[125px] h-[33px] top-[823px] left-[665px]">
<Button variant="link" className="p-0 h-auto text-[#e58311] [font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-lg tracking-[0] leading-[33.3px]">
View All
            </Button>
<img
              className="absolute w-12 h-6 top-[5px] left-[75px]"
              alt="Grommet icons form"
              src="/grommet-icons-form-next-link.svg"
            />
</div>
</section>
{/* Experience Section */}
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
          interiors are made by people who are professionals in their fields
          with an elegant and lucurious style and with premium quality materials
        </p>
<div className="absolute w-[123px] h-[26px] top-[3055px] left-[743px]">
<Button variant="link" className="p-0 h-auto text-[#e58311] [font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-sm tracking-[0] leading-[25.9px]">
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
{/* Materials Section */}
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
<Button variant="link" className="p-0 h-auto text-[#e58311] [font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-sm tracking-[0] leading-[25.9px]">
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
{/* Testimonials Section */}
        <section className="absolute w-[417px] h-[94px] top-[4285px] left-[502px]">
<h2 className="absolute w-[413px] top-[42px] left-0 [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-[#1e1e1e] text-[42px] text-center tracking-[0] leading-[normal]">
Our Client Reviews
          </h2>
<div className="absolute top-0 left-[129px] [font-family:'Gilroy-SemiBold-SemiBold',Helvetica] font-semibold text-[#e58411] text-lg text-center tracking-[3.15px] leading-[normal]">
TESTIMONIALS
          </div>
</section>
{testimonials.map((testimonial, index) => (
          <Card key={testimonial.name} className={`absolute w-[415px] h-[506px] top-[4439px] ${index === 0 ? 'left-[82px]' : index === 1 ? 'left-[536px]' : 'left-[944px]'} bg-transparent border-none shadow-none`}>
<CardContent className="p-0">
<div className={`absolute w-[370px] h-[506px] top-0 ${index === 0 ? 'left-[45px]' : 'left-0'}`}>
<div className={`relative w-[400px] h-[556px] ${index === 0 ? 'left-[-13px]' : 'left-[-15px]'}`}>
<img
                    className="w-[400px] h-[480px] top-[76px] left-0 rounded-[44.39px] blur-[25px] absolute object-cover"
                    alt="Unsplash"
                    src={testimonial.blurImage}
                  />
<img
                    className={`absolute rounded-[18.12px] object-cover ${index === 0 ? 'w-[370px] h-[476px] top-0 left-[13px]' : 'w-[370px] h-[476px] top-0 left-4'}`}
                    alt="Unsplash"
                    src={testimonial.backgroundImage}
                  />
<div className={`absolute w-[336px] h-[239px] top-[219px] ${index === 0 ? 'left-[18px]' : 'left-[33px]'}`}>
<div className={`relative w-[334px] h-[239px] bg-[100%_100%]`} style={{backgroundImage: `url(${testimonial.union})`}}>
<div className="absolute w-[50px] h-[55px] top-2 left-[142px]">
<div className={`relative w-[76px] h-[76px] -top-2 left-[-13px] bg-cover bg-[50%_50%]`} style={{backgroundImage: `url(/ellipse-1132${index === 1 ? '-1'
.png)`}}>
<img
                            className="absolute w-[50px] h-[50px] top-2 left-[13px] object-cover"
                            alt="Ellipse"
                            src={testimonial.image}
                          />
</div>
</div>
<div className={`absolute h-[42px] top-[71px] ${index === 0 ? 'w-[115px] left-[113px]' : index === 1 ? 'w-[109px] left-[116px]' : 'w-[103px] left-[119px]'}`}>
<h3 className={`absolute top-0 [font-family:'Gilroy-Bold-Bold',Helvetica] font-bold text-[#1e1e1e] text-lg text-center tracking-[0] leading-[normal] ${index === 0 ? 'left-3' : index === 1 ? 'left-px' : 'left-2.5'}`}>
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
                <Button className={`absolute w-[89px] h-[89px] top-[131px] p-0 bg-transparent border-none shadow-none hover:bg-transparent ${index === 0 ? 'left-0' : 'left-[325px]'}`}>
<img
                    className="w-[89px] h-[89px]"
                    alt="Frame"
                    src={index === 0 ? "/frame-48095401-1.svg" : "/frame-48095395-2.svg"}
                  />
</Button>
)}
            </CardContent>
</Card>
))}

        {/* Footer */}
        <footer className="absolute w-[1440px] h-[462px] top-[5160px] left-0 overflow-hidden">
<div className="relative w-[1442px] h-[464px] -top-px -left-px bg-[#f7f7f7]">
<div className="absolute w-[1070px] h-6 top-[383px] left-[189px]">
<p className="absolute top-0.5 left-0 opacity-50 [font-family:'DM_Sans',Helvetica] font-normal text-[#1e2832] text-[15px] tracking-[-0.20px] leading-[normal]">
Copyright © 2021
              </p>
<Button variant="link" className="absolute top-0 left-[797px] opacity-80 [font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-[#1e1e1e] text-[15px] tracking-[0] leading-6 p-0 h-auto">
Terms &amp; Conditions
              </Button>
<Button variant="link" className="absolute top-0 left-[970px] opacity-80 [font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-[#1e1e1e] text-[15px] tracking-[0] leading-6 p-0 h-auto">
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
                <div key={section.title} className={`absolute w-[133px] h-[146px] top-0 ${sectionIndex === 0 ? 'left-[445px]' : sectionIndex === 1 ? 'left-[688px]' : 'left-[931px]'}`}>
<h4 className="absolute -top-px left-0 [font-family:'DM_Sans',Helvetica] font-normal text-[#f6973f] text-[17px] tracking-[-0.23px] leading-[normal]">
{section.title}
                  </h4>
{section.items.map((item, itemIndex) => (
                    <div key={typeof item === 'string' ? item : item.text} className={`absolute top-[${41 + (itemIndex * 40)}px] left-0 flex items-center gap-2`}>
{typeof item === 'object' && (
                        <img
                          className={`w-${item.icon.includes('facebook') ? '2.5' : '5'} h-${item.icon.includes('facebook') ? '5' : item.icon.includes('twitter') ? '4' : '5'}`}
                          alt={`Element ${item.text.toLowerCase()}`}
                          src={item.icon}
                        />
)}
                      <Button variant="link" className={`opacity-80 [font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-[#1e1e1e] text-[15px] tracking-[0] leading-6 p-0 h-auto ${typeof item === 'object' ? '' : 'left-0'}`}>
{typeof item === 'string' ? item : item.text}
                      </Button>
</div>
))}
                </div>
))}
            </div>
</div>
</footer>
</div>
</div>
);
};