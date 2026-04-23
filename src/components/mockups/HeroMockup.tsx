'use client'

import { useState, useEffect } from 'react'

const STEP_DELAY_MS = 900

export default function HeroMockup() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    if (activeStep >= 3) return
    const timer = setTimeout(() => setActiveStep((s) => s + 1), STEP_DELAY_MS)
    return () => clearTimeout(timer)
  }, [activeStep])

  return (
    <div
      role="img"
      aria-label="Three-step wallet flow: agent chat, rule check, user approval"
      className="relative w-[420px] h-[420px] select-none"
    >
      {/* Card 1 — Agent Chat (back, top-left) */}
      <div
        className={`absolute top-0 left-0 w-[300px] rounded-xl border border-slate-700 bg-slate-800 shadow-lg transition-all duration-500 ${
          activeStep >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* Header */}
        <div className="flex items-center gap-2 border-b border-slate-700 px-4 py-2.5">
          <div className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-xs font-medium text-slate-300">Wallet Agent</span>
        </div>

        {/* Messages */}
        <div className="flex flex-col gap-2.5 px-4 py-3">
          <div className="flex justify-end">
            <div className="rounded-xl rounded-tr-sm bg-slate-600 px-3 py-2">
              <p className="text-xs text-white">Send 0.8 tETH to supplier</p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="rounded-xl rounded-tl-sm bg-slate-700 px-3 py-2">
              <p className="text-xs text-slate-200">Preparing transaction...</p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="flex items-center gap-1.5 rounded-xl rounded-tl-sm border border-amber-500/30 bg-amber-500/10 px-3 py-2">
              <svg className="h-3 w-3 shrink-0 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" />
              </svg>
              <p className="text-xs font-medium text-amber-300">Approval required</p>
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div className="border-t border-slate-700 px-4 py-2.5">
          <div className="flex items-center rounded-lg border border-slate-600 bg-slate-700/50 px-3 py-1.5">
            <span className="flex-1 text-xs text-slate-500">Ask your agent…</span>
            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-slate-500">
              <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 — Wallet Guard (middle, offset right) */}
      <div
        className={`absolute top-[140px] left-[60px] w-[300px] rounded-xl border border-slate-600 bg-slate-800/95 shadow-xl backdrop-blur-sm transition-all duration-500 ${
          activeStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-700 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <svg className="h-3.5 w-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <span className="text-xs font-medium text-slate-200">Wallet Guard</span>
          </div>
        </div>

        <div className="px-4 py-3 space-y-2.5">
          <div className="flex items-start gap-2">
            <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
            <p className="text-xs text-red-300">Transfer exceeds your limit</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
            <p className="text-xs text-amber-300">User approval required before signing</p>
          </div>

          {/* Rule summary */}
          <div className="mt-1 grid grid-cols-2 gap-2 rounded-lg bg-slate-700/50 p-2.5">
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider">Per-tx limit</p>
              <p className="text-xs font-mono text-slate-300">0.1 tETH</p>
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider">Allowed</p>
              <p className="text-xs font-mono text-slate-300">Uniswap, Aave</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 pt-0.5">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] text-emerald-400 uppercase tracking-wider font-medium">Rules active</span>
          </div>
        </div>
      </div>

      {/* Card 3 — Review & Approve (front, bottom-right) */}
      <div
        className={`absolute top-[270px] left-[120px] w-[300px] rounded-xl border border-slate-600 bg-slate-800/95 shadow-2xl backdrop-blur-sm transition-all duration-500 ${
          activeStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="flex items-center gap-2 border-b border-slate-700 px-4 py-2.5">
          <svg className="h-3.5 w-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
          </svg>
          <span className="text-xs font-medium text-slate-200">Review & Approve</span>
        </div>

        <div className="px-4 py-3">
          <p className="text-[10px] text-slate-500 uppercase tracking-wider">You are about to send</p>
          <p className="text-lg font-bold text-white mt-0.5">0.8 tETH</p>
          <p className="text-xs font-mono text-slate-400 mt-0.5">to 0xabc…def</p>

          <p className="text-[10px] text-slate-500 mt-3">This action requires your approval</p>

          <div className="flex gap-2 mt-3">
            <button className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-white px-3 py-2 text-xs font-medium text-slate-900 transition-colors hover:bg-slate-100">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a48.667 48.667 0 00-1.334 4.153M12.75 3c.614 0 1.216.046 1.805.135M12.75 3a48.09 48.09 0 00-9.915 1.735M12.75 3c-1.194 0-2.36.107-3.487.308" />
              </svg>
              Approve with Passkey
            </button>
            <button className="rounded-lg border border-slate-600 px-3 py-2 text-xs font-medium text-slate-400 transition-colors hover:bg-slate-700">
              Reject
            </button>
          </div>
        </div>

        {/* Success indicator (appears last) */}
        <div
          className={`border-t border-slate-700 px-4 py-2 flex items-center gap-2 transition-all duration-500 ${
            activeStep >= 3 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <svg className="h-3.5 w-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-[10px] font-medium text-emerald-400">Passkey verified</p>
            <p className="text-[10px] text-slate-500">Transaction sent successfully</p>
          </div>
          <span className="ml-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
            Completed
          </span>
        </div>
      </div>
    </div>
  )
}
