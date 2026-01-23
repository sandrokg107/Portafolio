import React from 'react';
import { Github, Linkedin, Briefcase, Zap, Mail, Download, Rocket, Heart, Coffee, ChevronDown } from 'lucide-react';
import { services } from '../../data/portfolioData';


export const Services = () => (
  <section id="servicios" className="py-24 bg-slate-800/30">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios Freelance</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Te ayudo a construir tu presencia online con dedicación y precios accesibles.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/30 hover:bg-slate-900 transition-all duration-300 group">
            <div className="bg-slate-800 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm">{service.description}</p>
            <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
              <a href="#contacto" className="text-sm text-slate-300 hover:text-white flex items-center gap-1">Consultar <ChevronDown size={14} className="-rotate-90"/></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;