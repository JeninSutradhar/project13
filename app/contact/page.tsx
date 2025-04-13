"use client";

import { useState } from 'react';
import { Mail, Lock, AlertTriangle, Send, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
  };

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">Secure Contact</h1>
        <p className="text-gray-400 mb-12">
          For sensitive communications only. No job offers or collaboration requests.
        </p>

        <div className="glass-card p-8 space-y-8">
          {/* Contact Methods */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="font-semibold">Secure Email</p>
                <p className="text-gray-400 text-sm">
                  contact@cyphersec.protonmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <Github className="h-5 w-5 text-primary" />
              <div>
                <p className="font-semibold">GitHub</p>
                <p className="text-gray-400 text-sm">
                  Coming Soon
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="Message subject"
                  className="bg-black/50 border-white/10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  className="h-40 bg-black/50 border-white/10"
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                />
                <Label htmlFor="terms" className="text-sm text-gray-400">
                  I understand that this channel is for technical communications only
                </Label>
              </div>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-yellow-200 space-y-1">
                <p>For maximum security:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Use our PGP key for sensitive communications</li>
                  <li>Consider using our Tor hidden service (coming soon)</li>
                  <li>Avoid including personally identifiable information</li>
                </ul>
              </div>
            </div>

            <Button
              disabled={!agreed}
              className="w-full"
              size="lg"
            >
              <Lock className="mr-2 h-4 w-4" />
              Send Securely
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}