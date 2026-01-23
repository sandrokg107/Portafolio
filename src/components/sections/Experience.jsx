import React from 'react';
import { Github, ExternalLink, Lock, Briefcase, Calendar, Award, Eye, ArrowRight, Zap } from 'lucide-react';
import { experience, allCertificates } from '../../data/portfolioData';
import { useNavigate } from 'react-router-dom';

export const Experience = ({ onSelectCert }) => {
  const navigate = useNavigate();
  const featuredCertificates = allCertificates.slice(0, 4);

  return (
    <section id="experiencia" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-blue-400" size={32} />
              <h2 className="text-3xl font-bold">Trayectoria</h2>
            </div>
            <div className="space-y-8 border-l-2 border-slate-800 ml-3 pl-8 relative">
              {experience.map((job, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-slate-900 border-4 border-blue-500"></div>
                  <h3 className="text-xl font-bold text-white mb-1">{job.role}</h3>
                  <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-3">
                    <span>{job.company}</span><span>•</span><span className="flex items-center gap-1"><Calendar size={14}/> {job.period}</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-sm">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3"><Award className="text-blue-400" size={32} /><h2 className="text-3xl font-bold">Certificaciones</h2></div>
                <button onClick={() => navigate('/certificaciones')} className="text-sm font-medium text-blue-400 hover:text-white flex items-center gap-1 transition-colors">
                  Ver todas ({allCertificates.length}) <ArrowRight size={16} />
                </button>
              </div>
              <div className="grid gap-4">
                {featuredCertificates.map((cert, index) => (
                  <div key={index} onClick={() => onSelectCert(cert)} className="bg-slate-800 p-5 rounded-xl border border-slate-700 flex items-start gap-4 transition-all group hover:border-blue-500 hover:bg-slate-800/80 cursor-pointer">
                    <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors"><Award size={24} /></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-lg leading-tight mb-1 group-hover:text-blue-400 transition-colors">{cert.name}</h4>
                        <Eye size={16} className="text-slate-500 group-hover:text-blue-400 transition-colors" />
                      </div>
                      <p className="text-slate-400 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => navigate('/certificaciones')} className="w-full mt-4 py-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-lg text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2">
                Ver más certificaciones
              </button>
            </div>
            <div className="p-6 bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-xl border border-green-500/30 flex items-center gap-4">
              <div className="p-3 bg-green-500/20 rounded-full text-green-400"><Zap size={24} /></div>
              <div><h4 className="font-bold text-lg text-green-400">¿Tienes un proyecto urgente?</h4><p className="text-slate-400 text-sm">Tengo disponibilidad limitada para nuevos clientes.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;