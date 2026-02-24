import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import p1 from "@/assets/ens/p1.jpeg";
import b13 from "@/assets/ens/b13.jpeg";
import brand from "@/assets/ens/brand.jpeg";
import mc from "@/assets/ens/mc.jpeg";
import Autoplay from "embla-carousel-autoplay";

const works = [
  {
    img: p1,
    title: "Live Production",
  },
  {
    img: b13,
    title: "Live Broadcasting",
  },
  {
    img: brand,
    title: "Brand Activation",
  },
  {
    img: mc,
    title: "EMCEE / Hosting",
  },
];

export default function Whoweare() {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent>
        {works.map((src, index) => (
          <CarouselItem key={index}>
            <img
              src={src.img}
              alt={src.title}
              className="w-full h-80 object-cover"
            />
            <p className="capitalize text-sm text-center">{src.title}</p>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
