import { X, ExternalLink, FileText } from 'lucide-react';

// --- Modal de Certificados ---
export const CertificateModal = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative flex flex-col shadow-2xl animate-scaleIn"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 md:p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">{cert.name}</h3>
            <p className="text-slate-400 text-sm">{cert.issuer} • {cert.year}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-auto bg-slate-950 p-4 flex items-center justify-center min-h-[300px]">
          {cert.image ? (
            <img src={cert.image} alt={`Certificado de ${cert.name}`} className="max-w-full max-h-full object-contain rounded-lg shadow-lg border border-slate-800" />
          ) : (
            <div className="text-slate-500 flex flex-col items-center">
              <FileText size={48} className="mb-2 opacity-50"/>
              <p>Imagen no disponible</p>
            </div>
          )}
        </div>
        <div className="p-4 border-t border-slate-800 bg-slate-900 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 text-slate-300 hover:text-white font-medium">Cerrar</button>
          {cert.link !== "#" && (
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium flex items-center gap-2 transition-colors">
              Verificar en Sitio Oficial <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;