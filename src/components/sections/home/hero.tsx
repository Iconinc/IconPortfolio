import {BackgroundBeamsWithCollision} from "@/components/ui/hero/background-beams-with-collision";
import {FlipWords} from "@/components/ui/hero/flip-words";
import {FloatingDock} from "@/components/ui/hero/floating-dock";
import Image from "next/image";
import {TextHoverEffect} from "@/components/ui/hero/text-hover-effect";

const DockItems = ({src}:{src:string}) => {
    return(
        <Image src={src} alt={'Mongo Database'} width={80} height={80}/>
    )
}

export const Hero = () => {
    return (
        <section>
            <BackgroundBeamsWithCollision className={'flex-col !h-screen bg-neutral-200 dark:bg-neutral-950'}>
                <div className={'absolute w-screen left-0 top-0 h-screen z-0'}>
                <TextHoverEffect text="ICON." />
                </div>
                <div className={'relative flex-center flex-col gap-8 z-10'}>
                    <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                        Build amazing websites <br /> at <FlipWords words={['Hello', 'Hola', 'Bonjour', 'Ciao', 'Namaste', 'Hallo', 'Salut', 'Konnichiwa']}/>
                    </h1>
                    <p className={'lg:w-2/3 text-xl text-center font-medium  text-neutral-700 dark:text-slate-200'}>Get advice from an expert in group or one-on-one settings and break through business barriers and creative block.</p>
                </div>
                <div className={'absolute bottom-0 mb-6 lg:mb-12'}>
                <FloatingDock items={[
                    {title: 'MongoDB', icon: <DockItems src={'/custom-icons/mongodb.png'}/>, href: '/about'},
                    {title: 'PostgresQL', icon: <DockItems src={'/custom-icons/postgresql.png'}/>, href: '/about'},
                    {title: 'Git', icon: <DockItems src={'/custom-icons/git.png'}/>, href: '/about'},
                    {title: 'NextJS', icon: <DockItems src={'/custom-icons/next.png'}/>, href: '/about'},
                    {title: 'NodeJS', icon: <DockItems src={'/custom-icons/nodejs.png'}/>, href: '/about'},
                    {title: 'Angular', icon: <DockItems src={'/custom-icons/angular.png'}/>, href: '/about'},
                    {title: 'TailwindCSS', icon: <DockItems src={'/custom-icons/tailwindcss.png'}/>, href: '/about'},
                    {title: 'GraphQL', icon: <DockItems src={'/custom-icons/graphql.png'}/>, href: '/about'},
                    ]}/>
                </div>
            </BackgroundBeamsWithCollision>
        </section>
    )
}