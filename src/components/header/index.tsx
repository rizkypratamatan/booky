import HeaderAccount from "@/components/header/HeaderAccount.tsx";
import HeaderAction from "@/components/header/HeaderAction.tsx";
import HeaderCart from "@/components/header/HeaderCart.tsx";
import Image from "@/components/ui/Image.tsx";
import Logo from "@/components/ui/Logo.tsx";
import Search from "@/components/ui/Search.tsx";
import useMe from "@/hooks/useMe.ts";
import {setAccount} from "@/stores/slices/accountSlice.ts";
import {setFilterQ} from "@/stores/slices/filterSlice.ts";
import {setToken} from "@/stores/slices/tokenSlice.ts";
import type {RootState} from "@/stores/store.ts";
import type {UnknownAction} from "@reduxjs/toolkit";
import {XIcon} from "lucide-react";
import {type Dispatch, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router";


export default function Header() {
    const token: string = useSelector((state: RootState) => state.token.value);
    const filterQ: string = useSelector((state: RootState) => state.filter.q);
    const dispatch: Dispatch<UnknownAction> = useDispatch();

    const [search, setSearch] = useState<boolean>(false);

    useEffect(() => {
        if(localStorage.getItem('token')) {
            dispatch(setToken(localStorage.getItem('token')!));
        }
    }, []);

    const {data} = useMe(token);

    useEffect(() => {
        if(data) {
            dispatch(setAccount(data.data.profile));
        }
    }, [data]);

    return <header className="fixed z-50 flex gap-6 justify-between items-center w-full h-16 bg-background-100 fit-content blur-20 md:h-20">
        <Link to="/"><Logo containerClass="gap-11.79" imageClass="size-10 md:size-8.25" fontClass="hidden text-3xxl md:block"/></Link>
        <div className={`${search ? 'flex' : 'hidden'} grow gap-4 justify-center items-center duration-300 lg:flex`}>
            <Search className="w-35 lg:w-auto lg:max-w-125" placeholder="Search book" value={filterQ} onChange={() => dispatch(setFilterQ(filterQ))}/>
            <XIcon className="size-6 cursor-pointer lg:hidden" onClick={() => setSearch(false)}/>
        </div>
        <div className={`${search ? 'hidden' : 'flex'} gap-6 items-center duration-300 lg:flex`}>
            <Image className="block size-6 cursor-pointer lg:hidden" src="/images/icons/icon-search-black.png" alt="Search Icon" onClick={() => setSearch(true)}/>
            <HeaderCart token={token}/>
            {data ? <HeaderAccount profile={data.data.profile}/> :
                <HeaderAction/>}
        </div>
    </header>;
}
