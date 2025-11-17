import FooterDescription from "@/components/footer/FooterDescription.tsx";
import FooterSocialMedia from "@/components/footer/FooterSocialMedia.tsx";


export default function Footer() {
    return <footer className="py-10 border-t border-neutral-300 fit-content md:py-20">
        <div className="flex flex-col gap-4 px-7.5 md:gap-10">
            <FooterDescription/>
            <FooterSocialMedia/>
        </div>
    </footer>;
}
