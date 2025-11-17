import {Button} from "@/components/ui/button.tsx";
import Image from "@/components/ui/Image.tsx";


export default function DetailAction() {
    return <div className="fixed left-0 bottom-0 flex gap-3 justify-center items-center w-full h-18 bg-background-100 blur-20 md:static md:h-auto md:!shadow-none">
        <Button className="basis-1/3 h-10 border border-neutral-300 rounded-full text-sm font-bold md:basis-50 md:h-12 md:text-base">Add
            to
            Cart</Button>
        <Button className="basis-1/3 h-10 bg-primary-300 rounded-full font-bold text-sm text-neutral-25 md:basis-50 md:h-12 md:text-base">Borrow
            Book</Button>
        <Button className="basis-10 h-10 flex justify-center items-center p-0 border border-neutral-300 rounded-full md:basis-11 md:h-11">
            <Image className="size-5" src="/images/icons/icon-share-black.png" alt="Share Icon"/>
        </Button>
    </div>;
}
