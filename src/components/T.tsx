import { isPlaceholder } from "@/lib/content";

function Ph({ children }: { children: string }) {
  return (
    <span className="ph" title="Placeholder: replace in src/lib/content.ts">
      {children}
    </span>
  );
}

export function T({ children }: { children: string }) {
  if (isPlaceholder(children)) return <Ph>{children}</Ph>;
  if (!children.includes("[")) return <>{children}</>;
  return (
    <>
      {children.split(/(\[[^\]]+\])/).map((part, i) =>
        part.startsWith("[") ? <Ph key={i}>{part}</Ph> : part,
      )}
    </>
  );
}
