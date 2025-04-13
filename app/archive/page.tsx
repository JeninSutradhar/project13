"use client";

import { useState } from 'react';
import { Terminal, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ArchiveEntry {
  id: string;
  date: string;
  title: string;
  type: string;
  author: string;
}

const archiveData: Record<string, ArchiveEntry[]> = {
  '2024': [
    {
      id: 'shadow-pivot',
      date: '2024-03-20',
      title: 'ShadowPivot: OSINT pivot tool',
      type: 'Tool',
      author: '@obsidian',
    },
    {
      id: 'quantum-analysis',
      date: '2024-03-15',
      title: 'Post-Quantum Cryptography Analysis',
      type: 'Paper',
      author: '@cipher',
    },
    {
      id: 'network-ghost',
      date: '2024-03-10',
      title: 'NetworkGhost: Stealth network mapper',
      type: 'Tool',
      author: '@phantom',
    },
  ],
  '2023': [
    {
      id: 'cradle-sniffer',
      date: '2023-12-15',
      title: 'CradleSniffer: Wi-Fi exfiltrator',
      type: 'Tool',
      author: '@phantom',
    },
    {
      id: 'zero-day-methodology',
      date: '2023-11-30',
      title: 'Zero-Day Research Methodology',
      type: 'Paper',
      author: '@cipher',
    },
  ],
};

export default function Archive() {
  const [expandedYear, setExpandedYear] = useState<string | null>('2024');

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">Complete Archive</h1>
        <p className="text-gray-400 mb-12">
          A chronological record of all public releases, ordered by date.
        </p>

        <div className="space-y-8">
          {Object.entries(archiveData).reverse().map(([year, entries]) => (
            <div key={year} className="glass-card">
              <Button
                variant="ghost"
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => setExpandedYear(expandedYear === year ? null : year)}
              >
                <div className="flex items-center gap-3">
                  <Terminal className="h-5 w-5 text-primary" />
                  <span className="text-xl font-semibold">{year}</span>
                  <span className="text-gray-400 text-sm">
                    ({entries.length} entries)
                  </span>
                </div>
                {expandedYear === year ? (
                  <ChevronDown className="h-5 w-5 text-primary" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-primary" />
                )}
              </Button>

              {expandedYear === year && (
                <div className="border-t border-white/10">
                  {entries.map((entry) => (
                    <Link key={entry.id} href={`/ops/${entry.id}`}>
                      <div className="p-4 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <span className="font-mono text-sm text-gray-400">
                              {entry.date}
                            </span>
                            <span className="font-semibold group-hover:text-primary transition-colors">
                              {entry.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-primary text-sm font-mono">
                              {entry.author}
                            </span>
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}