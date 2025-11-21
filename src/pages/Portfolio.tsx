import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Bot,
  HandshakeIcon,
  Sparkles,
} from "lucide-react";

const previews = [
  {
    title: "Dietitian Chatbot Research",
    blurb: "Agentic RAG system that pairs evidence-backed advice with human warmth.",
    href: "/dietbot",
    accent: "from-rose-500/40 via-orange-400/10 to-transparent",
    icon: Bot,
    tags: ["Healthcare AI", "Agentic RAG", "Gemma-3"],
    image: "/chat.png",
  },
  {
    title: "Strike Network",
    blurb: "A NIL operating system that lets athletes and brands collaborate directly.",
    href: "/strike",
    accent: "from-sky-500/40 via-indigo-500/10 to-transparent",
    icon: HandshakeIcon,
    tags: ["NIL", "Product Design", "Full-stack"],
    image: "/render.png",
  },
] as const;

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/90 to-muted/40 px-6 md:px-12 py-12 text-foreground">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl flex-col">
        <div className="flex items-center justify-between gap-4 pb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>
        </div>

        <div className="pb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Portfolio
          </p>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
            Projects that shaped how I think about AI, product, and system architecture.
          </h1>
        </div>

        <div className="flex-1 grid gap-6 lg:grid-cols-2">
          {previews.map((preview) => {
            const Icon = preview.icon;

            return (
              <Link
                key={preview.title}
                to={preview.href}
                className="group relative isolate overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br px-8 pb-8 pt-10 shadow-2xl transition hover:-translate-y-1 hover:shadow-foreground/10"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${preview.accent} opacity-80 blur-3xl transition group-hover:opacity-100`}
                />

                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-6 text-3xl font-semibold leading-tight">
                      {preview.title}
                    </h2>
                    <p className="mt-3 text-base text-muted-foreground">
                      {preview.blurb}
                    </p>
                  </div>

                  <ul className="relative mt-10 space-y-2 text-sm text-muted-foreground">
                    {preview.tags.map((tag) => (
                      <li key={tag} className="list-disc list-inside">
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-10 flex items-center justify-end text-sm font-semibold">
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>

                <div className="pointer-events-none absolute bottom-4 right-4 w-1/2 max-w-[160px] opacity-70 transition group-hover:scale-105 group-hover:opacity-100 sm:-right-6 sm:bottom-0 sm:w-2/3 sm:max-w-xs">
                  <div className="rounded-[28px] border border-white/10 bg-black/50 p-3 backdrop-blur">
                    <img
                      src={preview.image}
                      alt={`${preview.title} preview`}
                      className="rounded-[24px] object-cover"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;


