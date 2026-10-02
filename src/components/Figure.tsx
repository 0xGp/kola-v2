import Image from "next/image";
import { Measure } from "./Measure";
import { Mock } from "./Mocks";
import type { Annotation, MockId, Shot } from "@/lib/content";

type FigureProps = {
  mock: MockId;
  image?: Shot;
  label: string;
  annotations?: Annotation[];
  placeholder?: boolean;
  priority?: boolean;
};

export function Figure({ mock, image, label, annotations = [], placeholder = false, priority = false }: FigureProps) {
  return (
    <>
      <Measure axis="y" className="figure-measure">
        <Measure axis="x">
          <div className="figure-box">
            <div className="frame" role="img" aria-label={image?.alt ?? label}>
              <div className="frame__inner" aria-hidden="true">
                {image ? (
                  <Image
                    className="mock mock--shot"
                    src={image.src}
                    alt=""
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 900px) 100vw, 60vw"
                    priority={priority}
                  />
                ) : (
                  <Mock id={mock} />
                )}
              </div>
              {placeholder && !image && <span className="frame__tag">Placeholder visual</span>}
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
