export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-brand-gold/20 border-t-brand-gold/80 rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm text-secondary tracking-[0.15em] uppercase">Loading...</p>
      </div>
    </div>
  )
}
