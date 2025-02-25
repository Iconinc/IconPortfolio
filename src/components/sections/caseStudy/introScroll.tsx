"use client";
import React from "react";
import Image from "next/image";
import {ContainerScroll} from "@/components/ui/caseStudy/container-scroll-animation";

interface IntroScrollProps {
    title?: string | undefined,
    image?: any,
    subTitle?: string | undefined
}

export function IntroScroll({title, image, subTitle}: IntroScrollProps) {
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-black dark:text-white">
                            {subTitle}<br/>
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                {title}
              </span>
                        </h1>
                    </>
                }
            >
                <Image
                    src={image}
                    alt={title || 'Image 1'}
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    draggable={false}
                />
            </ContainerScroll>
        </div>
    );
}
