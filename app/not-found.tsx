"use client";

import { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  const [command, setCommand] = useState('');
  const errorMessage = 'root@site: 404 — target not found';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= errorMessage.length) {
        setCommand(errorMessage.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="glass-card p-8 space-y-6">
          <div className="flex items-center gap-3 text-primary mb-4">
            <Terminal className="h-6 w-6" />
            <div className="h-3 w-3 bg-primary rounded-full animate-pulse" />
          </div>
          
          <div className="font-mono space-y-4">
            <p className="text-primary">{command}<span className="animate-pulse">_</span></p>
            
            <p className="text-gray-400 terminal-glow">
              The requested resource could not be found. Would you like to:
            </p>
            
            <div className="space-y-2 text-gray-400">
              <p>1. Return to home</p>
              <p>2. Try the search function</p>
              <p>3. Report this as an issue</p>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Button variant="outline" className="glass-card" asChild>
              <Link href="/">
                Return Home
              </Link>
            </Button>
            <Button variant="outline" className="glass-card" asChild>
              <Link href="/contact">
                Report Issue
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}