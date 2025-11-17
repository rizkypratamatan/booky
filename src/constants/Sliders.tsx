import type {ReactNode} from "react";


type DataType = {
    image: ReactNode;
};

export const Sliders: DataType[] = [
    {image: <img className="w-full h-auto object-cover" src="/images/carousel-1.png" alt="Carousel Image"/>},
    {image: <img className="w-full h-auto object-cover" src="/images/carousel-1.png" alt="Carousel Image"/>},
    {image: <img className="w-full h-auto object-cover" src="/images/carousel-1.png" alt="Carousel Image"/>}
];
