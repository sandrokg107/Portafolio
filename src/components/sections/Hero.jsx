import React from 'react';
import { Github, Linkedin, Briefcase, Zap, Mail, Download, Rocket, Heart, Coffee, ChevronDown } from 'lucide-react';

export const Hero = () => (
  <section id="inicio" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-green-400 uppercase bg-green-500/10 rounded-full border border-green-500/20">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        Desarrollador en Crecimiento
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
        Transformo ideas en <br/>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Código Real</span>
      </h1>
      <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
        Desarrollador Web Junior apasionado por aprender y construir soluciones digitales. Especializado en React y ecosistema moderno.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#servicios" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
          Ver Servicios <Zap size={18} />
        </a>
        <a href="#contacto" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all border border-slate-700 flex items-center justify-center gap-2">
          Contactar <Mail size={18} />
        </a>
      </div>
      <div className="mt-12 flex justify-center gap-6 text-slate-500">
        <a href="#" className="hover:text-blue-400 transition-colors hover:scale-110 transform"><Github size={24} /></a>
        <a href="#" className="hover:text-blue-400 transition-colors hover:scale-110 transform"><Linkedin size={24} /></a>
        <a href="#" className="hover:text-blue-400 transition-colors hover:scale-110 transform"><Briefcase size={24} /></a>
      </div>
    </div>
  </section>
);

export default Hero;