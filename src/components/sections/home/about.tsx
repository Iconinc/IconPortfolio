import {LinkPreview} from "@/components/ui/about/link-preview";
import {CompanyName} from "@/Content/Hero";
import {AboutContent} from "@/Content/About";

export const About = () => {
    return (
        <div className="flex justify-center items-center h-[40rem] flex-col px-4 bg-neutral-200 dark:bg-neutral-900">
            <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto mb-10">
                At {" "}
                <LinkPreview url="https://iconns.netlify.app/" className="font-bold">
                    {CompanyName}
                </LinkPreview>{" "} {AboutContent}
            </p>
        </div>
    )
}