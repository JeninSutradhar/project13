"use client";

import { useState } from 'react';
import { Calendar, Tag, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const categories = ['All', 'Advisory', 'Research', 'Infrastructure', 'Culture'];

const blogPosts = [
  {
    id: 'emerging-threats-2024',
    title: 'Emerging Threats in 2024: A Technical Analysis',
    excerpt: 'Deep dive into the most significant cybersecurity threats emerging in 2024 and their potential impact.',
    date: '2024-03-20',
    category: 'Research',
    readTime: '12 min',
  },
  {
    id: 'zero-trust-implementation',
    title: 'Zero Trust Architecture: From Theory to Practice',
    excerpt: 'A practical guide to implementing zero trust security models in modern enterprise environments.',
    date: '2024-03-15',
    category: 'Infrastructure',
    readTime: '15 min',
  },
  {
    id: 'incident-response',
    title: 'Incident Response in the Age of AI',
    excerpt: 'How artificial intelligence is transforming cybersecurity incident response and threat detection.',
    date: '2024-03-10',
    category: 'Advisory',
    readTime: '8 min',
  },
  {
    id: 'security-culture',
    title: 'Building a Security-First Engineering Culture',
    excerpt: 'Strategies for fostering a security-conscious development environment and team culture.',
    date: '2024-03-05',
    category: 'Culture',
    readTime: '10 min',
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">Blog</h1>
        <p className="text-gray-400 mb-8 max-w-2xl">
          Technical insights, research findings, and security advisories from our team.
        </p>

        <div className="flex gap-2 mb-12 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "" : "glass-card"}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="space-y-8">
          {filteredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <div className="glass-card p-6 space-y-4 group hover:border-primary/50 transition-colors">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {post.category}
                  </Badge>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-400">{post.excerpt}</p>
                </div>

                <div className="flex items-center text-primary gap-1 text-sm">
                  Read more
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}