import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {Button} from "@/components/ui/button.tsx";
import {MainMenus} from "@/constants/MainMenus.tsx";
import type {MeResponseDataProfile} from "@/types/interfaces/MeResponse.ts";
import React, {useState} from "react";
import {Link, type NavigateFunction, useNavigate} from "react-router";


type Props = {
    profile: MeResponseDataProfile;
};

export default function HeaderAccount({profile}: Props) {
    const navigate: NavigateFunction = useNavigate();

    const [dropdown, setDropdown] = useState<boolean>(false);

    const logout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        localStorage.clear();

        navigate('/login');

        event.preventDefault();
    }

    return <div className="flex gap-4 items-center cursor-pointer md:relative" onClick={() => setDropdown(!dropdown)}>
        <Avatar className="size-10 md:size-12">
            <AvatarImage src="/images/avatar-default.png" alt="Avatar"/>
            <AvatarFallback>Avatar</AvatarFallback>
        </Avatar>
        <p className="hidden grow text-lg font-semibold md:block">{profile.name}</p>
        <img className="hidden size-6 md:block" src="/images/icons/icon-chevron-down-black.png" alt="Chevron Down Icon"/>
        <nav className={`${dropdown ? 'opacity-100' : 'invisible opacity-0'} absolute right-4 top-full w-[calc(100%-2rem)] p-4 bg-background-100 rounded-2xl blur-20 duration-300 md:right-0 md:w-46`}>
            <ul className="flex flex-col gap-4">
                {MainMenus.map((mainMenu, index: number) =>
                    <li key={index}>
                        <Link className="block leading-7.5 text-sm font-semibold md:text-base" to={mainMenu.href}>{mainMenu.text}</Link>
                    </li>)}
                <li>
                    <Button className="justify-start w-full h-7.5 p-0 text-sm font-semibold md:text-base" onClick={(event) => logout(event)}>Logout</Button>
                </li>
            </ul>
        </nav>
    </div>;
}
