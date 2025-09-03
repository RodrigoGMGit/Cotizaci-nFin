import React from 'react';

const Section = ({ id, title, eyebrow, children }: { id: string; title: string; eyebrow?: string; children: React.ReactNode }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
    <div className="mb-10">
      {eyebrow && <div className="mb-2 text-sm text-slate-500">{eyebrow}</div>}
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900">{title}</h2>
    </div>
    {children}
  </section>
);

export default Section;
