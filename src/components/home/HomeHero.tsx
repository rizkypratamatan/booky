import {Button} from "@/components/ui/button.tsx";
import {Carousel, type CarouselApi, CarouselContent, CarouselItem} from "@/components/ui/carousel.tsx";
import {Sliders} from "@/constants/Sliders.tsx";
import {useEffect, useState} from "react";


export default function HomeHero() {
    const [api, setApi] = useState<CarouselApi>();
    const [selected, setSelected] = useState<number>(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    useEffect(() => {
        if(api) {
            api.on('select', () => {
                setSelected(api.selectedScrollSnap())
            });

            queueMicrotask(() => setScrollSnaps(api.scrollSnapList()));
        }
    }, [api]);

    return <section>
        <Carousel className="flex flex-col gap-4" setApi={setApi}>
            <CarouselContent>
                {Sliders.map((slider, index: number) => (
                    <CarouselItem key={index}>
                        {slider.image}
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="flex justify-center gap-1.5">
                {scrollSnaps.map((_, index: number) => (
                    <Button key={index} onClick={() => api?.scrollTo(index)} className={`${selected === index ? 'bg-primary-300' : 'bg-neutral-300'} size-1.5 p-0 rounded-full md:size-2.5`}/>
                ))}
            </div>
        </Carousel>
    </section>;
}
