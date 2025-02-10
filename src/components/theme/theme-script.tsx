'use client';

import Script from 'next/script';

export const ThemeScript = () => {
    const themeScript = `
    (function() {
      try {
        var savedTheme = localStorage.getItem('theme') || 'system';
        var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (savedTheme === 'system' && systemDark)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {}
    })();
  `;

    return (
        <Script
            id="theme-script"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: themeScript }}
    />
);
};