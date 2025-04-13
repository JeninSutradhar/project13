import { Shield, Code, Lock, Network, Bug, Brain } from 'lucide-react';

const teamMembers = [
  {
    role: 'Infrastructure Lead',
    handle: '@obsidian',
    icon: Network,
    description: 'Architecting secure systems and network infrastructure',
  },
  {
    role: 'Security Researcher',
    handle: '@phantom',
    icon: Bug,
    description: 'Vulnerability research and exploit development',
  },
  {
    role: 'Cryptography Specialist',
    handle: '@cipher',
    icon: Lock,
    description: 'Implementing and auditing cryptographic solutions',
  },
  {
    role: 'Red Team Lead',
    handle: '@shadow',
    icon: Shield,
    description: 'Offensive security and penetration testing',
  },
  {
    role: 'Development Lead',
    handle: '@matrix',
    icon: Code,
    description: 'Secure software development and code auditing',
  },
  {
    role: 'Threat Intel Analyst',
    handle: '@oracle',
    icon: Brain,
    description: 'Threat intelligence and strategic analysis',
  },
];

export default function Teams() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold gradient-text mb-8">Our Team</h1>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Meet our elite team of cybersecurity specialists. For security reasons, we operate under aliases.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map(({ role, handle, icon: Icon, description }) => (
            <div key={handle} className="glass-card p-6 space-y-4 group hover:border-primary/50 transition-colors">
              <Icon className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{role}</h3>
                <p className="text-primary/80 font-mono">{handle}</p>
              </div>
              <p className="text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}