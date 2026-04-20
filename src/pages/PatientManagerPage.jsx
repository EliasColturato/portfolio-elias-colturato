import { Link } from 'react-router-dom'

const assetBase = `${import.meta.env.BASE_URL}assets/`
const magventureBase = `${assetBase}magventure/`

function PatientManagerPage() {
  return (
    <main className="relative min-h-screen w-full bg-zinc-950 pb-20 text-zinc-100">
      <div aria-hidden="true" className="pointer-events-none absolute left-[-8rem] top-[-8rem] h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div aria-hidden="true" className="rb-grid-overlay pointer-events-none absolute inset-0 opacity-40" />

      <section className="mx-auto w-full max-w-6xl px-6 pt-10 md:px-12">
        <Link to="/" className="inline-flex rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs uppercase tracking-[0.16em] text-zinc-300 transition hover:border-zinc-400">
          Voltar para Home
        </Link>

        <header className="mt-8 border-b border-zinc-800 pb-10">
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Case Study / Patient Manager</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-medium leading-tight tracking-tight md:text-6xl">Patient Manager</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-400">
            Atualizacao completa de um software de gerenciamento de clinicas para elevar usabilidade, desempenho e eficiencia operacional.
          </p>
        </header>

        <figure className="rb-glass-frame mt-10 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
          <img src={`${magventureBase}patient_mockup.png`} alt="Mockup principal do Patient Manager" className="h-auto w-full object-cover" />
        </figure>

        <section className="mt-14 space-y-5">
          <h2 className="text-2xl tracking-tight">Visao Geral do Projeto</h2>
          <p className="leading-relaxed text-zinc-300">
            O Patient Manager e um projeto de atualizacao completa de um software utilizado no gerenciamento de clinicas. A solucao anterior ja nao acompanhava o nivel de qualidade dos concorrentes e apresentava limitacoes claras de usabilidade, desempenho e organizacao da informacao. O objetivo deste projeto foi modernizar o produto, melhorar a eficiencia operacional e garantir que a transicao para o digital respeitasse os processos ja consolidados nas clinicas.
          </p>
        </section>

        <section className="mt-14 space-y-5">
          <h2 className="text-2xl tracking-tight">Contexto e Problema</h2>
          <p className="leading-relaxed text-zinc-300">
            Antes do redesenho, o sistema utilizado pelas clinicas apresentava fluxos lentos, telas sobrecarregadas e uma arquitetura de informacao pouco clara. Muitas operacoes criticas ainda dependiam de controles manuais, como papel e planilhas paralelas, o que aumentava o risco de erros e tornava o trabalho administrativo mais demorado.
          </p>
          <p className="leading-relaxed text-zinc-300">
            Alem disso, o sistema havia sido construido sem uma estrategia consistente de experiencia do usuario, o que dificultava tanto o aprendizado de novos usuarios quanto a escalabilidade do produto.
          </p>
          <figure className="mt-6 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
            <img src={`${magventureBase}older_system.png`} alt="Sistema antigo do Patient Manager" className="aspect-video w-full object-cover" />
          </figure>
        </section>

        <section className="mt-14 space-y-5">
          <h2 className="text-2xl tracking-tight">Objetivos do Projeto</h2>
          <p className="leading-relaxed text-zinc-300">
            O principal objetivo foi criar uma solucao moderna, eficiente e alinhada a realidade das clinicas. Era fundamental melhorar a experiencia sem provocar rupturas bruscas nos processos ja existentes.
          </p>
          <ul className="list-disc space-y-2 pl-6 text-zinc-300">
            <li>Tornar os fluxos mais rapidos e intuitivos</li>
            <li>Digitalizar processos manuais de forma gradual</li>
            <li>Reduzir a carga cognitiva dos usuarios</li>
            <li>Criar uma base solida para evolucao futura do produto</li>
          </ul>
        </section>

        <section className="mt-14 space-y-5">
          <h2 className="text-2xl tracking-tight">Papel e Responsabilidades</h2>
          <p className="leading-relaxed text-zinc-300">
            Atuei como lider de design no projeto, sendo responsavel por direcionar as decisoes de UX e UI desde a fase de diagnostico ate a entrega final. Trabalhei de forma proxima ao time de desenvolvimento e aos stakeholders para garantir que as solucoes propostas fossem viaveis tecnicamente e relevantes para o negocio.
          </p>
          <p className="leading-relaxed text-zinc-300">
            Minhas responsabilidades incluiram a definicao da arquitetura de informacao, desenho de fluxos, criacao de wireframes e prototipos de alta fidelidade, alem da conducao de testes de usabilidade para validacao das decisoes.
          </p>
        </section>

        <section className="mt-14 space-y-5">
          <h2 className="text-2xl tracking-tight">Processo de Design</h2>
          <p className="leading-relaxed text-zinc-300">
            O processo de design comecou de forma exploratoria, com foco em ganhar velocidade e alinhar a linguagem do produto desde o inicio. Foram criadas variacoes iniciais do sistema, explorando look and feel e padroes de interface a partir de telas-chave, permitindo validar rapidamente decisoes visuais e comportamentais.
          </p>
          <p className="leading-relaxed text-zinc-300">
            Essa etapa foi essencial para confirmar o design system adotado e garantir consistencia estetica e funcional antes do aprofundamento da experiencia. Com a linguagem validada, o projeto avancou para a reestruturacao da arquitetura de informacao e detalhamento dos fluxos, priorizando clareza, previsibilidade e reducao de etapas desnecessarias.
          </p>
          <p className="leading-relaxed text-zinc-300">
            Os fluxos foram entao prototipados em maior fidelidade e utilizados para alinhamentos com stakeholders e time de desenvolvimento, reduzindo riscos antes da implementacao.
          </p>
          <p className="text-sm uppercase tracking-[0.14em] text-zinc-500">Propostas criadas para o look and feel apresentado ao time</p>
          <figure className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
            <img src={`${magventureBase}new_home.png`} alt="Proposta de novo home do sistema" className="h-auto w-full object-cover" />
          </figure>
        </section>

        <section className="mt-14 space-y-5">
          <h2 className="text-2xl tracking-tight">Solucao</h2>
          <p className="leading-relaxed text-zinc-300">
            A solucao final resultou em uma plataforma totalmente digital, com uma interface mais limpa, organizada e alinhada as necessidades reais das clinicas. Os fluxos foram simplificados, reduzindo o numero de passos necessarios para executar tarefas recorrentes e melhorando a legibilidade das informacoes.
          </p>
          <p className="leading-relaxed text-zinc-300">
            O design visual foi pensado para transmitir confianca e clareza, ao mesmo tempo em que facilitava o uso prolongado do sistema no ambiente clinico.
          </p>
          <figure className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
            <img src={`${magventureBase}patient_list.png`} alt="Tela final da listagem de pacientes" className="h-auto w-full object-cover" />
          </figure>
        </section>

        <section className="mt-14 space-y-5">
          <h2 className="text-2xl tracking-tight">Impacto e Resultados</h2>
          <p className="leading-relaxed text-zinc-300">
            Durante os testes e validacoes, o novo Patient Manager demonstrou ganhos claros de eficiencia. Os principais fluxos do sistema tornaram-se, em media, 40% mais rapidos em comparacao com a versao anterior.
          </p>
          <p className="leading-relaxed text-zinc-300">
            Alem da melhoria de desempenho, houve reducao de erros operacionais e maior adesao por parte das clinicas, que passaram a utilizar o sistema de forma mais consistente e confiante.
          </p>
          <p className="leading-relaxed text-zinc-300">
            Esses resultados reforcam o impacto direto de decisoes de UX bem fundamentadas na performance do produto e nos resultados do negocio.
          </p>
        </section>

        <section className="mt-14 space-y-5">
          <h2 className="text-2xl tracking-tight">Consideracoes Finais</h2>
          <p className="leading-relaxed text-zinc-300">
            O Patient Manager e um exemplo de como uma abordagem centrada no usuario, aliada a decisoes tecnicas bem embasadas, pode gerar ganhos reais de eficiencia, usabilidade e escalabilidade. O projeto consolidou a experiencia do produto e abriu caminho para futuras evolucoes da plataforma.
          </p>
        </section>

        <section className="mt-16">
          <h3 className="mb-5 text-xs uppercase tracking-[0.2em] text-zinc-500">Bento grid / extras do projeto</h3>
          <div className="grid gap-4 md:grid-cols-12">
            <figure className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 md:col-span-8">
              <img src={`${magventureBase}home_customize.png`} alt="Tela de customizacao da home" className="h-full w-full object-cover" />
            </figure>
            <figure className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 md:col-span-4">
              <img src={`${magventureBase}new_patient.png`} alt="Tela de novo paciente" className="h-full w-full object-cover" />
            </figure>
            <figure className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 md:col-span-12">
              <img src={`${magventureBase}calendar.png`} alt="Tela de calendario" className="h-full max-h-[420px] w-full object-cover" />
            </figure>
          </div>
        </section>
      </section>
    </main>
  )
}

export default PatientManagerPage
