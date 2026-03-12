import React from 'react';
import { Zap, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-[var(--color-gs-card)] border-t border-[var(--color-gs-border)] py-12 px-4 sm:px-6 lg:px-8 mt-20 relative overflow-hidden">
      {/* Subtle Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-[var(--color-gs-violet)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-1 border-r-0 md:border-r border-[var(--color-gs-border)] pr-0 md:pr-10">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-gs-bg)] border border-[var(--color-gs-cyan)] flex items-center justify-center text-[var(--color-gs-cyan)] shadow-[0_0_10px_rgba(0,212,255,0.2)]">
                <Zap size={16} />
              </div>
              <h2 className="text-lg font-bold text-[var(--color-gs-text-main)]">
                Group<span className="text-[var(--color-gs-cyan)]">Sync</span>
              </h2>
            </button>
            <p className="text-[var(--color-gs-text-muted)] text-sm leading-relaxed max-w-xs">
              The premier platform for university students to form high-performance
              hackathon teams based on complementary skills and interests.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1">
            <h3 className="text-[var(--color-gs-text-main)] font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-[var(--color-gs-text-muted)]">
              <li><button onClick={() => onNavigate('home')} className="hover:text-[var(--color-gs-cyan)] transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-[var(--color-gs-cyan)] transition-colors">About</button></li>
              <li><button onClick={() => onNavigate('how-it-works')} className="hover:text-[var(--color-gs-cyan)] transition-colors">How It Works</button></li>
              <li><button onClick={() => onNavigate('login')} className="hover:text-[var(--color-gs-cyan)] transition-colors">Login / Sign Up</button></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="col-span-1">
            <h3 className="text-[var(--color-gs-text-main)] font-semibold mb-6">Resources</h3>
            <ul className="space-y-4 text-sm text-[var(--color-gs-text-muted)]">
              <li><button className="hover:text-[var(--color-gs-cyan)] transition-colors">FAQs</button></li>
              <li><button className="hover:text-[var(--color-gs-cyan)] transition-colors">Contact Support</button></li>
              <li><button className="hover:text-[var(--color-gs-cyan)] transition-colors">Terms of Service</button></li>
              <li><button className="hover:text-[var(--color-gs-cyan)] transition-colors">Privacy Policy</button></li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className="col-span-1">
            <h3 className="text-[var(--color-gs-text-main)] font-semibold mb-6">Social</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[var(--color-gs-bg)] border border-[var(--color-gs-border)] flex items-center justify-center text-[var(--color-gs-text-muted)] hover:text-[var(--color-gs-cyan)] hover:border-[var(--color-gs-cyan)] hover:shadow-[0_0_10px_rgba(0,212,255,0.2)] transition-all">
                <Github size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[var(--color-gs-bg)] border border-[var(--color-gs-border)] flex items-center justify-center text-[var(--color-gs-text-muted)] hover:text-sky-400 hover:border-sky-400 hover:shadow-[0_0_10px_rgba(56,189,248,0.2)] transition-all">
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[var(--color-gs-bg)] border border-[var(--color-gs-border)] flex items-center justify-center text-[var(--color-gs-text-muted)] hover:text-blue-500 hover:border-blue-500 hover:shadow-[0_0_10px_rgba(59,130,246,0.2)] transition-all">
                <Linkedin size={18} />
              </a>
            </div>
            <p className="text-xs text-[var(--color-gs-text-muted)] mt-6">
              Connect with us for updates regarding upcoming hackathons.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--color-gs-border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--color-gs-text-muted)]">
            © {new Date().getFullYear()} GroupSync Platform. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="w-2 h-2 rounded-full bg-[var(--color-gs-green)] shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span className="text-xs text-[var(--color-gs-text-muted)]">Services Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
