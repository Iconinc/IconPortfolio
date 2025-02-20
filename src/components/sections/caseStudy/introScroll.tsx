"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/caseStudy/container-scroll-animation";

export function IntroScroll() {
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-black dark:text-white">
                            Unleash the power of <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
                        </h1>
                    </>
                }
            >
                <Image
                    src={`https://cdn.dribbble.com/userupload/32746758/file/original-8e599d174c9d4c5545fabec3c3b22713.png?resize=1504x940&vertical=center`}
                    alt="hero"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    draggable={false}
                />
            </ContainerScroll>
        </div>
    );
}
