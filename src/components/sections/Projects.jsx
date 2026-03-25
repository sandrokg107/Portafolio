import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, Lock, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { ProjectCarousel } from '../common/ProjectCarousel';
import { projects } from '../../data/portfolioData';

const FEATURED_LIMIT = 6;

const getCardsPerPage = () => {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

export const Projects = () => {
  const featuredProjects = useMemo(() => projects.slice(0, FEATURED_LIMIT), []);
  const duplicatedProjects = useMemo(
    () => [...featuredProjects, ...featuredProjects],
    [featuredProjects]
  );
  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const touchStartX = useRef(0);
  const SWIPE_THRESHOLD = 50;

  const maxLoopIndex = featuredProjects.length;
  const shouldAnimate = featuredProjects.length > cardsPerPage;
  const safeCurrentIndex = shouldAnimate ? currentIndex : 0;
  const translatePercentage = (safeCurrentIndex * 100) / cardsPerPage;
  const activeDotIndex = featuredProjects.length > 0 ? safeCurrentIndex % featuredProjects.length : 0;
  const visibleProjects = shouldAnimate ? duplicatedProjects : featuredProjects;

  useEffect(() => {
    const handleResize = () => setCardsPerPage(getCardsPerPage());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goPrev = () => {
    if (!shouldAnimate) return;

    setCurrentIndex((prev) => {
      const safePrev = Math.min(prev, maxLoopIndex - 1);
      return safePrev === 0 ? maxLoopIndex - 1 : safePrev - 1;
    });
  };

  const goNext = () => {
    if (!shouldAnimate) return;
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (!shouldAnimate || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 4200);

    return () => clearInterval(timer);
  }, [shouldAnimate, isPaused]);

  useEffect(() => {
    if (isTransitionEnabled) return;

    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsTransitionEnabled(true));
    });

    return () => cancelAnimationFrame(raf);
  }, [isTransitionEnabled]);

  const handleTrackTransitionEnd = () => {
    if (currentIndex < maxLoopIndex) return;
    setIsTransitionEnabled(false);
    setCurrentIndex(0);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) {
        goNext();
      } else {
        goPrev();
      }
    }

    setIsPaused(false);
  };

  return (
    <section id="proyectos" className="py-24 bg-slate-900 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 md:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Portafolio</h2>
            <div className="w-20 h-1.5 bg-blue-500 rounded-full"></div>
            <p className="mt-4 text-slate-400">Proyectos destacados (máximo 6) en formato carrusel.</p>
          </div>
          <Link to="/proyectos" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium">
            Ver todos los proyectos <ArrowRight size={18} />
          </Link>
        </div>

        {featuredProjects.length > 0 && (
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {shouldAnimate && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-slate-800 border border-slate-700 text-slate-200 hover:text-white hover:border-blue-400 transition-colors"
                  aria-label="Proyectos anteriores"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-slate-800 border border-slate-700 text-slate-200 hover:text-white hover:border-blue-400 transition-colors"
                  aria-label="Siguientes proyectos"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}

            <div className="overflow-hidden">
              <div
                className={`flex ${isTransitionEnabled ? 'transition-transform duration-[1400ms] ease-linear' : 'transition-none'}`}
                style={{ transform: `translateX(-${translatePercentage}%)` }}
                onTransitionEnd={handleTrackTransitionEnd}
              >
                {visibleProjects.map((project, index) => (
                  <div
                    key={`${project.title}-${index}`}
                    className="shrink-0 px-3"
                    style={{ width: `${100 / cardsPerPage}%` }}
                  >
                    <div className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 h-full">
                      <ProjectCarousel images={project.images} />
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">{project.category}</span>
                          {project.isPrivate && (
                            <span className="flex items-center gap-1 text-xs text-amber-500 border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 rounded-full"><Lock size={10} /> Privado</span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 text-xs bg-slate-700/50 text-slate-300 rounded border border-slate-700">{tag}</span>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
                          {project.github !== "#" ? (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"><Github size={16} /> Código</a>
                          ) : (
                            <span className="flex items-center gap-2 text-sm text-slate-600 cursor-not-allowed"><Github size={16} /> Código Privado</span>
                          )}
                          {!project.isPrivate && project.link ? (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors ml-auto">Visitar Sitio <ExternalLink size={16} /></a>
                          ) : (
                            <span className="text-xs text-slate-500 ml-auto italic">Acceso Restringido</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {shouldAnimate && (
              <div className="flex justify-center gap-2 mt-6">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${index === activeDotIndex ? 'w-6 bg-blue-400' : 'w-2 bg-slate-600 hover:bg-slate-400'}`}
                    aria-label={`Ir al proyecto ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;