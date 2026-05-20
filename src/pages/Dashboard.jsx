import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import { CardThing } from '../components/CardThing.jsx'
import { TableV2 } from '../components/TableV2.jsx'
import styles from './Dashboard.module.css'

const tableStuff = {
  headers: ['Customer', 'Plan', 'MRR', 'Status'],
  dataRows: [
    { id: 'northwind', cells: ['Northwind LLC', 'Enterprise', '$4,200', 'Active'] },
    { id: 'contoso', cells: ['Contoso', 'Pro', '$890', 'Active'] },
    { id: 'fabrikam', cells: ['Fabrikam', 'Starter', '$120', 'At risk'] },
    { id: 'adventure', cells: ['Adventure Co', 'Pro', '$650', 'Active'] },
    { id: 'tailspin', cells: ['Tailspin Toys', 'Enterprise', '$12,400', 'Active'] },
  ],
}

export default function Dashboard() {
  return (
    <div className={styles.pageWrap}>
      <NavBar brand="Acme" />
      <main className={styles.mainArea}>
        <h1 className={styles.sectionTitle}>Overview</h1>
        <p className="mt-2 text-sm text-acme-text-secondary">Last updated 2 minutes ago · internal only</p>

        <div className="mt-4 rounded-lg border border-acme-border-default bg-white p-4 text-sm text-acme-text-secondary">
          <span className="font-semibold text-acme-text-primary">Other flows:</span>{' '}
          <Link to="/billing" className="font-medium text-acme-action-primary no-underline hover:underline">
            Billing
          </Link>
          <span className="text-acme-border-strong"> · </span>
          <Link to="/team" className="font-medium text-acme-action-primary no-underline hover:underline">
            Team
          </Link>
          <span className="text-acme-border-strong"> · </span>
          <Link to="/integrations" className="font-medium text-acme-action-primary no-underline hover:underline">
            Integrations
          </Link>
        </div>

        <div className={styles.gridStats}>
          <CardThing title="Users" subtext="12,480" footerNote="+3.2% vs last week" />
          <CardThing title="Revenue" subtext="$842k" footerNote="MTD" />
          <CardThing title="Tickets" subtext="37 open" footerNote="SLA 94%" />
          <CardThing title="Uptime" subtext="99.98%" footerNote="30d rolling" />
        </div>

        <div className={styles.cardPanel}>
          <h2 className="m-0 text-[17px] font-semibold text-acme-text-primary">Recent accounts</h2>
          <p className="mb-0 mt-2 text-[13px] text-acme-text-muted">Hardcoded preview data — do not use in prod</p>
          <TableV2 headers={tableStuff.headers} dataRows={tableStuff.dataRows} />
        </div>
      </main>
    </div>
  )
}
