import {SocialMedias} from "@/constants/SocialMedias.tsx";


export default function FooterSocialMedia() {
    return <div className="flex flex-col gap-5">
        <p className="font-bold text-center">Follow on Social Media</p>
        <div className="flex gap-3 justify-center">
            {SocialMedias.map((socialMedia, index: number) =>
                <div key={index} className="flex justify-center items-center size-10 border border-neutral-300 rounded-full">
                    {socialMedia.image}
                </div>)}
        </div>
    </div>;
}
