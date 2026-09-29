import { Measure } from "./Measure";
import { Mock } from "./Mocks";
import type { Annotation, MockId } from "@/lib/content";

type FigureProps = {
  mock: MockId;
  label: string;
  annotations?: Annotation[];
  placeholder?: boolean;
};

export function Figure({ mock, label, annotations = [], placeholder = false }: FigureProps) {
  return (
    <>
      <Measure axis="y" className="figure-measure">
        <Measure axis="x">
          <div className="figure-box">
            <div className="frame" role="img" aria-label={label}>
              <div className="frame__inner" aria-hidden="true">
                <Mock id={mock} />
              </div>
              {placeholder && <span className="frame__tag">Placeholder visual</span>}
            </div>
            {annotations.map((a, i) => (
              <div
                key={i}
                className={`note note--${a.side}`}
                style={{ left: `${a.x}%`, top: `${a.y}%` }}
                aria-hidden="true"
              >
                <span className="note__dot mono">{i + 1}</span>
                <span className="note__leader" />
                <span className="note__label mono">{a.label}</span>
              </div>
            ))}
          </div>
        </Measure>
      </Measure>
      {annotations.length > 0 && (
        <ol className="notes-list" aria-label="Design notes">
          {annotations.map((a, i) => (
            <li key={i}>
              <span className="mono" aria-hidden="true">
                {i + 1}
              </span>
              {a.label}
            </li>
          ))}
        </ol>
      )}
    </>
  );
}
