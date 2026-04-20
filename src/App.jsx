import { useEffect, useRef } from 'react'

const experiences = [
  {
    period: 'Atual',
    role: 'Product Designer e Front-end',
    company: 'Atuação em produtos digitais',
    strategicLens:
      'Conectei decisões de UX com metas de negócio, reduzindo atrito em fluxos críticos e acelerando ciclos de entrega com design system reutilizável.',
    impact: 'Melhora de conversão, consistência entre squads e ganho de velocidade no handoff.',
  },
  {
    period: 'Experiência anterior',
    role: 'Designer com foco em interface e marca',
    company: 'Projetos para empresas em crescimento',
    strategicLens:
      'Transformei propostas visuais em experiências claras e memoráveis, priorizando legibilidade da oferta e diferenciação competitiva.',
    impact: 'Elevação de percepção de valor e narrativa de produto mais sólida em canais digitais.',
  },
  {
    period: 'Início de carreira',
    role: 'Criação visual e execução digital',
    company: 'Times multidisciplinares',
    strategicLens:
      'Desenvolvi repertório de execução ponta a ponta, atuando entre conceito, prototipação e implementação para reduzir retrabalho.',
    impact: 'Comunicação mais alinhada entre produto, marketing e desenvolvimento.',
  },
]

const cases = [
  {
    title: 'Sistema de experiência digital',
    description:
      'Estruturei uma base visual modular com componentes escaláveis para manter consistência e reduzir custo de manutenção.',
  },
  {
    title: 'Reposicionamento de marca no digital',
    description:
      'Reorquestrei linguagem visual e arquitetura de conteúdo para reforçar proposta de valor e melhorar leitura estratégica.',
  },
  {
    title: 'Fluxo de conversão orientado a resultado',
    description:
      'Priorizei pontos de decisão no funil e redesenhei interfaces com foco em clareza, prova de valor e confiança.',
  },
]

const portfolioFrames = [
  { src: '/assets/bella-have.png', alt: 'Projeto Bella Have' },
  { src: '/assets/comollati.png', alt: 'Projeto Comollati' },
  { src: '/assets/g4la.png', alt: 'Projeto G4LA' },
  { src: '/assets/magventure.png', alt: 'Projeto Magventure' },
  { src: '/assets/milltickets.png', alt: 'Projeto Milltickets' },
]

function App() {
  const horizontalSectionRef = useRef(null)
  const horizontalTrackRef = useRef(null)
  const horizontalViewportRef = useRef(null)

  useEffect(() => {
    const section = horizontalSectionRef.current
    const track = horizontalTrackRef.current
    const viewport = horizontalViewportRef.current

    if (!section || !track || !viewport) {
      return undefined
    }

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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-8rem] top-[-8rem] h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-20 right-[-7rem] h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl"
      />
      <div aria-hidden="true" className="rb-grid-overlay pointer-events-none absolute inset-0 opacity-40" />

      <header className="mx-auto mb-20 w-full max-w-6xl border-b border-zinc-800 px-6 pt-10 pb-14 md:px-12">
        <p
          className="mb-4 text-xs uppercase tracking-[0.24em] text-zinc-500"
        >
          Elias Colturato / Portfolio
        </p>
        <h1
          className="max-w-4xl text-4xl font-medium leading-tight tracking-tight md:text-6xl"
        >
          Design e produto com visao estrategica para escalar marcas e experiencias digitais.
        </h1>
        <p
          className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400"
        >
          Portfolio pessoal construindo narrativas de impacto real: clareza de problema, racional de decisao
          e resultado para negocio.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-zinc-400">
          <span className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2">UI Direction</span>
          <span className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2">Product Thinking</span>
          <span className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2">Brand Systems</span>
        </div>
      </header>

      <section
        ref={horizontalSectionRef}
        className="relative mb-20"
        style={{ height: 'calc(100vh + var(--scroll-distance, 1200px))' }}
      >
        <div className="sticky top-0 h-screen">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
            <div className="mx-auto w-full max-w-6xl px-6 md:px-12">
            <div className="mb-8 flex items-center justify-between border-b border-zinc-800 pb-4">
              <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500">Projetos visuais</h2>
              <p className="text-sm text-zinc-500">Scroll vertical movendo cards no eixo X</p>
            </div>

              <div
                ref={horizontalViewportRef}
                className="rb-glass-frame relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/70 p-4 md:p-5"
              >
              <div ref={horizontalTrackRef} className="flex w-max gap-4 will-change-transform md:gap-5">
                {portfolioFrames.map((frame) => (
                  <article
                    key={frame.src}
                    className="group w-[58vw] max-w-[320px] min-w-[240px] shrink-0 overflow-hidden rounded-lg border border-zinc-700 bg-zinc-950 md:w-[34vw]"
                  >
                    <img
                      src={frame.src}
                      alt={frame.alt}
                      loading="lazy"
                      className="h-[56vh] min-h-[420px] w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
                    />
                  </article>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-20 w-full max-w-6xl px-6 md:px-12">
        <div className="mb-8 flex items-center justify-between border-b border-zinc-800 pb-4">
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500">Experiencias</h2>
          <p className="text-sm text-zinc-500">Veja minhas experiencias profissionais</p>
        </div>
        <div className="space-y-4">
          {experiences.map((item) => (
            <article
              key={item.role}
              className="group rounded-md border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-500"
            >
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

      {/* <section className="mx-auto mb-20 w-full max-w-6xl px-6 md:px-12">
        <div className="mb-8 border-b border-zinc-800 pb-4">
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500">Casos de destaque</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {cases.map((caseItem) => (
            <article
              key={caseItem.title}
              className="rounded-md border border-zinc-800 bg-zinc-900 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-500"
            >
              <h3 className="mb-3 text-lg leading-tight">{caseItem.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{caseItem.description}</p>
            </article>
          ))}
        </div>
      </section> */}

      <footer className="mx-auto w-full max-w-6xl border-t border-zinc-800 px-6 pt-8 pb-10 md:px-12">
        <p className="text-sm text-zinc-400">Vamos conversar sobre produto, design e impacto de negocio.</p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <a
            className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 transition hover:border-zinc-400"
            href="https://www.linkedin.com/in/eliascolturato/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 transition hover:border-zinc-400"
            href="https://github.com/EliasColturato"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 transition hover:border-zinc-400"
            href="mailto:elias_junior_sc@hotmail.com"
          >
            Email
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App
