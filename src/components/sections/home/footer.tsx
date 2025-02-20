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
                className="text-center text-slate-600 dark:text-gray-400 bg-slate-200 dark:bg-neutral-950 py-6 flex-center"
            >
                <div className={'container flex gap-8 flex-col md:flex-row items-center lg:!justify-between px-4'}>
                    <p>
                    © {new Date().getFullYear()} All Rights Reserved by Icon.
                    </p>
                    <ul className={'flex flex-wrap items-center justify-center uppercase gap-4 md:gap-8 font-semibold text-sm'}>
                        <Link className={'duration-150 hover:tracking-widest'} href={'https://www.instagram.com/theicondevs'} target={'_self'}>Instagram</Link>
                        <Link className={'duration-150 hover:tracking-widest'} href={'https://www.linkedin.com/in/reconfort-daniel'} target={'_self'}>Linkedin</Link>
                        <Link className={'duration-150 hover:tracking-widest'} href={'https://www.behance.net/reconfortdaniel'} target={'_self'}>Behance</Link>
                        <Link className={'duration-150 hover:tracking-widest'} href={'https://dribbble.com/Netfort'} target={'_self'}>Dribbble</Link>
                        <Link className={'duration-150 hover:tracking-widest'} href={'mailto:theiconcompany.inc@gmail.com'} target={'_self'}>Email</Link>
                        <ThemeToggle/>
                    </ul>
                </div>
            </motion.footer>
    );
};

export default Footer;