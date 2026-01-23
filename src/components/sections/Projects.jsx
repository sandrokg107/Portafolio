import React from 'react';
import { Github, ExternalLink, Lock, Briefcase, Calendar, Award, Eye, ArrowRight, Zap } from 'lucide-react';
import { ProjectCarousel } from '../common/ProjectCarousel';
import { projects } from '../../data/portfolioData';

export const Projects = () => (
  <section id="proyectos" className="py-24 bg-slate-900 relative">
    <div className="max-w-6xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Portafolio</h2>
        <div className="w-20 h-1.5 bg-blue-500 rounded-full"></div>
        <p className="mt-4 text-slate-400">Proyectos en los que he participado y colaborado.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
            <ProjectCarousel images={project.images} />
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">{project.category}</span>
                {project.isPrivate && (
                  <span className="flex items-center gap-1 text-xs text-amber-500 border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 rounded-full"><Lock size={10} /> Privado</span>
                )}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 text-xs bg-slate-700/50 text-slate-300 rounded border border-slate-700">{tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
                {project.github !== "#" ? (
                  <a href={project.github} className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"><Github size={16} /> Código</a>
                ) : (
                  <span className="flex items-center gap-2 text-sm text-slate-600 cursor-not-allowed"><Github size={16} /> Código Privado</span>
                )}
                {!project.isPrivate ? (
                  <a href={project.link} className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors ml-auto">Visitar Sitio <ExternalLink size={16} /></a>
                ) : (
                  <span className="text-xs text-slate-500 ml-auto italic">Acceso Restringido</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;