import {Button} from "@/components/ui/button.tsx";
import Image from "@/components/ui/Image.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";


export default function AdminBookAddForm() {
    return <form>
        <fieldset className="flex flex-col gap-4">
            <div className="flex flex-col gap-0.5">
                <Label className="text-sm font-bold">Title</Label>
                <Input className="h-12 px-4 py-2 border border-neutral-300 rounded-xl" type="text" aria-label="Title"/>
                <p className="text-sm font-medium text-error-100"></p>
            </div>
            <div className="flex flex-col gap-0.5">
                <Label className="text-sm font-bold">Author</Label>
                <Input className="h-12 px-4 py-2 border border-neutral-300 rounded-xl" type="text" aria-label="Author"/>
                <p className="text-sm font-medium text-error-100"></p>
            </div>
            <div className="flex flex-col gap-0.5">
                <Label className="text-sm font-bold">Category</Label>
                <Input className="h-12 px-4 py-2 border border-neutral-300 rounded-xl" type="text" aria-label="Category"/>
                <p className="text-sm font-medium text-error-100"></p>
            </div>
            <div className="flex flex-col gap-0.5">
                <Label className="text-sm font-bold">Number of Pages</Label>
                <Input className="h-12 px-4 py-2 border border-neutral-300 rounded-xl" type="text" aria-label="Number of Pages"/>
                <p className="text-sm font-medium text-error-100"></p>
            </div>
            <div className="flex flex-col gap-0.5">
                <Label className="text-sm font-bold">Description</Label>
                <Textarea className="h-58 border-neutral-300 rounded-xl resize-none"/>
                <p className="text-sm font-medium text-error-100"></p>
            </div>
            <div className="flex flex-col gap-0.5">
                <Label className="text-sm font-bold">Cover Image</Label>
                <div className="flex flex-col gap-3 items-center h-36 px-6 py-4 border border-dashed border-neutral-300 rounded-xl">
                    <div className="size-10 p-2.5 border border-neutral-300 rounded-lg">
                        <Image className="size-full" src="/images/icons/icon-upload-black.png" alt="Upload Icon"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-1 w-full items-center text-sm">
                            <Button className="px-1.5 py-0 text-primary-300">Click to upload</Button>
                            <p>or drag and drop</p>
                        </div>
                        <p className="text-sm font-semibold text-center">PNG or JPG (max. 5mb)</p>
                    </div>
                </div>
                <p className="text-sm font-medium text-error-100"></p>
            </div>
            <Button className="h-12 bg-primary-300 rounded-full text-sm font-bold text-neutral-25 md:text-base" type="submit">Save</Button>
        </fieldset>
    </form>;
}
