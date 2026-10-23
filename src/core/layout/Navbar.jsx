import JackalLogo from '../ui/JackalLogo'

export default function Navbar({ page, setPage }) {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-earth bg-night/80 px-6 py-4 backdrop-blur-md">
      <div 
        className="flex cursor-pointer items-center gap-3 font-bold text-sand transition-opacity hover:opacity-80"
        onClick={() => setPage('home')}
      >
        <JackalLogo className="h-8 w-8" />
        <span className="bg-linear-to-r from-fur to-amber bg-clip-text text-lg tracking-tight text-transparent">Jackal UI</span>
      </div>
      <div className="flex gap-6 text-sm font-medium">
        <button
          onClick={() => setPage('home')}
          className={`cursor-pointer transition-colors ${page === 'home' ? 'text-sand' : 'text-back hover:text-sand'}`}
        >
          Home
        </button>
        <button
          onClick={() => setPage('components')}
          className={`cursor-pointer transition-colors ${page === 'components' ? 'text-sand' : 'text-back hover:text-sand'}`}
        >
          Components
        </button>
      </div>
    </nav>
  )
}