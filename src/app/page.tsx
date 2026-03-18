import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px] animate-float" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-orange-600/6 blur-[100px] animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="animate-fade-in opacity-0 mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border border-border bg-card/60 backdrop-blur-sm text-muted">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            Powered by Gemini 3.1 Pro
          </span>
        </div>

        {/* Heading */}
        <h1 className="animate-fade-in opacity-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]" style={{ animationDelay: "100ms" }}>
          Conteúdo que
          <br />
          <span className="bg-gradient-to-r from-accent via-amber-400 to-accent bg-clip-text text-transparent animate-shimmer">
            vence no LinkedIn
          </span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in opacity-0 mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed" style={{ animationDelay: "200ms" }}>
          Transforme qualquer ideia em posts de alta performance com IA.
          <br className="hidden sm:block" />
          3 variações. 1 clique. Zero esforço.
        </p>

        {/* CTA */}
        <div className="animate-fade-in opacity-0 mt-10 flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: "350ms" }}>
          <Link
            href="/generate"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl bg-accent text-background transition-all duration-300 hover:bg-accent-light hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(249,115,22,0.3)] active:scale-[0.98]"
          >
            Criar meu primeiro post
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <a
            href="#como-funciona"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium rounded-xl border border-border text-muted transition-all duration-300 hover:border-border-hover hover:text-foreground hover:bg-card/50"
          >
            Como funciona
          </a>
        </div>

        {/* Social proof */}
        <p className="animate-fade-in opacity-0 mt-8 text-sm text-muted/60" style={{ animationDelay: "500ms" }}>
          Gratuito · Sem cadastro · Resultados em segundos
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in opacity-0" style={{ animationDelay: "800ms" }}>
        <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 rounded-full bg-muted animate-bounce" />
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: "IA que entende LinkedIn",
    description: "Prompts especializados em copywriting para LinkedIn. Hooks poderosos, estrutura otimizada, hashtags estratégicas.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "3 variações instantâneas",
    description: "Cada ideia gera 3 posts únicos com ângulos diferentes. Escolha o melhor ou combine elementos.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    title: "Storytelling, Educacional, Opinião",
    description: "Formatos testados e comprovados. Cada um otimizado para um tipo diferente de engajamento.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
      </svg>
    ),
    title: "Copie e publique",
    description: "Um clique copia o post perfeito direto para o clipboard. Cole no LinkedIn e publique.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "Histórico local",
    description: "Seus posts ficam salvos no navegador. Sem conta, sem login. Privacidade total.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Score de engajamento",
    description: "Cada variação recebe uma nota preditiva de engajamento. Saiba qual post vai performar melhor.",
  },
];

function FeaturesSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Tudo que você precisa para
            <br />
            <span className="text-accent">dominar o LinkedIn</span>
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Ferramentas simples, resultados extraordinários.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border border-border bg-card/40 transition-all duration-300 hover:border-border-hover hover:bg-card-hover/60 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 transition-colors duration-300 group-hover:bg-accent/20">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    step: "01",
    title: "Escreva sua ideia",
    description: "Pode ser uma frase, um tema, ou apenas um conceito. A IA faz o resto.",
    example: '"Liderança em tempos de crise"',
  },
  {
    step: "02",
    title: "Escolha o formato",
    description: "Storytelling para emocionar, Educacional para ensinar, ou Opinião para provocar debate.",
    example: "Storytelling · Educacional · Opinião",
  },
  {
    step: "03",
    title: "Receba 3 posts prontos",
    description: "Cada variação com ângulo único, hashtags otimizadas e score de engajamento previsto.",
    example: "Copie → Cole no LinkedIn → Publique",
  },
];

function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-24 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Simples como <span className="text-accent">1, 2, 3</span>
          </h2>
          <p className="mt-4 text-muted">
            De ideia a post publicado em menos de 60 segundos.
          </p>
        </div>

        <div className="space-y-6">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="group flex gap-6 p-6 rounded-2xl border border-border bg-card/30 transition-all duration-300 hover:border-border-hover hover:bg-card/60"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-mono font-bold text-lg transition-all duration-300 group-hover:bg-accent group-hover:text-background">
                {step.step}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                <p className="text-muted text-sm mb-3">{step.description}</p>
                <span className="inline-block px-3 py-1 rounded-lg bg-card text-xs text-muted font-mono border border-border">
                  {step.example}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Veja a <span className="text-accent">mágica</span> acontecer
          </h2>
          <p className="mt-4 text-muted">Um exemplo real de output gerado pela IA.</p>
        </div>

        <div className="relative p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
          {/* Fake LinkedIn post */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-amber-400" />
            <div>
              <p className="font-medium text-sm">Seu Nome</p>
              <p className="text-xs text-muted">CEO & Founder · 2h</p>
            </div>
          </div>
          <div className="space-y-3 text-sm leading-relaxed text-foreground/90">
            <p className="font-medium">Demiti meu melhor funcionário.</p>
            <p>Não por performance. Ele era brilhante.</p>
            <p>Mas ele destruía todas as pessoas ao redor.</p>
            <p>Em 3 meses, perdi 4 talentos por causa dele.</p>
            <p>No dia que ele saiu, a equipe inteira respirou.</p>
            <p>
              A produtividade subiu 40% em 2 semanas.
              <br />
              O NPS interno foi de 6 para 9.
            </p>
            <p className="text-muted italic">
              Cultura não é o que está no slide.
              <br />
              É quem você mantém — e quem você deixa ir.
            </p>
            <p className="text-accent text-xs mt-4">#liderança #cultura #gestãodepessoas #startups</p>
          </div>

          {/* Engagement bar */}
          <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted">
            <div className="flex items-center gap-1">
              <span className="text-accent">👍 ❤️ 🔥</span>
              <span>2.847</span>
            </div>
            <div className="flex gap-4">
              <span>142 comentários</span>
              <span>89 reposts</span>
            </div>
          </div>

          {/* Score badge */}
          <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-success text-background text-xs font-bold shadow-lg">
            Score: 9.2/10
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
          Pronto para criar posts que
          <br />
          <span className="bg-gradient-to-r from-accent via-amber-400 to-accent bg-clip-text text-transparent animate-shimmer">
            realmente engajam?
          </span>
        </h2>
        <p className="mt-6 text-muted text-lg">
          Sem cadastro. Sem cartão. Comece agora.
        </p>
        <div className="mt-10">
          <Link
            href="/generate"
            className="group inline-flex items-center gap-2 px-10 py-5 text-lg font-semibold rounded-xl bg-accent text-background transition-all duration-300 hover:bg-accent-light hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(249,115,22,0.35)] active:scale-[0.98]"
          >
            Começar gratuitamente
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <div className="flex items-center gap-2">
          <span className="font-bold text-foreground">Winning Content</span>
          <span>·</span>
          <span>Powered by Gemini 3.1 Pro</span>
        </div>
        <p>© {new Date().getFullYear()} · Feito com IA para humanos.</p>
      </div>
    </footer>
  );
}

/* Header / Navbar */
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <span className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center text-background text-sm font-black">W</span>
          <span className="hidden sm:inline">Winning Content</span>
        </Link>
        <nav className="flex items-center gap-6">
          <a href="#como-funciona" className="text-sm text-muted hover:text-foreground transition-colors">
            Como funciona
          </a>
          <Link
            href="/generate"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-accent text-background transition-all hover:bg-accent-light"
          >
            Criar post
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DemoSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
