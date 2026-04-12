"use client";

import { motion } from "framer-motion";

import { AnimatedValue } from "@/components/home/animated-value";

const grants = [
  { label: "Heat pump grant", value: 12500 },
  { label: "Solar PV", value: 1800 },
  { label: "Windows & doors", value: 3200 }
] as const;

export function HeroPlanPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[31rem] lg:max-w-[32rem]">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[1.45rem] border border-black bg-white p-5 shadow-[0_40px_100px_-48px_rgba(8,32,29,0.34)] sm:p-6 lg:p-7"
      >
        <div className="absolute inset-x-6 top-0 h-px bg-ink-200" />
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-[2rem]">
              Estimated support for your home
            </h2>
          </div>
          <div className="inline-flex h-8 min-w-[6.75rem] items-center justify-center rounded-full border border-ink-200 bg-white px-3.5 text-center text-xs font-medium leading-none text-ink-600 shadow-sm">
            Sample result
          </div>
        </div>

        <div className="mt-7 space-y-3">
          {grants.map((grant, index) => (
            <motion.div
              key={grant.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.18 + index * 0.12,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -2 }}
              className="flex items-center justify-between gap-4 rounded-2xl border border-ink-200/90 bg-white px-4 py-4 shadow-[0_18px_32px_-28px_rgba(43,62,56,0.12)] sm:px-5"
            >
              <div>
                <p className="text-sm font-medium text-ink-900">{grant.label}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-ink-500">
                  Possible support
                </p>
              </div>
              <p className="text-lg font-semibold tracking-tight text-[#0f8f81] sm:text-[1.35rem]">
                <AnimatedValue value={grant.value} duration={2.4 + index * 0.3} />
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-ink-200 bg-white px-4 py-4 sm:px-5">
          <p className="text-sm leading-6 text-ink-600">
            Based on your home type, heating setup, and upgrade interests.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
