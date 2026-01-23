import { MessageSquare, Star, Mail, Linkedin, Send } from 'lucide-react';
import { testimonials } from '../../data/portfolioData';

export const Testimonials = () => (
  <section id="testimonios" className="py-24 bg-slate-800/30">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex items-center justify-center gap-3 mb-12">
        <MessageSquare className="text-blue-400" size={28} />
        <h2 className="text-3xl font-bold text-center">Lo que dicen mis clientes</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testi, index) => (
          <div key={index} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative">
            <div className="text-blue-500 mb-4 flex gap-1">
              {[...Array(testi.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-slate-300 italic mb-6 text-lg">"{testi.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-slate-400 font-bold">{testi.author.charAt(0)}</div>
              <div><h5 className="font-bold text-white">{testi.author}</h5><p className="text-xs text-slate-500 uppercase tracking-wide">{testi.role}</p></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);


export default Testimonials;