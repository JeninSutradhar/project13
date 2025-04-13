"use client";

import { useState } from 'react';
import { Terminal, Shield, Lock, Network, Bug, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const timeline = [
  {
    year: '2023',
    title: 'Formation',
    description: 'Formed out of necessity and obsession.',
  },
  {
    year: '2023',
    title: 'First Operation',
    description: 'Successfully identified and documented critical infrastructure vulnerabilities.',
  },
  {
    year: '2024',
    title: 'Global Expansion',
    description: 'Extended operations across multiple continents.',
  },
];

const philosophy = [
  {
    title: 'Purpose',
    content: 'We break things to understand them. Our focus is purely technical, driven by curiosity and necessity.',
  },
  {
    title: 'Approach',
    content: 'We are not activists, we are not influencers. Our work speaks through code and documentation.',
  },
  {
    title: 'Ethics',
    content: 'Responsible disclosure. Calculated impact. No collateral damage.',
  },
];

const structure = [
  {
    role: 'Infrastructure',
    icon: Network,
    description: 'Network architecture and security systems',
  },
  {
    role: 'Research',
    icon: Bug,
    description: 'Vulnerability research and exploit development',
  },
  {
    role: 'Development',
    icon: Terminal,
    description: 'Tool development and automation',
  },
];

export default function About() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">About CypherSec</h1>
        
        {/* Timeline Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Timeline</h2>
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div
                key={index}
                className="glass-card p-6 relative"
              >
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-primary" />
                    {index !== timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-primary/20 mt-2" />
                    )}
                  </div>
                  <div>
                    <span className="text-primary font-mono text-sm">{event.year}</span>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-400">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mb-20 border-t border-white/10 pt-20">
          <h2 className="text-2xl font-bold mb-8">Collective Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 space-y-4"
                onMouseEnter={() => setActiveSection(item.title)}
                onMouseLeave={() => setActiveSection(null)}
              >
                <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                <p className="text-gray-400">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Structure Section */}
        <section className="mb-20 border-t border-white/10 pt-20">
          <h2 className="text-2xl font-bold mb-8">Organizational Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {structure.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="glass-card p-6 space-y-4">
                  <Icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Membership Section */}
        <section className="border-t border-white/10 pt-20">
          <div className="glass-card p-8 max-w-3xl mx-auto text-center space-y-6">
            <Lock className="h-12 w-12 text-primary mx-auto" />
            <h2 className="text-2xl font-bold">Membership</h2>
            <p className="text-gray-400">
              CypherSec operates on an invite-only basis. We do not accept applications.
              Our members are carefully selected based on their expertise and alignment with our objectives.
            </p>
            <p className="text-primary font-mono text-sm">
              "You'll know if we're interested."
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}