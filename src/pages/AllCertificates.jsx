import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Award, Calendar, Eye } from 'lucide-react';
import { allCertificates } from '../data/portfolioData';
import { CertificateModal } from '../components/common/CertificateModal';

const AllCertificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCertificates = allCertificates.filter(cert => 
    cert.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    cert.issuer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto animate-fadeIn">
        <div className="mb-12">
          <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Todas mis Certificaciones
          </h1>
          <p className="text-xl text-slate-400">Un registro completo de mi formación continua.</p>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500" size={20} />
          <input 
            type="text" 
            placeholder="Buscar certificación..." 
            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid gap-4">
          {filteredCertificates.map((cert, index) => (
            <div key={index} onClick={() => setSelectedCert(cert)} className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col md:flex-row md:items-center gap-6 transition-all group hover:border-blue-500 hover:bg-slate-800/80 cursor-pointer">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0">
                <Award size={32} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="font-bold text-xl group-hover:text-blue-400 transition-colors">{cert.name}</h3>
                    <p className="text-slate-400 text-lg">{cert.issuer}</p>
                  </div>
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-medium text-slate-400 whitespace-nowrap">{cert.type}</span>
                </div>
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-700/50">
                  <span className="flex items-center gap-2 text-sm text-slate-500"><Calendar size={14} /> {cert.year}</span>
                  <span className="text-sm text-blue-400 flex items-center gap-1 group-hover:underline ml-auto">Ver Certificado <Eye size={14} /></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </div>
  );
};

export default AllCertificates;