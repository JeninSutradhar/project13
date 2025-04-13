"use client";

import { useState, useEffect } from 'react';
import { Terminal, Shield, Archive, FileText, Users, Brain, Lock, AlertTriangle, ChevronRight, Download, Calendar, Tag, Cpu, Eye, BookOpen, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const services = [
  {
    title: 'Offensive Security',
    description: 'Red team, pentesting, tool drops',
    icon: Shield,
  },
  {
    title: 'Recon & Surveillance',
    description: 'Passive data collection, OSINT, surveillance networks',
    icon: Eye,
  },
  {
    title: 'Research & Publication',
    description: 'Whitepapers, docs, guides, field notes',
    icon: BookOpen,
  },
];

const featuredOps = [
  {
    id: 'shadow-pivot',
    title: 'ShadowPivot',
    type: 'Tool',
    description: 'Advanced lateral movement framework for red teams',
    date: '2024-03-20',
    signature: '@phantom',
  },
  {
    id: 'quantum-analysis',
    title: 'Post-Quantum Cryptography Analysis',
    type: 'Research',
    description: 'Breaking down the implications of quantum computing on modern cryptography',
    date: '2024-03-15',
    signature: '@cipher',
  },
  {
    id: 'network-ghost',
    title: 'NetworkGhost',
    type: 'Tool',
    description: 'Stealth network reconnaissance and mapping utility',
    date: '2024-03-10',
    signature: '@obsidian',
  },
];

const leadership = [
  {
    role: 'Infrastructure Lead',
    codename: '@obsidian',
    icon: Terminal,
    description: 'Network architecture and infrastructure security',
  },
  {
    role: 'Research Director',
    codename: '@phantom',
    icon: Brain,
    description: 'Vulnerability research and exploit development',
  },
  {
    role: 'Security Architect',
    codename: '@cipher',
    icon: Lock,
    description: 'Cryptography and secure systems design',
  },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeLeader, setActiveLeader] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="hero-background">
          <div className="hero-grid" />
          <div className="hero-circuit" />
          <div className="hero-scan" />
          <div className="matrix-rain" />
        </div>
        
        <div className="text-center space-y-8 max-w-4xl mx-auto parallax-container relative z-10">
          <div className="space-y-2">
            <span className="text-primary text-sm font-mono block opacity-80">[SYSTEM INITIALIZED]</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="glitch-text" data-text="CYPHERSEC">CYPHERSEC</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-mono">
              Observe. Exploit. Document. Repeat.
            </p>
          </div>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A closed collective of offensive researchers, intelligence gatherers, and underground engineers.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button
              variant="outline"
              size="lg"
              className="glass-card button-glow"
              asChild
            >
              <Link href="/ops">
                <Archive className="mr-2 h-4 w-4" />
                Access Archives
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass-card button-glow"
              asChild
            >
              <Link href="/contact">
                <Lock className="mr-2 h-4 w-4" />
                Secure Contact
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold gradient-text">Our Mission</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We exist to explore systems, expose flaws, and release knowledge. Our work spans the digital underground, 
              uncovering vulnerabilities and documenting the undocumented.
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Terminal className="h-5 w-5" />
              <span className="text-sm font-mono">EST. 2023</span>
            </div>
          </div>
          <div className="relative">
            <div className="glass-card p-8 relative z-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Cpu className="h-6 w-6" />
                  <div className="h-2 w-2 bg-primary rounded-full animate-pulse" />
                </div>
                <div className="font-mono space-y-2 text-sm">
                  <p className="text-gray-400">> initializing secure connection</p>
                  <p className="text-gray-400">> accessing mainframe</p>
                  <p className="text-gray-400">> running diagnostics</p>
                  <p className="text-primary">> system ready</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent -z-10 blur-xl" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 border-t border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="glass-card p-6 space-y-4">
                  <Icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Ops */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-12">Featured Operations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredOps.map((op) => (
              <Link key={op.id} href={`/ops/${op.id}`}>
                <div className="glass-card p-6 space-y-4 h-full group hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {op.type}
                    </Badge>
                    <span className="text-sm text-gray-400 font-mono">{op.signature}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors mb-2">
                      {op.title}
                    </h3>
                    <p className="text-gray-400">{op.description}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{op.date}</span>
                    <span className="flex items-center text-primary gap-1">
                      View Details
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-4 border-t border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold gradient-text mb-12">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader) => {
              const Icon = leader.icon;
              return (
                <div
                  key={leader.codename}
                  className="team-card glass-card p-6 space-y-4 group cursor-pointer"
                  onMouseEnter={() => setActiveLeader(leader.codename)}
                  onMouseLeave={() => setActiveLeader(null)}
                >
                  <Icon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {leader.role}
                    </h3>
                    <p className="text-primary/80 font-mono">{leader.codename}</p>
                  </div>
                  <p className={`text-gray-400 transition-opacity duration-300 ${
                    activeLeader === leader.codename ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {leader.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" className="glass-card" asChild>
              <Link href="/team">
                View Full Team
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold gradient-text">Contact</h2>
          <p className="text-gray-400">
            No job offers. No collabs. We reach out.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="glass-card" asChild>
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Secure Channel
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © 2024 CypherSec. All rights reserved.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
              Privacy
            </Link>
            <Link href="/security" className="text-sm text-gray-400 hover:text-white">
              Security
            </Link>
            <div className="flex items-center gap-2 text-sm text-yellow-500">
              <Lock className="h-4 w-4" />
              Onion Service (Coming Soon)
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}