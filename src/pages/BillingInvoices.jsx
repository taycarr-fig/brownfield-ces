import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import { TableV2 } from '../components/TableV2.jsx'
import BigButton from '../components/BigButton.jsx'

const invoiceRows = {
  headers: ['Invoice', 'Customer', 'Amount', 'Status'],
  dataRows: [
    { id: 'inv-2401', cells: ['INV-2401', 'Northwind LLC', '$4,200', 'Paid'] },
    { id: 'inv-2402', cells: ['INV-2402', 'Contoso', '$890', 'Paid'] },
    { id: 'inv-2403', cells: ['INV-2403', 'Fabrikam', '$120', 'Overdue'] },
  ],
}

export default function BillingInvoices() {
  return (
    <div className="min-h-screen bg-acme-bg-page">
      <NavBar brand="Acme" />
      <div className="mx-auto max-w-3xl px-6 py-8">
        <h1 className="mb-2 text-2xl font-bold text-acme-text-primary">Billing & invoices</h1>
        <p className="mb-4 text-sm text-acme-text-secondary">
          Finance flow — split charges by team or push totals to your ERP.
        </p>

        <p className="mb-4 text-sm">
          <Link to="/billing/aging" className="font-semibold text-acme-action-primary no-underline hover:underline">
            Open AR aging report →
          </Link>
        </p>

        <div className="mb-4 rounded-lg border border-acme-border-default bg-white p-5">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
            <span className="text-[15px] font-semibold text-acme-text-primary">Open invoices</span>
            <BigButton variant="primary" onClick={() => {}}>
              Record payment
            </BigButton>
          </div>
          <TableV2 headers={invoiceRows.headers} dataRows={invoiceRows.dataRows} />
        </div>

        <p className="text-sm text-acme-text-muted">
          Next:{' '}
          <Link to="/team" className="text-acme-action-primary no-underline hover:underline">
            assign cost centers by team
          </Link>
          {' · '}
          <Link to="/integrations" className="text-acme-action-primary no-underline hover:underline">
            connect QuickBooks
          </Link>
        </p>
      </div>
    </div>
  )
}
