'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'

export function Header() {
  const [isDark, setIsDark] = useState<boolean | null>(null)

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')

    const systemDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    const shouldBeDark =
      savedTheme === 'dark' ||
      (!savedTheme && systemDark)

    document.documentElement.classList.toggle('dark', shouldBeDark)

    setIsDark(shouldBeDark)
  }, [])

  const toggleDarkMode = () => {
    if (isDark === null) return

    const newTheme = !isDark

    document.documentElement.classList.toggle('dark', newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')

    setIsDark(newTheme)
  }

  // Prevent hydration mismatch
  if (isDark === null) return null

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40 animate-fade-in-down">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in-up"
          >
            Abdelkhalk
          </Link>

          {/* Navigation */}
          <nav className="hidden sm:flex items-center gap-8">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors duration-300">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors duration-300">
              Projects
            </Link>
            <Link href="#education" className="text-sm font-medium hover:text-primary transition-colors duration-300">
              Education
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors duration-300">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors duration-300">
              Contact
            </Link>
          </nav>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 border border-border/50 hover:border-primary/50 animate-scale-in"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun size={20} className="text-yellow-500" />
            ) : (
              <Moon size={20} className="text-slate-600 dark:text-slate-300" />
            )}
          </button>

        </div>
      </div>
    </header>
  )
}