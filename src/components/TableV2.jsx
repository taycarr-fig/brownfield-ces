/**
 * Simple table helper.
 *
 * Each row object must include a stable `id` field used as the React key.
 * Colors use Acme Design System tokens via Tailwind.
 */
export function TableV2(props) {
  const headers = props.headers
  const rows = props.dataRows

  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-acme-bg-surface">
            {headers.map((h) => (
              <th
                key={h}
                className="border-b border-acme-border-default px-4 py-3 text-left font-semibold text-acme-text-primary"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b border-acme-border-default">
              {row.cells.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-acme-text-primary">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
