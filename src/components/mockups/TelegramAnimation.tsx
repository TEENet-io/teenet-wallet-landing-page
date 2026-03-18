'use client'

import { useRef, useEffect } from 'react'

interface TelegramAnimationProps {
  elapsed: number
  isGap: boolean
}

/* Thresholds (ms) for each message/card appearance */
const T_USER_MSG = 200
const T_BOT_PREPARING = 1800
const T_BOT_WARNING = 2500
const T_WALLET_GUARD = 3200
const T_REVIEW = 5600
const T_BTN_PRESS = 6800
const T_VERIFYING = 7200
const T_SUCCESS = 7800

export default function TelegramAnimation({ elapsed, isGap }: TelegramAnimationProps) {
  const chatRef = useRef<HTMLDivElement>(null)

  /* Count visible elements to trigger auto-scroll */
  const visibleCount = isGap
    ? 0
    : [T_USER_MSG, T_BOT_PREPARING, T_BOT_WARNING, T_WALLET_GUARD, T_REVIEW, T_SUCCESS]
        .filter(t => elapsed >= t).length

  useEffect(() => {
    if (chatRef.current && visibleCount > 0) {
      chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' })
    }
  }, [visibleCount])

  const show = (threshold: number) => elapsed >= threshold && !isGap
  const showTyping = !isGap && elapsed >= 1400 && elapsed < T_BOT_PREPARING

  return (
    <div
      role="img"
      aria-label="Animated Telegram bot interaction showing agent wallet flow"
      className="w-full max-w-[380px] mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-200/60"
    >
      {/* ── Telegram Header ── */}
      <div className="bg-[#517da2] px-4 py-2.5 flex items-center gap-3">
        <span className="text-white/80 text-sm select-none">‹</span>
        <div className="w-9 h-9 rounded-full bg-[#7eb8e2] flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="white" className="w-4.5 h-4.5">
            <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.787l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-white text-sm font-medium leading-tight truncate">OpenClaw Wallet</div>
          <div className="text-white/60 text-xs leading-tight">bot</div>
        </div>
        <span className="text-white/60 text-lg select-none">⋮</span>
      </div>

      {/* ── Chat Area ── */}
      <div
        ref={chatRef}
        className="h-[360px] bg-[#edf1f5] px-3 py-3 overflow-y-auto hide-scrollbar flex flex-col gap-2"
        style={{ opacity: isGap ? 0 : 1, transition: 'opacity 0.6s ease' }}
      >
        {/* User message: Send 0.8 ETH */}
        {show(T_USER_MSG) && (
          <div className="flex justify-end animate-[message-in_0.3s_ease-out]">
            <div className="bg-[#effdde] rounded-xl rounded-br-sm px-3 py-2 max-w-[75%] shadow-sm">
              <p className="text-sm text-gray-900 leading-snug">Send 0.8 ETH to supplier</p>
              <p className="text-[10px] text-gray-400 text-right mt-0.5">12:01</p>
            </div>
          </div>
        )}

        {/* Typing indicator */}
        {showTyping && (
          <div className="flex justify-start animate-[message-in_0.2s_ease-out]">
            <div className="bg-white rounded-xl rounded-bl-sm px-3.5 py-2.5 shadow-sm flex gap-1.5">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-[typing-bounce_1s_0ms_infinite]" />
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-[typing-bounce_1s_150ms_infinite]" />
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-[typing-bounce_1s_300ms_infinite]" />
            </div>
          </div>
        )}

        {/* Bot: Preparing transaction... */}
        {show(T_BOT_PREPARING) && (
          <div className="flex justify-start animate-[message-in_0.3s_ease-out]">
            <div className="bg-white rounded-xl rounded-bl-sm px-3 py-2 max-w-[75%] shadow-sm">
              <p className="text-sm text-gray-800 leading-snug">Preparing transaction...</p>
              <p className="text-[10px] text-gray-400 mt-0.5">12:01</p>
            </div>
          </div>
        )}

        {/* Bot: Approval required */}
        {show(T_BOT_WARNING) && (
          <div className="flex justify-start animate-[message-in_0.3s_ease-out]">
            <div className="bg-white rounded-xl rounded-bl-sm px-3 py-2 max-w-[80%] shadow-sm border-l-2 border-amber-400">
              <p className="text-sm text-amber-700 font-medium leading-snug">
                <span className="mr-1">&#9888;&#65039;</span>Approval required
              </p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                This transfer exceeds your per-transaction limit.
              </p>
              <p className="text-[10px] text-gray-400 mt-1">12:01</p>
            </div>
          </div>
        )}

        {/* Wallet Guard Card */}
        {show(T_WALLET_GUARD) && (
          <div className="flex justify-start animate-[card-in_0.4s_ease-out]">
            <div className="bg-white rounded-xl px-3.5 py-3 w-[88%] shadow-md border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm" aria-hidden="true">&#128737;&#65039;</span>
                <span className="text-[11px] font-semibold text-gray-900 tracking-wide uppercase">
                  Wallet Guard
                </span>
              </div>
              <p className="text-xs text-gray-700 font-medium leading-relaxed">
                Transfer exceeds your limit
              </p>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                User approval required before signing
              </p>
              <div className="mt-2.5 pt-2 border-t border-gray-100 space-y-1.5">
                <RuleRow label="Per-tx limit" value="0.1 ETH" />
                <RuleRow label="Allowed contracts" value="Uniswap, Aave" />
                <RuleRow label="Rule changes" value="Approval required" />
              </div>
            </div>
          </div>
        )}

        {/* Review & Approve Card */}
        {show(T_REVIEW) && (
          <div className="flex justify-start animate-[card-in_0.4s_ease-out]">
            <div className="bg-white rounded-xl px-3.5 py-3.5 w-[88%] shadow-md border border-gray-100">
              <p className="text-xs text-gray-500 text-center leading-relaxed">You are about to send</p>
              <p className="text-xl font-bold text-gray-900 text-center mt-1">0.8 ETH</p>
              <p className="text-xs text-gray-500 text-center mt-0.5 font-mono">to 0xabc...def</p>

              <button
                className={`w-full mt-3.5 py-2.5 rounded-lg text-xs font-semibold transition-all duration-300 ${
                  elapsed >= T_BTN_PRESS
                    ? 'bg-[#517da2] text-white scale-[0.97]'
                    : 'bg-[#5ba0d0] text-white'
                }`}
                tabIndex={-1}
              >
                {elapsed >= T_VERIFYING ? '\uD83D\uDD10 Verifying...' : 'Approve with Passkey'}
              </button>
              <button
                className="w-full mt-1.5 py-2 rounded-lg text-xs text-gray-400 border border-gray-100"
                tabIndex={-1}
              >
                Reject
              </button>
            </div>
          </div>
        )}

        {/* Success */}
        {show(T_SUCCESS) && (
          <div className="flex justify-start animate-[card-in_0.4s_ease-out]">
            <div className="bg-white rounded-xl px-3.5 py-3.5 w-[88%] shadow-md border border-green-200/60">
              <div className="flex items-center justify-center mb-2">
                <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center animate-[pulse-check_0.5s_ease-out]">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-green-500" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
              </div>
              <p className="text-xs text-green-700 font-medium text-center">Passkey verified</p>
              <p className="text-xs text-gray-700 text-center mt-1 leading-relaxed">
                Transaction sent successfully
              </p>
              <div className="mt-2.5 flex justify-center">
                <span className="px-3 py-0.5 bg-green-50 text-green-600 text-[11px] font-medium rounded-full">
                  Completed
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Input Bar ── */}
      <div className="bg-[#f0f2f5] px-3 py-2 flex items-center gap-2 border-t border-gray-200/60">
        <div className="flex-1 bg-white rounded-full px-3.5 py-2 text-xs text-gray-400 border border-gray-100 select-none">
          Type a message...
        </div>
        <div className="w-8 h-8 rounded-full bg-[#517da2] flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5">
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

/* ── Helper: Rule row in Wallet Guard card ── */
function RuleRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-2 text-[11px]">
      <span className="text-gray-300 mt-px" aria-hidden="true">&#x2022;</span>
      <span className="text-gray-500">
        {label} — <span className="font-medium text-gray-700">{value}</span>
      </span>
    </div>
  )
}
