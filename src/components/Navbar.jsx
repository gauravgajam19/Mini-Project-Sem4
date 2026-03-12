import React, { useState } from 'react';
import { Zap, Menu, X } from 'lucide-react';

export default function Navbar({ currentPage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'how-it-works', label: 'How It Works' }
  ];

  const handleNav = (page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-gs-bg)]/80 backdrop-blur-xl border-b border-[var(--color-gs-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <button onClick={() => handleNav('home')} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-gs-bg)] border border-[var(--color-gs-cyan)] shadow-[0_0_15px_rgba(0,212,255,0.4)] flex items-center justify-center text-[var(--color-gs-cyan)]">
              <Zap size={20} />
            </div>
            <h1 className="text-xl font-bold text-[var(--color-gs-text-main)]">
              Group<span className="text-[var(--color-gs-cyan)]">Sync</span>
            </h1>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-[var(--color-gs-cyan)] ${
                    currentPage === link.id ? 'text-[var(--color-gs-cyan)]' : 'text-[var(--color-gs-text-muted)]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-4 pl-6 border-l border-[var(--color-gs-border)]">
              <button 
                onClick={() => handleNav('login')}
                className="text-sm font-bold text-[var(--color-gs-text-main)] hover:text-[var(--color-gs-cyan)] transition-colors"
              >
                Log In
              </button>
              <button 
                onClick={() => handleNav('signup')}
                className="px-5 py-2.5 bg-[var(--color-gs-cyan)] text-[#0f172a] text-sm font-bold rounded-xl hover:bg-cyan-400 transition-all shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:shadow-[0_0_25px_rgba(0,212,255,0.5)]"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--color-gs-text-muted)] hover:text-[var(--color-gs-text-main)] transition-colors p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[var(--color-gs-card)] border-b border-[var(--color-gs-border)] shadow-2xl absolute top-20 left-0 right-0 animate-[slideIn_0.2s_ease-out]">
          <div className="px-4 py-6 flex flex-col space-y-4">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-left text-lg font-medium px-4 py-3 rounded-xl transition-colors ${
                  currentPage === link.id ? 'bg-[var(--color-gs-cyan)]/10 text-[var(--color-gs-cyan)]' : 'text-[var(--color-gs-text-main)] hover:bg-[var(--color-gs-bg)]'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            <div className="h-px bg-[var(--color-gs-border)] my-2" />
            
            <button 
              onClick={() => handleNav('login')}
              className="w-full text-left text-lg font-bold px-4 py-3 text-[var(--color-gs-text-main)] hover:text-[var(--color-gs-cyan)] transition-colors"
            >
              Log In
            </button>
            <button 
              onClick={() => handleNav('signup')}
              className="w-full px-4 py-3 mt-2 bg-[var(--color-gs-cyan)] text-[#0f172a] text-lg font-bold rounded-xl transition-all shadow-[0_0_15px_rgba(0,212,255,0.3)]"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
