import {BackgroundBeamsWithCollision} from "@/components/ui/hero/background-beams-with-collision";
import {FlipWords} from "@/components/ui/hero/flip-words";
import {FloatingDock} from "@/components/ui/hero/floating-dock";
import Image from "next/image";
import {TextHoverEffect} from "@/components/ui/hero/text-hover-effect";

import {CompanyName, DockContent, HeroContent1, HeroParagraph, HeroServices} from "@/Content/Hero";

const DockItems = ({src}:{src:string}) => {
    return(
        <Image src={src} alt={`${src} Language`} width={80} height={80}/>
    )
}

export const Hero = () => {
    return (
        <section>
            <BackgroundBeamsWithCollision className={'flex-col !h-screen bg-neutral-200 dark:bg-neutral-950'}>
                <div className={'absolute w-screen left-0 top-0 h-screen z-30 pointer-events-auto'}>
                <TextHoverEffect text={'Icon'} />
                </div>
                <div className={'relative flex-center flex-col gap-8 z-40 pointer-events-none'}>
                    <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                        {HeroContent1}<br /> Scalable <FlipWords words={HeroServices}/>
                    </h1>
                    <p className={'lg:w-2/3 text-xl text-center font-medium  text-neutral-700 dark:text-slate-200'}>
                        {HeroParagraph}
                    </p>
                </div>
                <div className={'absolute bottom-0 mb-6 lg:mb-12'}>
                    <FloatingDock items={DockContent.map(item => ({
                        title: item.title,
                        icon: <DockItems src={item.icon} />,
                        href: item.path
                    }))} />

                </div>
            </BackgroundBeamsWithCollision>
        </section>
    )
}