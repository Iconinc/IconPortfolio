'use client'

import { useTheme } from './theme-provider'
import clsx from 'clsx'
import { Moon, Sun, Monitor } from 'lucide-react'

type ThemeOption = 'light' | 'dark' | 'system'

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    const themeOptions = [
        {
            value: 'light' as const,
            label: 'Light',
            icon: Sun,
        },
        {
            value: 'dark' as const,
            label: 'Dark',
            icon: Moon,
        },
    ]

    const handleThemeChange = (selectedTheme: ThemeOption) => {
        try {
            if (selectedTheme === 'system') {
                localStorage.removeItem('theme')
            } else {
                localStorage.setItem('theme', selectedTheme)
            }
            setTheme(selectedTheme)
        } catch (error) {
            console.error('Error accessing localStorage:', error)
        }
    }

    return (
        <div className="flex items-center gap-1 p-4 bg-gray-100 dark:bg-gray-800 rounded-full">
            {themeOptions.map((option) => {
                const isActive = theme === option.value
                const Icon = option.icon

                return (
                    <button
                        key={option.value}
                        onClick={() => handleThemeChange(option.value)}
                        aria-label={`Switch to ${option.label} theme`}
                        aria-pressed={isActive}
                        disabled={isActive}
                        className={clsx(
                            'flex items-center gap-2 px-2 rounded-full transition-all',
                            '',
                            'disabled:opacity-100 disabled:cursor-default',
                            {
                                'shadow-sm': isActive,
                                'opacity-50 hover:opacity-100': !isActive,
                            }
                        )}
                    >
                        <Icon className={clsx(
                            'h-4 w-4',
                            isActive
                                ? 'text-blue-600 dark:text-blue-400'
                                : 'text-gray-600 dark:text-gray-400'
                        )} />
                        {/*<span className={clsx(*/}
                        {/*    'text-sm font-medium',*/}
                        {/*    isActive*/}
                        {/*        ? 'text-gray-900 dark:text-white'*/}
                        {/*        : 'text-gray-600 dark:text-gray-400'*/}
                        {/*)}>*/}
                        {/*    {option.label}*/}
                        {/*</span>*/}
                    </button>
                )
            })}
        </div>
    )
}