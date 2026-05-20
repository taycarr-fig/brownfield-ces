/**
 * Text input with label.
 */
export function InputField({ labelText, id, value, onChange, placeholder }) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-acme-text-primary">
        {labelText}
      </label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-md border border-acme-border-strong px-3 py-2 text-sm text-acme-text-heading outline-none focus:ring-2 focus:ring-acme-action-ghost"
      />
    </div>
  )
}
