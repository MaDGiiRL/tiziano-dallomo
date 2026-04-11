import { ArrowUpRight } from "lucide-react";

export default function ContactCard({ label, value, href, icon: Icon }) {
  const content = (
    <div className="rounded-[20px] bg-slate-950/70 p-5 transition hover:bg-slate-900/90">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          {Icon ? (
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-700/70 bg-slate-900/90">
              <Icon className="h-4 w-4 text-sky-300" />
            </div>
          ) : null}

          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
              {label}
            </div>
            <div className="mt-2 break-all text-sm leading-7 text-slate-100 md:text-[15px]">
              {value}
            </div>
          </div>
        </div>

        {href ? (
          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-slate-500" />
        ) : null}
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
}
