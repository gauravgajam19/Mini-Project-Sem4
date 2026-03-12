import React from 'react';
import { ArrowRight, Users, Zap, Shield, Sparkles, Filter, Code } from 'lucide-react';

export default function Home({ onNavigate }) {
  const features = [
    {
      icon: Users,
      title: 'Discover Skilled Teammates',
      desc: 'Browse hundreds of student profiles based on precise technical skills like React, Python, or UI/UX design.',
      color: 'text-[var(--color-gs-cyan)]',
      bg: 'bg-[var(--color-gs-cyan)]/10',
      border: 'border-[var(--color-gs-cyan)]/30'
    },
    {
      icon: Zap,
      title: 'Build Teams Faster',
      desc: 'Skip the networking anxiety. Find exactly who you need to complete your hackathon team instantly.',
      color: 'text-[var(--color-gs-violet)]',
      bg: 'bg-[var(--color-gs-violet)]/10',
      border: 'border-[var(--color-gs-violet)]/30'
    },
    {
      icon: Filter,
      title: 'Skill-Based Matching',
      desc: 'Our AI matching engine pairs you with groups lacking your specific skill set for the perfect dynamic.',
      color: 'text-[var(--color-gs-amber)]',
      bg: 'bg-[var(--color-gs-amber)]/10',
      border: 'border-[var(--color-gs-amber)]/30'
    },
    {
      icon: Code,
      title: 'Cross-Discipline Collab',
      desc: 'Connect frontend developers with designers, AI researchers, and backend engineers all in one place.',
      color: 'text-[var(--color-gs-green)]',
      bg: 'bg-[var(--color-gs-green)]/10',
      border: 'border-[var(--color-gs-green)]/30'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Create Your Profile',
      desc: 'Sign up and list your technical skills, interests, and past projects.',
    },
    {
      step: '02',
      title: 'Discover Developers',
      desc: 'Use our advanced filters to find teammates with the exact skills your project requires.',
    },
    {
      step: '03',
      title: 'Form & Build',
      desc: 'Invite members to your group, lock in your team, and start building the future.',
    }
  ];

  return (
    <div className="w-full flex justify-center pb-20 overflow-x-hidden">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* --- Hero Section --- */}
        <section className="relative pt-32 pb-10 md:pt-48 md:pb-20 flex flex-col items-center text-center">
          {/* Abstract glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-gs-cyan)]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/3 w-[500px] h-[500px] bg-[var(--color-gs-violet)]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-gs-cyan)]/30 bg-[var(--color-gs-cyan)]/10 text-[var(--color-gs-cyan)] text-sm font-medium mb-8 animate-[slideInUp_0.3s_ease-out]">
            <Sparkles size={14} /> The Ultimate Student Collaboration Hub
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-[var(--color-gs-text-main)] max-w-4xl tracking-tight leading-tight mb-8 animate-[slideInUp_0.4s_ease-out]">
            Find the Perfect <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gs-cyan)] to-[var(--color-gs-violet)]">
              Hackathon Teammates
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-[var(--color-gs-text-muted)] max-w-2xl mb-10 leading-relaxed animate-[slideInUp_0.5s_ease-out]">
            Stop struggling to form a team. Connect with developers, 
            designers, and innovators. Build your dream squad in seconds, 
            and focus entirely on creating your product.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-[slideInUp_0.6s_ease-out] relative z-10">
            <button 
              onClick={() => onNavigate('signup')}
              className="px-8 py-4 bg-[var(--color-gs-cyan)] text-[#0f172a] text-lg font-bold rounded-2xl hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              Get Started <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => onNavigate('login')}
              className="px-8 py-4 bg-[var(--color-gs-card)] border-2 border-[var(--color-gs-border)] text-lg font-bold rounded-2xl text-[var(--color-gs-text-main)] hover:border-[var(--color-gs-cyan)] transition-all flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              Login to Account
            </button>
          </div>
        </section>

        {/* --- Features Grid --- */}
        <section className="relative z-10" id="features">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-gs-text-main)] mb-4">Why GroupSync?</h2>
             <p className="text-[var(--color-gs-text-muted)] max-w-2xl mx-auto">
               Everything you need to seamlessly form or join a group without the friction.
             </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="bg-[var(--color-gs-card)] border border-[var(--color-gs-border)] p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 shadow-xl relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl rounded-full opacity-20 transition-opacity group-hover:opacity-50 ${feature.bg} translate-x-10 -translate-y-10`} />
                  
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${feature.bg} ${feature.color} ${feature.border}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-gs-text-main)] mb-3">{feature.title}</h3>
                  <p className="text-[var(--color-gs-text-muted)] text-sm leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- How it Works --- */}
        <section className="relative z-10" id="how-it-works">
           <div className="bg-[var(--color-gs-card)] border border-[var(--color-gs-border)] rounded-[40px] p-8 md:p-16 relative overflow-hidden">
             
             {/* decorative accents */}
             <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-[var(--color-gs-violet)]/10 to-transparent pointer-events-none rounded-tl-full" />
             
             <div className="text-center mb-16 relative z-10">
               <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-gs-text-main)] mb-4">How it works</h2>
               <p className="text-[var(--color-gs-text-muted)] max-w-2xl mx-auto">
                 Three simple steps to go from solo hacker to a fully-equipped team.
               </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
               {steps.map((step, i) => (
                 <div key={i} className="flex gap-4">
                   <div className="text-5xl font-extrabold text-[var(--color-gs-border)] opacity-50 select-none">
                     {step.step}
                   </div>
                   <div className="pt-2">
                     <h3 className="text-xl font-bold text-[var(--color-gs-text-main)] mb-2">{step.title}</h3>
                     <p className="text-[var(--color-gs-text-muted)] text-sm">{step.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="relative z-10 text-center flex flex-col items-center">
          <Shield size={48} className="text-[var(--color-gs-green)] mb-6 opacity-80" />
          <h2 className="text-4xl font-bold text-[var(--color-gs-text-main)] mb-6 max-w-2xl">
            Ready to build your dream hackathon team?
          </h2>
          <p className="text-lg text-[var(--color-gs-text-muted)] mb-10 max-w-xl">
            Join thousands of students who have already connected and launched award-winning projects at top universities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate('signup')}
              className="px-8 py-4 bg-[var(--color-gs-cyan)] text-[#0f172a] text-lg font-bold rounded-2xl hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:-translate-y-1"
            >
              Join Now
            </button>
            <button 
              onClick={() => onNavigate('login')}
              className="px-8 py-4 bg-transparent border-2 border-[var(--color-gs-border)] text-lg font-bold rounded-2xl text-[var(--color-gs-text-main)] hover:bg-[var(--color-gs-bg)] hover:-translate-y-1 transition-all"
            >
              Login To Continue
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
