import React from 'react';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <a
    href={`#${to}`}
    className="text-sm md:text-base text-slate-600 hover:text-slate-900 transition-colors"
    onClick={(e) => {
      e.preventDefault();
      const el = document.getElementById(to);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }}
  >
    {children}
  </a>
);

export default NavLink;
