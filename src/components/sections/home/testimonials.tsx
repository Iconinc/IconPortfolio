import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import {TestimonialsContent} from "@/Content/Testimonial";

export function Testimonials() {

    return (
        <section className={'bg-neutral-100 dark:bg-neutral-950'}>
            <AnimatedTestimonials testimonials={TestimonialsContent} />
        </section>
            );
}
