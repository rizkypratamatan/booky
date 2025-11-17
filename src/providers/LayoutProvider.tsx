import Footer from "@/components/footer";
import Header from "@/components/header";
import {Fragment} from "react";
import {Outlet} from "react-router";


export default function LayoutProvider() {
    return <Fragment>
        <Header/>
        <main className="flex flex-col gap-12 pt-20 pb-4 fit-content md:pt-32 md:pb-22">
            <Outlet></Outlet>
        </main>
        <Footer/>
    </Fragment>;
}
