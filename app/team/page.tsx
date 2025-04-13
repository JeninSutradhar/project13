"use client";

import { useState } from 'react';
import { Terminal, Shield, Lock, Network, Bug, Brain, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const leadership = [
  {
    role: 'Infrastructure Lead',
    codename: '@obsidian',
    icon: Network,
    description: 'Network architecture and infrastructure security',
    specialties: ['Network Security', 'Infrastructure Design', 'System Hardening'],
  },
  {
    role: 'Research Director',
    codename: '@phantom',
    icon: Bug,
    description: 'Vulnerability research and exploit development',
    specialties: ['Exploit Development', 'Zero-Day Research', 'Red Team Ops'],
  },
  {
    role: 'Security Architect',
    codename: '@cipher',
    icon: Lock,
    description: 'Cryptography and secure systems design',
    specialties: ['Cryptography', 'Protocol Design', 'Security Architecture'],
  },
];

const contributors = [
  {
    role: 'Red Team Lead',
    codename: '@shadow',
    icon: Shield,
  },
  {
    role: 'Development Lead',
    codename: '@matrix',
    icon: Terminal,
  },
  {
    role: 'Threat Intel Analyst',
    codename: '@oracle',
    icon: Brain,
  },
];

export default function Team() {
  const [activeLeader, setActiveLeader] = useState<string | null>(null);

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">Our Team</h1>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Meet our elite team of cybersecurity specialists. For security reasons, we operate under aliases.
        </p>

        {/* Leadership Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Leadership</h2>
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
                  <p className="text-gray-400">{leader.description}</p>
                  <div className={`space-y-2 transition-opacity duration-300 ${
                    activeLeader === leader.codename ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <p className="text-sm text-primary">Specialties:</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {leader.specialties.map((specialty, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <ChevronRight className="h-3 w-3" />
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contributors Section */}
        <section className="border-t border-white/10 pt-20">
          <h2 className="text-2xl font-bold mb-8">Contributors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contributors.map((member) => {
              const Icon = member.icon;
              return (
                <div key={member.codename} className="glass-card p-6 space-y-4">
                  <Icon className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">{member.role}</h3>
                    <p className="text-primary/80 font-mono text-sm">{member.codename}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 italic">
              "Remaining members are undisclosed for operational security."
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}