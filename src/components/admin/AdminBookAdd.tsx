import AdminBookAddForm from "@/components/admin/AdminBookAddForm.tsx";
import Image from "@/components/ui/Image.tsx";
import {Link} from "react-router";


export default function AdminBookAdd() {
    return <section className="flex flex-col gap-4 w-full max-w-132.25 mx-auto px-6">
        <div className="flex gap-3">
            <Link to="/admin">
                <Image className="size-8" src="/images/icons/icon-arrow-left-black.png" alt="Arrow Left Icon"/>
            </Link>
            <p className="text-2xl font-bold">Add Book</p>
        </div>
        <AdminBookAddForm/>
    </section>;
}
