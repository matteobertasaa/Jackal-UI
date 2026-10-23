import { useState } from 'react'

export default function Showcase({ title, description, code, children }) {
  const [copied, setCopied] = useState(false)
  const [showCode, setShowCode] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="min-w-0 rounded-3xl border border-earth bg-den p-6 shadow-xl">
      <h2 className="text-xl font-bold text-sand">{title}</h2>
      <p className="mb-6 text-back">{description}</p>

      <div className="flex min-h-[160px] max-w-full items-center justify-center overflow-hidden rounded-2xl border border-earth/50 bg-night p-8">
        {children}
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => setShowCode(!showCode)}
          className="cursor-pointer rounded-lg bg-earth px-4 py-2 text-sm text-sand transition-colors hover:bg-earth/80"
        >
          {showCode ? 'Hide code' : 'Show code'}
        </button>
        <button
          onClick={handleCopy}
          className="cursor-pointer rounded-lg bg-fur px-4 py-2 text-sm text-night transition-colors hover:bg-amber"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      {showCode && (
        <div className="mt-4 min-w-0 rounded-xl border border-earth bg-night p-4 shadow-inner">
          <pre className="whitespace-pre-wrap break-words text-sm text-sand/80">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </section>
  )
}