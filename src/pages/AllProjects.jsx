import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Lock, FolderOpen } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { ProjectCarousel } from '../components/common/ProjectCarousel';

const AllProjects = () => {
  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto animate-fadeIn">
        <div className="mb-12">
          <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Todos mis Proyectos
          </h1>
          <p className="text-xl text-slate-400">Listado completo de proyectos en los que he trabajado.</p>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={`${project.title}-${index}`} className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
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
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 text-xs bg-slate-700/50 text-slate-300 rounded border border-slate-700">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
                    {project.github !== '#' ? (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"><Github size={16} /> Código</a>
                    ) : (
                      <span className="flex items-center gap-2 text-sm text-slate-600 cursor-not-allowed"><Github size={16} /> Código Privado</span>
                    )}
                    {!project.isPrivate && project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors ml-auto">Visitar Sitio <ExternalLink size={16} /></a>
                    ) : (
                      <span className="text-xs text-slate-500 ml-auto italic">Acceso Restringido</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-10 text-center text-slate-300">
            <FolderOpen size={40} className="mx-auto mb-4 text-slate-500" />
            <p>Aún no hay proyectos registrados.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProjects;
