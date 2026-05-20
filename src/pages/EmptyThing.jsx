import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import BigButton from '../components/BigButton.jsx'

export default function EmptyThing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <NavBar brand="Acme" />
      <div className="mx-auto max-w-lg px-6 py-12 text-center">
        <div className="mx-auto mt-3 flex h-44 max-w-md items-center justify-center rounded-xl border-2 border-dashed border-acme-border-strong bg-acme-bg-surface text-sm text-acme-text-muted">
          illustration placeholder
        </div>

        <h1 className="mb-3 mt-7 text-2xl font-semibold text-acme-text-primary">No reports yet</h1>
        <p className="mb-6 text-[15px] leading-relaxed text-acme-text-secondary">
          Connect a data source or import a CSV to see charts here. This screen is intentionally sparse.
        </p>

        <BigButton variant="ghost" onClick={() => navigate('/dashboard')}>
          Back to dashboard
        </BigButton>
      </div>
    </div>
  )
}
