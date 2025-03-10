import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { ProjectData } from "@/Content/Project";
import Link from "next/link";
import {Dribbble, ExternalLink} from "lucide-react";
import { slugify } from "@/lib/slugify";
import TitleComponent from "@/components/ui/title-component";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

export function Projects() {

    const timelineData = ProjectData.map((project) => ({
        title: project.title,
        content: (
            <FollowerPointerCard
                title={
                    <TitleComponent
                        title={`Explore ${project.title}`}
                        avatar={project.content.ProjectArray[0].image}
                    />
                }
            >
            <Link href={`/project/${slugify(project.title)}`} className={'cursor-none'}>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    {(project.content.title).trim()}
                </p>
                <ul className={'flex flex-col items-start gap-4'}>
                    {project?.content?.contentLists?.map((item, index) => (
                        <li>{item}</li>
                    ))}
                </ul>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    {project.content.ProjectArray.map((item, index) => (
                        <Image
                            key={index}
                            src={item.image}
                            alt={item.imageAlt}
                            width={500}
                            height={500}
                            className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                    ))}
                </div>
                <div className={'flex items-start justify-start gap-4 mt-4'}>
                    <Link href={project.content.projectLink} className={'p-3 rounded-2xl border-2  border-neutral-800 dark:border-neutral-200 text-neutral-800 dark:text-neutral-200'}>
                        <ExternalLink size={12}/>
                    </Link>
                    <Link href={project.content.dribbbleLink} className={'p-3 rounded-2xl border-2 border-neutral-800 dark:border-neutral-200 text-neutral-800 dark:text-neutral-200'}>
                        <Dribbble size={12}/>
                    </Link>
                </div>
            </Link>
            </FollowerPointerCard>
        ),
    }));


    return (
        <div className="w-full">
            <Timeline data={timelineData} />
        </div>
    );
}
