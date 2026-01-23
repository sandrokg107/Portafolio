import React from 'react';
import { Github, Linkedin, Briefcase, Zap, Mail, Download, Rocket, Heart, Coffee, ChevronDown } from 'lucide-react';

export const About = () => (
  <section id="sobre-mi" className="py-24 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
    <div className="absolute top-1/2ate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="relative group mx-auto max-w-sm w-full">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative rounded-2xl overflow-hidden aspect-square border border-slate-700 bg-slate-800 shadow-2xl">
            <img src="/src/assets/Foto.png" alt="Foto de perfil" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Inicio de un <span className="text-blue-400">gran viaje</span></h2>
          <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
            <p>¡Hola! Soy un Desarrollador Web en mis primeros pasos profesionales. En el último año, he pasado de la curiosidad a la acción, completando 3 meses de prácticas intensivas y asegurando mi primer puesto como Junior.</p>
            <p>Mi mayor fortaleza no es saberlo todo (aún), sino mi capacidad para investigar, adaptarme y aprender nuevas tecnologías rápidamente.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 mb-8">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 mt-1"><Rocket size={20} /></div>
              <div><h4 className="font-bold text-white text-sm">Crecimiento Rápido</h4><p className="text-slate-500 text-xs">Aprendiendo cada día.</p></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 mt-1"><Heart size={20} /></div>
              <div><h4 className="font-bold text-white text-sm">Pasión por el Código</h4><p className="text-slate-500 text-xs">Comprometido con la calidad.</p></div>
            </div>
          </div>
          <button className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg border border-slate-700 flex items-center gap-2 transition-all group">
            Descargar CV <Download size={18} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default About;