/**
 * Primary actions across the app.
 *
 * Variants use shared Acme Design System color tokens (CSS custom properties).
 * The `extraStyle` escape hatch has been removed to enforce design consistency.
 */
export default function BigButton({ children, variant = 'primary', onClick, type = 'button', disabled = false }) {
  const base = {
    padding: '8px 16px',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 600,
    cursor: disabled ? 'default' : 'pointer',
    border: 'none',
    fontFamily: 'system-ui, sans-serif',
    opacity: disabled ? 0.5 : 1,
  }

  let colors = {}
  if (variant === 'primary') {
    colors = { backgroundColor: 'var(--color-action-primary)', color: '#FFFFFF' }
  } else if (variant === 'ghost') {
    colors = {
      backgroundColor: 'transparent',
      color: 'var(--color-action-ghost-text)',
      border: '1px solid var(--color-action-ghost-text)',
    }
  } else if (variant === 'danger') {
    colors = { backgroundColor: 'var(--color-action-danger)', color: '#FFFFFF' }
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} style={{ ...base, ...colors }}>
      {children}
    </button>
  )
}
