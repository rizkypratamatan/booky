import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.tsx";


export default function AdminUserPagination() {
    return <div className="flex justify-center items-center h-16 px-6 md:justify-between">
        <p className="hidden font-medium md:block">Showing 1 to 10 of 60 entries</p>
        <Pagination className="justify-end w-auto mx-0">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#"/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className="border-neutral-300" href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className="border-neutral-300" href="#" isActive>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className="border-neutral-300" href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#"/>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    </div>
}
