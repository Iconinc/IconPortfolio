"use client";
import {Card, Carousel} from "@/components/ui/blog-carousel";
import Image from "next/image";
import React from "react";

export function Blogs() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} layout={true}/>
    ));

    return (
        <div className="w-full h-full py-20 bg-neutral-100 dark:bg-neutral-950">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Recent UI/UX Projects :)
            </h2>
            <Carousel items={cards}/>
        </div>
    );
}

interface DummyContentProps {
    figma?: string,
    prototype?: string
}

const DummyContent = ({figma, prototype}: DummyContentProps) => {
    return (
        <div
            key={"dummy-content"}
            className="rounded-3xl mb-4 flex-center flex-col gap-2 p-2"
        >
            <iframe className={'border border-[rgba(0, 0, 0, 0.1)] rounded-2xl w-full'}
                    width={800} height={550}
                    src={figma}
                    allowFullScreen></iframe>

            <iframe className={'border border-[rgba(0, 0, 0, 0.1)] rounded-2xl w-full'}
                    width={800} height={550}
                    src={prototype}
                    allowFullScreen></iframe>
        </div>
    );
};

const data = [
    {
        category: "Education",
        title: "You learn more with TooNation",
        src: "/assets/too.jpg",
        content: <DummyContent
            figma={'https://embed.figma.com/design/O2ISTHLzYrPkpu76Z3rwwM/Too-Nation?node-id=0-1&embed-host=share'}
            prototype={'https://embed.figma.com/proto/O2ISTHLzYrPkpu76Z3rwwM/Too-Nation?page-id=0%3A1&node-id=1-2&embed-host=share'}/>,
    },
    {
        category: "Health",
        title: "Enhance female menstruation with Tantine.",
        src: "/assets/tantine.jpg",
        content: <DummyContent figma={'https://embed.figma.com/design/JGIC4cyjI1okmwN3ST3ye9/Tantine-app?node-id=1-4&embed-host=share'}
                               prototype={'https://embed.figma.com/proto/JGIC4cyjI1okmwN3ST3ye9/Tantine-app?node-id=485-2177&scaling=scale-down&content-scaling=fixed&page-id=1%3A4&starting-point-node-id=485%3A2185&embed-host=share'}/>,
    },
    {
        category: "Creative",
        title: "Exprole Trands with Lennox",
        src: "/assets/lennox.jpg",
        content: <DummyContent figma={'htps://embed.figma.com/design/CTw5vIPD4fN6OWDtrYl8c4/Lennox?node-id=6-45&embed-host=share'}
                               prototype={'https://embed.figma.com/proto/CTw5vIPD4fN6OWDtrYl8c4/Lennox?node-id=8-88&scaling=scale-down&content-scaling=fixed&page-id=6%3A44&embed-host=share'}/>,
    },
    {
        category: "Education",
        title: "Univease",
        src: "/assets/univease.jpg",
        figma: 'https://embed.figma.com/design/r2ssM17YvHjoX0DIbO8F8z/UnivEase?node-id=8-44&embed-host=share',
        prototype: 'https://embed.figma.com/proto/r2ssM17YvHjoX0DIbO8F8z/UnivEase?node-id=185-71&p=f&scaling=scale-down&content-scaling=fixed&page-id=8%3A44&starting-point-node-id=185%3A71&embed-host=share',
        content: <DummyContent figma={'https://embed.figma.com/design/r2ssM17YvHjoX0DIbO8F8z/UnivEase?node-id=8-44&embed-host=share'}
                               prototype={'https://embed.figma.com/proto/r2ssM17YvHjoX0DIbO8F8z/UnivEase?node-id=185-71&p=f&scaling=scale-down&content-scaling=fixed&page-id=8%3A44&starting-point-node-id=185%3A71&embed-host=share'}/>,
    },
    {
        category: "Agency",
        title: "Agakoti VPN",
        src: "/assets/agakoti.jpg",
        figma: 'https://embed.figma.com/design/wwSz8tph1jta4pUJ9O7bLP/Agakoti-VPN?node-id=4-67&embed-host=share',
        prototype: 'https://embed.figma.com/proto/wwSz8tph1jta4pUJ9O7bLP/Agakoti-VPN?page-id=4%3A67&node-id=10-51&starting-point-node-id=10%3A51&scaling=scale-down&content-scaling=fixed&embed-host=share',
        content: <DummyContent figma={'https://embed.figma.com/design/wwSz8tph1jta4pUJ9O7bLP/Agakoti-VPN?node-id=4-67&embed-host=share'}
                               prototype={'https://embed.figma.com/proto/wwSz8tph1jta4pUJ9O7bLP/Agakoti-VPN?page-id=4%3A67&node-id=10-51&starting-point-node-id=10%3A51&scaling=scale-down&content-scaling=fixed&embed-host=share'}/>,
    },
    {
        category: "Tourist",
        title: "Timeline Travel & Tours",
        src: "/assets/ttt.jpg",
        content: <DummyContent  figma={'https://embed.figma.com/design/99IzCQjbkpP2B3hpJgX9o7/TimelineTravel%26Tours?node-id=0-1&embed-host=share'}
                                prototype={'https://embed.figma.com/proto/99IzCQjbkpP2B3hpJgX9o7/TimelineTravel%26Tours?node-id=1-4&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4&embed-host=share'}/>,
    },
    {
        category: "Hiring",
        title: "Obsessed with Capital",
        src: "/assets/owc.jpg",
        content: <DummyContent  figma={'https://embed.figma.com/design/QpXKE62f9U1ZjvFo6w7RGJ/OWC?node-id=3-3&embed-host=share'}
                                prototype= {'https://embed.figma.com/proto/QpXKE62f9U1ZjvFo6w7RGJ/OWC?page-id=3%3A3&node-id=64-585&p=f&viewport=-495%2C298%2C0.15&scaling=scale-down&content-scaling=fixed&starting-point-node-id=64%3A585&embed-host=share'}/>
    },
    {
        category: "Education",
        title: "History Interaction Timeline",
        src: "/assets/hit.jpg",
        content: <DummyContent  figma={'https://embed.figma.com/design/tibbspW0iNcSqw49ebu5tx/History-Interaction?node-id=48-2&embed-host=share'}
                                prototype={'https://embed.figma.com/proto/tibbspW0iNcSqw49ebu5tx/History-Interaction?node-id=106-31182&scaling=min-zoom&content-scaling=fixed&page-id=48%3A2&embed-host=share'}/>,
    }
];
