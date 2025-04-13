"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Terminal, Archive, FileText, Users, BookOpen, Mail, ChevronRight } from 'lucide-react';

export function NavHeader() {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/about', label: 'About', icon: BookOpen },
    { href: '/ops', label: 'Ops', icon: Archive },
    { href: '/team', label: 'Team', icon: Users },
    { href: '/archive', label: 'Archive', icon: FileText },
    { href: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="w-10 h-10 inline-block">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <g stroke="currentColor" strokeWidth="16" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M50 40 L100 20 L150 40 L150 120 Q100 180 50 120 Z" />
                <path d="M75 70 L125 110" />
              </g>
            </svg>
          </span>
          <span className="glitch-text" data-text="CYPHERSEC">CYPHERSEC</span>
        </Link>

        <div className="flex gap-6">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-2 text-sm transition-colors",
                pathname === href ? "text-primary" : "text-muted-foreground hover:text-primary"
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="hidden md:inline">{label}</span>
            </Link>
          ))}
        </div>
      </nav>
      
      {/* Scroll Progress Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/5">
        <div 
          className="h-full bg-gradient-to-r from-primary to-[#00BFFF] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
}