"use client";

import { useState } from 'react';
import { Upload, Shield, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export default function Submit() {
  const [agreed, setAgreed] = useState(false);

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">Submit Intelligence</h1>
        <div className="glass-card p-8 space-y-8">
          <div className="space-y-4">
            <Label htmlFor="intel">Intelligence Details</Label>
            <Textarea
              id="intel"
              placeholder="Provide detailed information about the security threat or vulnerability..."
              className="h-40 bg-black/50 border-white/10"
            />
          </div>

          <div className="space-y-4">
            <Label htmlFor="file">Attachments</Label>
            <div className="border-2 border-dashed border-white/10 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
              <Upload className="h-8 w-8 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-400">
                Drag and drop files here, or click to select
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Maximum file size: 50MB
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="terms"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked as boolean)}
            />
            <Label htmlFor="terms" className="text-sm text-gray-400">
              I confirm that I have the right to share this information and understand it will be handled according to security protocols
            </Label>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 flex gap-3">
            <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-200">
              For maximum security, consider using our Tor hidden service (coming soon) or encrypting your submission with our PGP key.
            </p>
          </div>

          <Button
            disabled={!agreed}
            className="w-full"
            size="lg"
          >
            <Shield className="mr-2 h-4 w-4" />
            Submit Securely
          </Button>
        </div>
      </div>
    </main>
  );
}