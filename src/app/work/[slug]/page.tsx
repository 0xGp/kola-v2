import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Figure } from "@/components/Figure";
import { Reveal } from "@/components/Reveal";
import { T } from "@/components/T";
import { caseStudies, isPlaceholder, paragraphs, site, type Text } from "@/lib/content";

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  const name = isPlaceholder(study.title) ? `${study.sector} case study` : study.title;
  const description = isPlaceholder(study.summary) ? `${name} case study by ${site.name}.` : study.summary;
  return { title: name, description, openGraph: { title: name, description } };
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Reveal as="section" className="cs__row">
      <h2 className="cs__label">{label}</h2>
      <div className="cs__content">{children}</div>
    </Reveal>
  );
}

function Paras({ text, leadFirst = false }: { text: Text; leadFirst?: boolean }) {
  return (
    <>
      {paragraphs(text).map((p, k) => (
        <p key={k} className={leadFirst && k === 0 ? "cs__lead" : undefined}>
          <T>{p}</T>
        </p>
      ))}
    </>
  );
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const i = caseStudies.findIndex((s) => s.slug === slug);
  if (i === -1) notFound();
  const study = caseStudies[i];
  const next = caseStudies[(i + 1) % caseStudies.length];
  const richProcess = study.process.some((p) => p.bullets || p.quote || p.flow || p.after);

  return (
    <article className="cs">
      <header className="cs__head">
        <Link href="/#work" className="back-link">
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M13 8H3M7 4L3 8l4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span>All work</span>
        </Link>
        <p className="cs__sector">{study.sector}</p>
        <h1 className="display cs__title">
          <T>{study.title}</T>
        </h1>
        <p className="cs__summary">
          <T>{study.summary}</T>
        </p>
        <dl className="cs__meta">
          {[
            ["Role", study.role],
            ["Timeline", study.timeline],
            ["Team", study.team],
            ["Platform", study.platform],
            ["Status", study.status],
          ].map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>
                <T>{v}</T>
              </dd>
            </div>
          ))}
        </dl>
      </header>

      <Reveal className="cs__visual">
        <Figure
          mock={study.mock}
          image={study.image}
          label={`${study.sector} project visual`}
          annotations={study.annotations}
          placeholder={site.placeholder}
          priority
        />
      </Reveal>

      <div className="cs__body">
        {study.overview && (
          <Row label="Overview">
            <Paras text={study.overview} leadFirst />
            {study.areas && (
              <div className="cs__areas">
                <h3>Key product areas</h3>
                <ul className="tags">
                  {study.areas.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            )}
          </Row>
        )}

        {study.decisions && (
          <Row label="Key screens and decisions">
            <ol className="cs__decisions">
              {study.decisions.map((d, k) => (
                <li key={d.title}>
                  <span className="cs__num" aria-hidden="true">
                    {k + 1}
                  </span>
                  <div>
                    <h3>{d.title}</h3>
                    <p>{d.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Row>
        )}

        <Row label="The problem">
          <Paras text={study.problem} leadFirst />
        </Row>

        <Row label="Who it was for">
          <div className="cs__pair">
            <div>
              <h3>Founders</h3>
              <Paras text={study.founders} />
            </div>
            <div>
              <h3>Users</h3>
              <Paras text={study.users} />
            </div>
          </div>
        </Row>

        <Row label="My role">
          <Paras text={study.myRole} />
        </Row>

        <Row label="Process">
          <ol className={`cs__process${richProcess ? " cs__process--rich" : ""}`}>
            {study.process.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <Paras text={p.body} />
                {p.bullets && (
                  <ul className="cs__bullets">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
                {p.quote && <blockquote className="cs__quote">{p.quote}</blockquote>}
                {p.flow && (
                  <ol className="cs__flow" aria-label="Core journey">
                    {p.flow.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ol>
                )}
                {p.after && <Paras text={p.after} />}
              </li>
            ))}
          </ol>
        </Row>

        <Row label="Solution">
          <Paras text={study.solution} leadFirst />
        </Row>

        <Row label="Outcome">
          {study.outcome.metrics && (
            <ul className="cs__metrics">
              {study.outcome.metrics.map((m, k) => (
                <li key={k}>
                  <span className="cs__metric-value display">
                    <T>{m.value}</T>
                  </span>
                  <span className="cs__metric-label">
                    <T>{m.label}</T>
                  </span>
                </li>
              ))}
            </ul>
          )}
          {study.outcome.items && (
            <ul className="cs__outcomes">
              {study.outcome.items.map((o) => (
                <li key={o.title}>
                  <h3>{o.title}</h3>
                  <p>{o.body}</p>
                </li>
              ))}
            </ul>
          )}
          {study.outcome.qualitative && (
            <p>
              <T>{study.outcome.qualitative}</T>
            </p>
          )}
        </Row>

        <Row label="What I learned">
          <ol className="cs__lessons">
            {study.lessons.map((l, k) => (
              <li key={k}>
                <span className="mono" aria-hidden="true">
                  {String(k + 1).padStart(2, "0")}
                </span>
                {typeof l === "string" ? (
                  <p>
                    <T>{l}</T>
                  </p>
                ) : (
                  <div className="cs__lesson">
                    <h3>{l.title}</h3>
                    <Paras text={l.body} />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </Row>
      </div>

      <Link href={`/work/${next.slug}`} className="cs__next">
        <span className="cs__next-label">Next project</span>
        <span className="display cs__next-title">
          <T>{next.title}</T>
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
        <span className="cs__next-sector">{next.sector}</span>
      </Link>
    </article>
  );
}
