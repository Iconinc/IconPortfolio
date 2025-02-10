import {IntroScroll} from "@/components/sections/caseStudy/introScroll";
import {Details} from "@/components/sections/caseStudy/details";
import {Testimonials} from "@/components/sections/home/testimonials";
import {Teams} from "@/components/sections/caseStudy/teams";

export default function CaseStudy() {
    return (
        <section className={'bg-neutral-200 dark:bg-neutral-950'}>
            <IntroScroll/>
            <Details/>
            <Testimonials/>
            <Teams/>
        </section>
    );
}
