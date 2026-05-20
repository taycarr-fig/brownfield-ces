/**
 * Card for dashboard-style metrics.
 *
 * Prop `title` is the card heading label (e.g. "Users", "Revenue").
 * Colors use Acme Design System tokens via Tailwind.
 */
export function CardThing({ title, subtext, footerNote }) {
  return (
    <div className="rounded-lg border border-acme-border-default bg-white p-5 shadow-sm">
      <p className="m-0 text-[13px] font-medium text-acme-text-secondary">{title}</p>
      <div className="mt-2 text-2xl font-semibold text-acme-text-primary">{subtext}</div>
      {footerNote && <div className="mt-3 text-xs text-acme-text-muted">{footerNote}</div>}
    </div>
  )
}
