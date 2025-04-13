"use client";

import { useState } from 'react';
import { FileText, Shield, Eye, Terminal, ChevronRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const operations = [
  {
    id: 'shadow-pivot',
    title: 'ShadowPivot',
    type: 'Tool',
    tags: ['Red Team', 'Lateral Movement', 'C2'],
    summary: 'Advanced lateral movement framework for red teams with built-in evasion capabilities.',
    signature: '@phantom',
    date: '2024-03-20',
    popularity: 95,
  },
  {
    id: 'quantum-analysis',
    title: 'Post-Quantum Cryptography Analysis',
    type: 'Paper',
    tags: ['Cryptography', 'Research', 'Quantum'],
    summary: 'Breaking down the implications of quantum computing on modern cryptographic systems.',
    signature: '@cipher',
    date: '2024-03-15',
    popularity: 88,
  },
  {
    id: 'network-ghost',
    title: 'NetworkGhost',
    type: 'Tool',
    tags: ['Recon', 'Network', 'Stealth'],
    summary: 'Stealth network reconnaissance and mapping utility with zero-detection footprint.',
    signature: '@obsidian',
    date: '2024-03-10',
    popularity: 92,
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain Attack Prevention Framework',
    type: 'Paper',
    tags: ['Research', 'Supply Chain', 'Defense'],
    summary: 'A comprehensive framework for identifying and preventing software supply chain attacks.',
    signature: '@cipher',
    date: '2024-03-05',
    popularity: 85,
  },
  {
    id: 'phantom-interceptor',
    title: 'PhantomInterceptor',
    type: 'Tool',
    tags: ['MITM', 'Network', 'Analysis'],
    summary: 'Advanced man-in-the-middle framework with protocol-specific analysis capabilities.',
    signature: '@phantom',
    date: '2024-02-28',
    popularity: 90,
  },
];

const allTypes = ['All', ...new Set(operations.map(op => op.type))];
const allTags = ['All', ...new Set(operations.flatMap(op => op.tags))];

export default function Ops() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');
  const [sortBy, setSortBy] = useState<'date' | 'popularity'>('date');

  const filteredOps = operations
    .filter(op => selectedType === 'All' || op.type === selectedType)
    .filter(op => selectedTag === 'All' || op.tags.includes(selectedTag))
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return b.popularity - a.popularity;
    });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Tool': return Shield;
      case 'Paper': return FileText;
      case 'Recon': return Eye;
      default: return Terminal;
    }
  };

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">Operations Archive</h1>
        <p className="text-gray-400 mb-12 max-w-2xl">
          A collection of our research papers, tools, and field notes. Each entry has been vetted and approved for public release.
        </p>

        {/* Filters */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-wrap gap-4 items-center">
            <Filter className="h-5 w-5 text-primary" />
            <div className="flex gap-2 flex-wrap">
              {allTypes.map(type => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(type)}
                  className={selectedType === type ? "" : "glass-card"}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-primary">#</span>
            <div className="flex gap-2 flex-wrap">
              {allTags.map(tag => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(tag)}
                  className={selectedTag === tag ? "" : "glass-card"}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSortBy(sortBy === 'date' ? 'popularity' : 'date')}
              className="text-primary"
            >
              Sort by: {sortBy === 'date' ? 'Date' : 'Popularity'}
            </Button>
          </div>
        </div>

        {/* Operations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredOps.map(op => {
            const TypeIcon = getTypeIcon(op.type);
            return (
              <Link key={op.id} href={`/ops/${op.id}`}>
                <div className="glass-card p-6 space-y-4 group hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TypeIcon className="h-5 w-5 text-primary" />
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {op.type}
                      </Badge>
                    </div>
                    <span className="text-sm text-gray-400 font-mono">{op.signature}</span>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold group-hover:text-primary transition-colors mb-2">
                      {op.title}
                    </h2>
                    <p className="text-gray-400">{op.summary}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {op.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
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
            );
          })}
        </div>
      </div>
    </main>
  );
}