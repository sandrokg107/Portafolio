import React, { useState } from 'react';
import { MessageSquare, Star, Mail, Linkedin, Send, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      // Enviar email al administrador
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Admin',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Enviar respuesta automática al cliente
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
        {
          to_name: formData.name,
          to_email: formData.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-3xl font-bold mb-4">Hablemos de tu Proyecto</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">¿Tienes una idea en mente o necesitas mejorar tu plataforma actual? Cuéntame sobre tus objetivos.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-slate-300"><div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-blue-400"><Mail size={18} /></div><span>sandrokg107@gmail.com</span></div>
                <div className="flex items-center gap-4 text-slate-300"><div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-blue-400"><Linkedin size={18} /></div><span>/in/tunombre</span></div>
              </div>
            </div>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" 
                  placeholder="Tu Nombre / Empresa"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" 
                  placeholder="Email Profesional"
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4" 
                  required 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" 
                  placeholder="Detalles del Proyecto..."
                ></textarea>
              </div>
              
              {formStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                  <AlertCircle size={18} />
                  <span>Error al enviar. Por favor, intenta de nuevo.</span>
                </div>
              )}

              <button 
                type="submit" 
                disabled={formStatus === 'submitting' || formStatus === 'success'} 
                className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                  formStatus === 'success' 
                    ? 'bg-green-500 text-white' 
                    : formStatus === 'error'
                    ? 'bg-blue-600 hover:bg-blue-500 text-white'
                    : 'bg-blue-600 hover:bg-blue-500 text-white'
                } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {formStatus === 'submitting' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : formStatus === 'success' ? (
                  '✓ ¡Mensaje Enviado!'
                ) : (
                  <>
                    Solicitar Cotización <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;