import { MessageSquare, Star, ExternalLink } from 'lucide-react';
import { testimonials } from '../../data/portfolioData';

export const Testimonials = () => (
  <section id="testimonios" className="py-24 bg-slate-800/30">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex items-center justify-center gap-3 mb-12">
        <MessageSquare className="text-blue-400" size={28} />
        <h2 className="text-3xl font-bold text-center">Lo que dicen clientes y colaboradores</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testi, index) => (
          <div key={index} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="text-blue-500 flex gap-1">
                {[...Array(testi.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className={`text-[11px] px-2.5 py-1 rounded-full border uppercase tracking-wide ${testi.type === 'cliente' ? 'text-emerald-300 border-emerald-500/40 bg-emerald-500/10' : 'text-cyan-300 border-cyan-500/40 bg-cyan-500/10'}`}>
                {testi.type === 'cliente' ? 'Cliente' : 'Colaborador'}
              </span>
            </div>
            <p className="text-slate-300 italic mb-6 text-lg">"{testi.text}"</p>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-slate-400 font-bold">{testi.author.charAt(0)}</div>
              <div>
                <h5 className="font-bold text-white">{testi.author}</h5>
                <p className="text-xs text-slate-500 uppercase tracking-wide">{testi.role}</p>
              </div>
            </div>
            {testi.project && <p className="text-sm text-slate-400 mb-3">Proyecto: <span className="text-slate-200">{testi.project}</span></p>}
            {testi.referenceLink && testi.referenceLink !== '#' && (
              <a
                href={testi.referenceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                {testi.referenceLabel || 'Consultar referencia'} <ExternalLink size={14} />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);


export default Testimonials;