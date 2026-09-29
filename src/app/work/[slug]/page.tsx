import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Figure } from "@/components/Figure";
import { Reveal } from "@/components/Reveal";
import { T } from "@/components/T";
import { caseStudies, isPlaceholder, site } from "@/lib/content";

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

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const i = caseStudies.findIndex((s) => s.slug === slug);
  if (i === -1) notFound();
  const study = caseStudies[i];
  const next = caseStudies[(i + 1) % caseStudies.length];

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
          label={`${study.sector} project visual`}
          annotations={study.annotations}
          placeholder={site.placeholder}
        />
      </Reveal>

      <div className="cs__body">
        <Row label="The problem">
          <p className="cs__lead">
            <T>{study.problem}</T>
          </p>
        </Row>

        <Row label="Who it was for">
          <div className="cs__pair">
            <div>
              <h3>Founders</h3>
              <p>
                <T>{study.founders}</T>
              </p>
            </div>
            <div>
              <h3>Users</h3>
              <p>
                <T>{study.users}</T>
              </p>
            </div>
          </div>
        </Row>

        <Row label="My role">
          <p>
            <T>{study.myRole}</T>
          </p>
        </Row>

        <Row label="Process">
          <ol className="cs__process">
            {study.process.map((p) => (
              <li key={p.title}>
                <h3>{p.title}</h3>
                <p>
                  <T>{p.body}</T>
                </p>
              </li>
            ))}
          </ol>
        </Row>

        <Row label="Solution">
          <p className="cs__lead">
            <T>{study.solution}</T>
          </p>
        </Row>

        <Row label="Outcome">
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
          <p>
            <T>{study.outcome.qualitative}</T>
          </p>
        </Row>

        <Row label="What I learned">
          <ol className="cs__lessons">
            {study.lessons.map((l, k) => (
              <li key={k}>
                <span className="mono" aria-hidden="true">
                  {String(k + 1).padStart(2, "0")}
                </span>
                <p>
                  <T>{l}</T>
                </p>
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
