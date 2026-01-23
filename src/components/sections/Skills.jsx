import React from 'react';
import { Github, ExternalLink, Lock, Briefcase, Calendar, Award, Eye, ArrowRight, Zap } from 'lucide-react';
import { skills } from '../../data/portfolioData';

export const Skills = () => (
  <section id="habilidades" className="py-24 bg-slate-800/50 border-y border-slate-800">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stack Tecnológico</h2>
        <p className="text-slate-400">Herramientas con las que trabajo</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skillGroup, index) => (
          <div key={index} className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-slate-800 rounded-lg">{skillGroup.icon}</div>
              <h3 className="text-lg font-bold">{skillGroup.name}</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {skillGroup.items.map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 group cursor-default">
                  <div className="w-12 h-12 flex items-center justify-center bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-all border border-slate-700 group-hover:border-blue-500/50 group-hover:scale-110">
                    {item.img ? (
                      <img src={item.img} alt={item.name} className="w-7 h-7 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                    ) : (
                      <span className="text-slate-400 group-hover:text-blue-400 transition-colors">{item.icon}</span>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-500 text-center font-medium group-hover:text-slate-300 transition-colors">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;