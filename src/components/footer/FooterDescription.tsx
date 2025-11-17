import Logo from "@/components/ui/Logo.tsx";


export default function FooterDescription() {
    return <div className="flex flex-col gap-4 items-center md:gap-5.5">
        <Logo containerClass="gap-3.75" imageClass="size-10.5" fontClass="text-3xxl"/>
        <p className="text-sm font-semibold text-center md:text-base">Discover inspiring stories & timeless knowledge,
            ready to borrow anytime.
            Explore online or visit our nearest library branch.</p>
    </div>;
}
