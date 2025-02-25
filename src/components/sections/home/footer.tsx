'use client'

import { motion } from 'framer-motion';
import {
    Mail,
    Twitter,
    Instagram,
    Linkedin,
    Github
} from 'lucide-react';
import {ThemeToggle} from "@/components/theme/theme-toggle";
import Link from "next/link";
import {LinkPreview} from "@/components/ui/about/link-preview";
import {CompanyName} from "@/Content/Hero";
import {AboutContent} from "@/Content/About";

const socialLinks = [
    { icon: Mail, href: 'mailto:contact@example.com' },
    { icon: Twitter, href: 'https://twitter.com/yourhandle' },
    { icon: Instagram, href: 'https://instagram.com/yourhandle' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourprofile' },
    { icon: Github, href: 'https://github.com/yourusername' }
];

const Footer = () => {
    return (
            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center text-slate-600 dark:text-gray-200 bg-slate-200 dark:bg-neutral-950 py-6 flex-center"
            >
                <div className={'container flex gap-8 flex-col md:flex-row items-center lg:!justify-between px-4'}>
                    <p>
                    © {new Date().getFullYear()} All Rights Reserved by Icon.
                    </p>
                    <ul className={'flex flex-wrap items-center justify-center uppercase gap-4 md:gap-8 font-semibold text-sm'}>
                        <LinkPreview url="https://www.instagram.com/theicondevs" className="duration-150 hover:tracking-widest">
                            Instagram
                        </LinkPreview>{" "}
                        <LinkPreview url="https://www.linkedin.com/in/reconfort-daniel" className="duration-150 hover:tracking-widest">
                            Linkedin
                        </LinkPreview>{" "}
                        <LinkPreview url="https://www.behance.net/reconfortdaniel" className="duration-150 hover:tracking-widest">
                            Behance
                        </LinkPreview>{" "}
                        <LinkPreview url="https://dribbble.com/Netfort" className="duration-150 hover:tracking-widest">
                            Dribbble
                        </LinkPreview>{" "}
                        <Link className={'duration-150 hover:tracking-widest'} href={'mailto:danny.reco2002@gmail.com'} target={'_self'}>Email</Link>
                        <ThemeToggle/>
                    </ul>
                </div>
            </motion.footer>
    );
};

export default Footer;