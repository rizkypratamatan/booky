import type {ReactNode} from "react";


type DataType = {
    image: ReactNode;
};

export const SocialMedias: DataType[] = [
    {image: <img className="size-auto" src="/images/icons/icon-facebook-black.png" alt="Facebook Logo"/>},
    {image: <img className="size-auto" src="/images/icons/icon-instagram-black.png" alt="Instagram Logo"/>},
    {image: <img className="size-auto" src="/images/icons/icon-linkedin-black.png" alt="Linkedin Logo"/>},
    {image: <img className="size-auto" src="/images/icons/icon-tiktok-black.png" alt="Tiktok Logo"/>}
];
