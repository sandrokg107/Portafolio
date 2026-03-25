import { X, ExternalLink, FileText } from 'lucide-react';

// --- Modal de Certificados ---
export const CertificateModal = ({ cert, onClose }) => {
  if (!cert) return null;

  const isPdf = typeof cert.image === 'string' && /\.pdf($|\?)/i.test(cert.image);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-700 rounded-2xl w-[min(92vw,980px)] h-[min(86vh,760px)] overflow-hidden relative flex flex-col shadow-2xl animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 md:p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900 shrink-0">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">{cert.name}</h3>
            <p className="text-slate-400 text-sm">
              {cert.issuer} • {cert.year}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-hidden bg-slate-950 p-4 flex items-center justify-center">
          {cert.image ? (
            isPdf ? (
              <iframe
                src={cert.image}
                scrolling="no"
                className="w-full h-full rounded-lg border border-slate-800"
                style={{ overflow: 'hidden' }}
              />
            ) : (
              <img
                src={cert.image}
                alt={`Certificado de ${cert.name}`}
                className="w-full h-full object-contain rounded-lg shadow-lg border border-slate-800 select-none"
                draggable={false}
              />
            )
          ) : (
            <div className="text-slate-500 flex flex-col items-center">
              <FileText size={48} className="mb-2 opacity-50" />
              <p>Imagen no disponible</p>
            </div>
          )}
        </div>
        <div className="p-4 border-t border-slate-800 bg-slate-900 flex justify-end gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-slate-300 hover:text-white font-medium"
          >
            Cerrar
          </button>
          {cert.link !== '#' && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium flex items-center gap-2 transition-colors"
            >
              Verificar en Sitio Oficial <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
