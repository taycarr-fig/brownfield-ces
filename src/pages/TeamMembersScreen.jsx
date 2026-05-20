import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import BigButton from '../components/BigButton.jsx'

const people = [
  { id: '1', name: 'Alex Rivera', role: 'Admin' },
  { id: '2', name: 'Jordan Lee', role: 'Editor' },
  { id: '3', name: 'Sam Patel', role: 'Viewer' },
  { id: '4', name: 'Riley Chen', role: 'Editor' },
]

export default function TeamMembersScreen() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <NavBar brand="Acme" />
      <div className="max-w-xl px-6 py-8">
        <h1 className="mb-2 text-2xl font-semibold text-acme-text-primary">Team & access</h1>
        <p className="mb-6 text-sm text-acme-text-secondary">
          Invite members, then wire billing and integrations from the header nav.
        </p>

        <ul className="m-0 list-none p-0">
          {people.map((p) => (
            <li
              key={p.id}
              className="flex items-center justify-between border-b border-acme-border-default px-4 py-3 text-sm"
            >
              <span className="font-semibold text-acme-text-primary">{p.name}</span>
              <span className="text-acme-text-secondary">{p.role}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <BigButton variant="ghost" onClick={() => {}}>
            Invite user
          </BigButton>
          <BigButton variant="primary" onClick={() => navigate('/billing')}>
            Open billing for seats
          </BigButton>
        </div>

        <p className="mt-6 text-sm text-acme-text-muted">
          Also try the{' '}
          <Link to="/integrations" className="text-acme-action-ghost no-underline hover:underline">
            integrations hub
          </Link>{' '}
          for Slack notifications.
        </p>
      </div>
    </div>
  )
}
