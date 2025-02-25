'use client'

import { IntroScroll } from "@/components/sections/caseStudy/introScroll";
import { Details } from "@/components/sections/caseStudy/details";
import { Testimonials } from "@/components/sections/home/testimonials";
import { Teams } from "@/components/sections/caseStudy/teams";
import { useRouter } from "next/navigation";
import { ProjectData } from "@/Content/Project";
import { slugify } from "@/lib/slugify";

export default function CaseStudy({ params }: { params: { slug: string } }) {
    const router = useRouter();

    // Ensure we find the correct project based on the slug
    const project = ProjectData.find(p => slugify(p.title) === params.slug);

    if (!project) {
        return <h1 className="text-center w-full h-full flex-center font-bold ">Project not found</h1>;
    }

    return (
        <section className="bg-neutral-200 dark:bg-neutral-950 p-6">
            <IntroScroll title={project?.title} image={project?.content.ProjectArray[0].image} subTitle={project?.content.title}/>
            <Details
                problem={project.content.Problem}
                solution={project.content.Solution}
                conclusion={project.content.Conclusion}
                gallery={project.content.ProjectArray}/>
            <Testimonials />
            {/*<Teams />*/}
        </section>
    );
}
