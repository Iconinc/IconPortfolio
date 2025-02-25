import { IntroScroll } from "@/components/sections/caseStudy/introScroll";
import { Details } from "@/components/sections/caseStudy/details";
import { Testimonials } from "@/components/sections/home/testimonials";
import { ProjectData } from "@/Content/Project";
import { slugify } from "@/lib/slugify";
import {Metadata} from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const project = ProjectData.find(p => slugify(p.title) === params.slug);
    return {
        title: project ? project.title : "Project Not Found",
    };
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
    const project = ProjectData.find(p => slugify(p.title) === params.slug);

    if (!project) {
        return <h1 className="text-center w-full h-full flex-center font-bold">Project not found</h1>;
    }

    return (
        <section className="bg-neutral-200 dark:bg-neutral-950 p-6">
            <IntroScroll title={project.title} image={project.content.ProjectArray[0].image} subTitle={project.content.title}/>
            <Details
                problem={project.content.Problem}
                solution={project.content.Solution}
                conclusion={project.content.Conclusion}
                gallery={project.content.ProjectArray}/>
            <Testimonials />
        </section>
    );
}
