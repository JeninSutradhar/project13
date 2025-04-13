import Link from 'next/link';
import { FileText, Download, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const whitepapers = [
  {
    id: 'zero-day-detection',
    title: 'Advanced Zero-Day Detection Methodologies',
    abstract: 'An in-depth analysis of modern techniques for identifying and mitigating previously unknown security vulnerabilities.',
    date: '2024-03-15',
    tags: ['Research', 'Detection', 'Zero-Day'],
    downloadUrl: '#',
  },
  {
    id: 'quantum-cryptography',
    title: 'Quantum-Resistant Cryptographic Implementations',
    abstract: 'Exploring practical implementations of post-quantum cryptographic algorithms for enterprise systems.',
    date: '2024-02-28',
    tags: ['Cryptography', 'Quantum', 'Enterprise'],
    downloadUrl: '#',
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain Attack Prevention Framework',
    abstract: 'A comprehensive framework for identifying, preventing, and responding to software supply chain attacks.',
    date: '2024-02-10',
    tags: ['Supply Chain', 'Framework', 'Prevention'],
    downloadUrl: '#',
  },
];

export default function Whitepapers() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">Whitepapers</h1>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Technical research papers and security advisories from our team.
        </p>

        <div className="space-y-8">
          {whitepapers.map((paper) => (
            <div key={paper.id} className="glass-card p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-semibold">{paper.title}</h2>
                  </div>
                  <p className="text-sm text-gray-400">{paper.date}</p>
                </div>
                <Button variant="outline" size="sm" className="glass-card" asChild>
                  <Link href={paper.downloadUrl}>
                    <Download className="mr-2 h-4 w-4" />
                    PDF
                  </Link>
                </Button>
              </div>

              <p className="text-gray-400">{paper.abstract}</p>

              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="h-4 w-4 text-primary" />
                {paper.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}