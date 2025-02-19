import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import {TestimonialsContent} from "@/Content/Testimonial";

export function Testimonials() {

    return (
        <section className={'dark:bg-neutral-900'}>
            <AnimatedTestimonials testimonials={TestimonialsContent} />
        </section>
            );
}
