import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import BigButton from '../components/BigButton.jsx'

const buckets = [
  { label: 'Current', amount: '$18,400', color: 'var(--color-action-success)' },
  { label: '1–30 days', amount: '$3,200', color: 'var(--color-action-ghost-text)' },
  { label: '31–60 days', amount: '$890', color: 'var(--color-text-muted)' },
  { label: '61+ days', amount: '$120', color: 'var(--color-action-danger)' },
]

export default function BillingAgingReport() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-acme-bg-page">
      <NavBar brand="Acme" />
      <div className="mx-auto max-w-xl px-6 py-8">
        <p className="mb-3 text-sm">
          <Link to="/billing" className="text-acme-action-primary no-underline hover:underline">
            Billing
          </Link>
          <span className="text-acme-text-muted"> / </span>
          <span className="text-acme-text-secondary">Aging</span>
        </p>

        <h1 className="mb-2 text-2xl font-bold text-acme-text-primary">Accounts receivable aging</h1>
        <p className="mb-6 text-sm text-acme-text-secondary">Snapshot only — not wired to a live ledger.</p>

        <div className="flex flex-col gap-3">
          {buckets.map((b) => (
            <div
              key={b.label}
              className="flex items-center justify-between rounded-lg border border-acme-border-default bg-white p-4 text-[15px]"
              style={{ borderLeftWidth: 4, borderLeftColor: b.color }}
            >
              <span className="font-semibold text-acme-text-primary">{b.label}</span>
              <span className="font-semibold text-acme-text-heading">{b.amount}</span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <BigButton variant="ghost" onClick={() => navigate('/billing')}>
            ← Back to invoices
          </BigButton>
        </div>
      </div>
    </div>
  )
}
