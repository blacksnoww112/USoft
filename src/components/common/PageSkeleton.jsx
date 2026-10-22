import React from 'react'

function PageSkeleton() {
  return (
    <div className="min-h-dvh bg-[#F5F7FA] dark:bg-[#070D18] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      {/* ── Navbar Skeleton ── */}
      <div className="h-16 border-b border-[#E4E7EC] dark:border-slate-800 bg-white/70 dark:bg-[#0F1B2F]/70 px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-28 rounded-lg bg-slate-200 dark:bg-slate-700 animate-pulse" />
        </div>
        <div className="hidden md:flex items-center gap-4">
          <div className="h-4 w-16 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
          <div className="h-4 w-16 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
          <div className="h-4 w-16 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
          <div className="h-4 w-16 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
          <div className="h-4 w-20 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-slate-200 dark:bg-slate-700 animate-pulse" />
          <div className="h-8 w-20 rounded-lg bg-slate-200 dark:bg-slate-700 animate-pulse" />
          <div className="h-9 w-28 rounded-xl bg-slate-200 dark:bg-slate-700 animate-pulse" />
        </div>
      </div>

      {/* ── Hero Skeleton ── */}
      <div className="hero-gradient px-4 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            {/* Badge skeleton */}
            <div className="h-7 w-36 rounded-full bg-white/20 animate-pulse" />
            {/* Title skeletons */}
            <div className="space-y-3">
              <div className="h-10 sm:h-12 w-5/6 rounded-xl bg-white/25 animate-pulse" />
              <div className="h-10 sm:h-12 w-3/4 rounded-xl bg-white/20 animate-pulse" />
            </div>
            {/* Subtitle skeleton */}
            <div className="space-y-2 max-w-lg pt-2">
              <div className="h-4 w-full rounded bg-white/15 animate-pulse" />
              <div className="h-4 w-4/5 rounded bg-white/15 animate-pulse" />
            </div>
            {/* CTA buttons */}
            <div className="flex gap-4 pt-4">
              <div className="h-12 w-36 rounded-xl bg-[#38BDF8]/40 animate-pulse" />
              <div className="h-12 w-32 rounded-xl bg-white/15 animate-pulse" />
            </div>
          </div>

          {/* Right Card Mockup skeleton */}
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md animate-pulse space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="h-24 rounded-2xl bg-white/15" />
              <div className="h-24 rounded-2xl bg-white/15" />
            </div>
            <div className="h-44 rounded-2xl bg-white/15" />
          </div>
        </div>
      </div>

      {/* ── Cards Grid Skeleton ── */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
        <div className="mb-10 text-center space-y-3">
          <div className="mx-auto h-4 w-28 rounded bg-slate-300 dark:bg-slate-700 animate-pulse" />
          <div className="mx-auto h-8 w-64 rounded-xl bg-slate-300 dark:bg-slate-700 animate-pulse" />
          <div className="mx-auto h-4 w-96 rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#E4E7EC] dark:border-slate-800 bg-white dark:bg-[#0F1B2F] p-6 shadow-card space-y-4 animate-pulse"
            >
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-xl bg-slate-200 dark:bg-slate-700" />
                <div className="h-6 w-20 rounded-full bg-slate-200 dark:bg-slate-700" />
              </div>
              <div className="h-5 w-3/4 rounded bg-slate-200 dark:bg-slate-700" />
              <div className="space-y-2">
                <div className="h-3.5 w-full rounded bg-slate-100 dark:bg-slate-800" />
                <div className="h-3.5 w-5/6 rounded bg-slate-100 dark:bg-slate-800" />
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-between">
                <div className="h-4 w-16 rounded bg-slate-200 dark:bg-slate-700" />
                <div className="h-4 w-12 rounded bg-slate-200 dark:bg-slate-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PageSkeleton
