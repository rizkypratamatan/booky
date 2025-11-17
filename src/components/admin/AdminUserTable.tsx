import AdminUserTableItem from "@/components/admin/AdminUserTableItem.tsx";
import {Fragment} from "react";


export default function AdminUserTable() {
    return <Fragment>
        <div className="overflow-x-auto">
            <table className="hidden w-full min-w-250 md:table">
                <thead className="bg-background-300">
                <tr>
                    <th className="h-16 px-4 py-2">No</th>
                    <th className="h-16 px-4 py-2">Name</th>
                    <th className="h-16 px-4 py-2">Nomor Handphone</th>
                    <th className="h-16 px-4 py-2">Email</th>
                    <th className="h-16 px-4 py-2">Created at</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-neutral-300">
                    <td className="h-16 px-4 py-2">1</td>
                    <td className="h-16 px-4 py-2">John Doe</td>
                    <td className="h-16 px-4 py-2">081234567890</td>
                    <td className="h-16 px-4 py-2">johndoe@email.com</td>
                    <td className="h-16 px-4 py-2">28 Aug 2025, 14:00</td>
                </tr>
                <tr className="border-b border-neutral-300">
                    <td className="h-16 px-4 py-2">1</td>
                    <td className="h-16 px-4 py-2">John Doe</td>
                    <td className="h-16 px-4 py-2">081234567890</td>
                    <td className="h-16 px-4 py-2">johndoe@email.com</td>
                    <td className="h-16 px-4 py-2">28 Aug 2025, 14:00</td>
                </tr>
                <tr className="border-b border-neutral-300">
                    <td className="h-16 px-4 py-2">1</td>
                    <td className="h-16 px-4 py-2">John Doe</td>
                    <td className="h-16 px-4 py-2">081234567890</td>
                    <td className="h-16 px-4 py-2">johndoe@email.com</td>
                    <td className="h-16 px-4 py-2">28 Aug 2025, 14:00</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className="flex flex-col gap-4 md:hidden">
            <div className="flex flex-col gap-1 p-3 rounded-xl blur-20">
                <AdminUserTableItem title="No" value="1"/>
                <AdminUserTableItem title="Name" value="John Doe"/>
                <AdminUserTableItem title="Email" value="johndoe@email.com"/>
                <AdminUserTableItem title="Nomor Handphone" value="081234567890"/>
                <AdminUserTableItem title="Created at" value="28 Aug 2025, 14:00"/>
            </div>
            <div className="flex flex-col gap-1 p-3 rounded-xl blur-20">
                <AdminUserTableItem title="No" value="1"/>
                <AdminUserTableItem title="Name" value="John Doe"/>
                <AdminUserTableItem title="Email" value="johndoe@email.com"/>
                <AdminUserTableItem title="Nomor Handphone" value="081234567890"/>
                <AdminUserTableItem title="Created at" value="28 Aug 2025, 14:00"/>
            </div>
            <div className="flex flex-col gap-1 p-3 rounded-xl blur-20">
                <AdminUserTableItem title="No" value="1"/>
                <AdminUserTableItem title="Name" value="John Doe"/>
                <AdminUserTableItem title="Email" value="johndoe@email.com"/>
                <AdminUserTableItem title="Nomor Handphone" value="081234567890"/>
                <AdminUserTableItem title="Created at" value="28 Aug 2025, 14:00"/>
            </div>
        </div>
    </Fragment>;
}
