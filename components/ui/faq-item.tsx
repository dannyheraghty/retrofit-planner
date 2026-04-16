import type { ReactNode } from "react";

type FaqItemProps = {
  question: string;
  answer: ReactNode;
  defaultOpen?: boolean;
};

export function FaqItem({
  question,
  answer,
  defaultOpen = false
}: FaqItemProps) {
  return (
    <details
      open={defaultOpen}
      className="group rounded-[1.1rem] border border-ink-200 bg-white px-5 py-4 shadow-none transition open:border-ink-300 sm:px-6"
    >
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left marker:hidden">
        <span className="pr-2 text-base font-medium leading-7 text-ink-900">
          {question}
        </span>
        <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink-200 bg-white text-[#0f8f81] transition group-open:rotate-45 group-open:border-ink-300">
          +
        </span>
      </summary>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-ink-500 sm:text-[0.95rem]">
        {answer}
      </p>
    </details>
  );
}
