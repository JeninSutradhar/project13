"use client";

import { useState } from 'react';
import { Terminal, Lock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Blackfile() {
  const [passphrase, setPassphrase] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(true);
    // In a real implementation, this would verify the passphrase
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="glass-card p-8 space-y-6">
          <div className="flex items-center gap-3 text-primary mb-4">
            <Terminal className="h-6 w-6" />
            <div className="h-3 w-3 bg-primary rounded-full animate-pulse" />
          </div>
          
          <div className="font-mono space-y-4">
            <p className="text-primary">
              > awaiting authentication<span className="animate-pulse">_</span>
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="password"
                value={passphrase}
                onChange={(e) => setPassphrase(e.target.value)}
                placeholder="Enter passphrase"
                className="bg-black/50 border-white/10 font-mono"
              />
              
              {error && (
                <div className="flex items-center gap-2 text-red-500 text-sm">
                  <AlertTriangle className="h-4 w-4" />
                  Invalid passphrase
                </div>
              )}
              
              <Button type="submit" className="w-full">
                <Lock className="mr-2 h-4 w-4" />
                Authenticate
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}