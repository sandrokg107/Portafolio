import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Award, Calendar, Eye, ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { allCertificates } from '../data/portfolioData';
import { CertificateModal } from '../components/common/CertificateModal';

const PAGE_SIZE_OPTIONS = [5, 10];

const AllCertificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const filteredCertificates = useMemo(
    () =>
      allCertificates.filter(
        (cert) =>
          cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cert.issuer.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  );

  const totalPages = Math.max(1, Math.ceil(filteredCertificates.length / pageSize));
  const safeCurrentPage = Math.min(currentPage, totalPages - 1);
  const start = safeCurrentPage * pageSize;
  const end = start + pageSize;
  const paginatedCertificates = filteredCertificates.slice(start, end);

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
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(0);
            }}
          />
        </div>

        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
          <p className="text-slate-400">
            Mostrando{' '}
            <span className="text-white font-medium">{filteredCertificates.length === 0 ? 0 : start + 1}</span>
            {' '}-{' '}
            <span className="text-white font-medium">{Math.min(end, filteredCertificates.length)}</span>
            {' '}de{' '}
            <span className="text-white font-medium">{filteredCertificates.length}</span>
            {' '}certificaciones
          </p>

          <div className="flex items-center gap-3">
            <label htmlFor="page-size" className="text-slate-400">Por página</label>
            <select
              id="page-size"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(0);
              }}
              className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
            >
              {PAGE_SIZE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-4">
          {paginatedCertificates.map((cert, index) => (
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

          {filteredCertificates.length === 0 && (
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 text-center text-slate-400">
              No se encontraron certificaciones con esa búsqueda.
            </div>
          )}
        </div>

        {filteredCertificates.length > 0 && totalPages > 1 && (
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
              disabled={safeCurrentPage === 0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 text-slate-300 hover:text-white hover:border-blue-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={16} /> Anterior
            </button>

            <p className="text-slate-400 text-sm">
              Página <span className="text-white font-medium">{safeCurrentPage + 1}</span> de <span className="text-white font-medium">{totalPages}</span>
            </p>

            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
              disabled={safeCurrentPage === totalPages - 1}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 text-slate-300 hover:text-white hover:border-blue-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Siguiente <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* <Link
        to="/"
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/30 transition-colors"
        aria-label="Regresar al inicio"
      >
        <Home size={18} /> Inicio
      </Link> */}

      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </div>
  );
};

export default AllCertificates;