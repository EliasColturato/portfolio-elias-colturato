import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const assetBase = `${import.meta.env.BASE_URL}assets/`

const experiences = [
  {
    period: 'Atual',
    role: 'Product Designer e Front-end',
    company: 'Atuacao em produtos digitais',
    strategicLens:
      'Conectei decisoes de UX com metas de negocio, reduzindo atrito em fluxos criticos e acelerando ciclos de entrega com design system reutilizavel.',
    impact: 'Melhora de conversao, consistencia entre squads e ganho de velocidade no handoff.',
  },
  {
    period: 'Experiencia anterior',
    role: 'Designer com foco em interface e marca',
    company: 'Projetos para empresas em crescimento',
    strategicLens:
      'Transformei propostas visuais em experiencias claras e memoraveis, priorizando legibilidade da oferta e diferenciacao competitiva.',
    impact: 'Elevacao de percepcao de valor e narrativa de produto mais solida em canais digitais.',
  },
  {
    period: 'Inicio de carreira',
    role: 'Criacao visual e execucao digital',
    company: 'Times multidisciplinares',
    strategicLens:
      'Desenvolvi repertorio de execucao ponta a ponta, atuando entre conceito, prototipacao e implementacao para reduzir retrabalho.',
    impact: 'Comunicacao mais alinhada entre produto, marketing e desenvolvimento.',
  },
]

const portfolioFrames = [
  { src: `${assetBase}bella-have.png`, alt: 'Projeto Bella Have' },
  { src: `${assetBase}comollati.png`, alt: 'Projeto Comollati' },
  { src: `${assetBase}g4la.png`, alt: 'Projeto G4LA' },
  { src: `${assetBase}magventure.png`, alt: 'Projeto Magventure - Patient Manager', to: '/projetos/patient-manager' },
  { src: `${assetBase}milltickets.png`, alt: 'Projeto Milltickets' },
]

function HomePage() {
  const horizontalSectionRef = useRef(null)
  const horizontalTrackRef = useRef(null)
  const horizontalViewportRef = useRef(null)

  useEffect(() => {
    const section = horizontalSectionRef.current
    const track = horizontalTrackRef.current
    const viewport = horizontalViewportRef.current
    if (!section || !track || !viewport) return undefined

    const updateHorizontalScroll = () => {
      const viewportWidth = viewport.clientWidth
      const totalDistance = Math.max(track.scrollWidth - viewportWidth, 0)
      section.style.setProperty('--scroll-distance', `${totalDistance}px`)
      const sectionRect = section.getBoundingClientRect()
      const verticalScrollable = Math.max(section.offsetHeight - window.innerHeight, 1)
      const sectionScrolled = Math.min(Math.max(-sectionRect.top, 0), verticalScrollable)
      const progress = sectionScrolled / verticalScrollable
      track.style.transform = `translate3d(${-totalDistance * progress}px, 0, 0)`
    }

    updateHorizontalScroll()
    window.addEventListener('scroll', updateHorizontalScroll, { passive: true })
    window.addEventListener('resize', updateHorizontalScroll)
    return () => {
      window.removeEventListener('scroll', updateHorizontalScroll)
      window.removeEventListener('resize', updateHorizontalScroll)
    }
  }, [])

  return (
    <main className="relative min-h-screen w-full bg-zinc-950 text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute left-[-8rem] top-[-8rem] h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-20 right-[-7rem] h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
      <div aria-hidden="true" className="rb-grid-overlay pointer-events-none absolute inset-0 opacity-40" />

      <header className="mx-auto mb-20 w-full max-w-6xl border-b border-zinc-800 px-6 pt-10 pb-14 md:px-12">
        <p className="mb-4 text-xs uppercase tracking-[0.24em] text-zinc-500">Elias Colturato / Portfolio</p>
        <h1 className="max-w-4xl text-4xl font-medium leading-tight tracking-tight md:text-6xl">
          Design e produto com visao estrategica para escalar marcas e experiencias digitais.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
          Portfolio pessoal construindo narrativas de impacto real: clareza de problema, racional de decisao e resultado para negocio.
        </p>
      </header>

      <section ref={horizontalSectionRef} className="relative mb-20" style={{ height: 'calc(100vh + var(--scroll-distance, 1200px))' }}>
        <div className="sticky top-0 h-screen">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
            <div className="mx-auto w-full max-w-6xl px-6 md:px-12">
              <div className="mb-8 flex items-center justify-between border-b border-zinc-800 pb-4">
                <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500">Projetos visuais</h2>
                <p className="text-sm text-zinc-500">Clique no quarto card para ver o case completo</p>
              </div>

              <div ref={horizontalViewportRef} className="rb-glass-frame relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 md:p-5">
                <div ref={horizontalTrackRef} className="flex w-max gap-4 will-change-transform md:gap-5">
                  {portfolioFrames.map((frame, index) => {
                    const card = (
                      <article className="group relative w-[58vw] max-w-[320px] min-w-[240px] shrink-0 overflow-hidden rounded-lg border border-zinc-700 bg-zinc-950 md:w-[34vw]">
                        <img
                          src={frame.src}
                          alt={frame.alt}
                          loading="lazy"
                          className="h-[56vh] min-h-[420px] w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
                        />
                        {index === 3 && (
                          <div className="pointer-events-none absolute inset-x-3 bottom-3 rounded-md border border-fuchsia-400/50 bg-zinc-950/85 px-3 py-2 text-xs uppercase tracking-[0.16em] text-fuchsia-200">
                            Abrir case detalhado
                          </div>
                        )}
                      </article>
                    )

                    if (frame.to) {
                      return (
                        <Link key={frame.src} to={frame.to} className="block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400">
                          {card}
                        </Link>
                      )
                    }

                    return <div key={frame.src}>{card}</div>
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-20 w-full max-w-6xl px-6 md:px-12">
        <div className="mb-8 flex items-center justify-between border-b border-zinc-800 pb-4">
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500">Experiencias</h2>
          <p className="text-sm text-zinc-500">Visao estrategica para recrutador e design lead</p>
        </div>
        <div className="space-y-4">
          {experiences.map((item) => (
            <article key={item.role} className="group rounded-md border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-500">
              <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <p className="text-2xl leading-tight tracking-tight">{item.role}</p>
                  <p className="mt-1 text-sm text-zinc-500">{item.company}</p>
                </div>
                <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">{item.period}</p>
              </div>
              <p className="mb-4 max-w-3xl leading-relaxed text-zinc-300">{item.strategicLens}</p>
              <p className="text-sm text-zinc-500">{item.impact}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default HomePage
