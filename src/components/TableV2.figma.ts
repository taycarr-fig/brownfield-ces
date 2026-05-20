// url=https://www.figma.com/design/bFdYFU2GuPydQd2EINrGma/Acme-Design-System?node-id=24-2
// source=src/components/TableV2.jsx
// component=TableV2
import figma from 'figma'

// Table has no configurable Figma properties — static usage example

export default {
  example: figma.code`
<TableV2
  headers={['Customer', 'Plan', 'MRR', 'Status']}
  dataRows={[
    { cells: ['Acme Corp', 'Enterprise', '$4,200', 'Active'] },
    { cells: ['Contoso', 'Pro', '$890', 'Active'] },
  ]}
/>`,
  imports: ['import { TableV2 } from "./TableV2"'],
  id: 'table-v2',
  metadata: { nestable: false },
}
