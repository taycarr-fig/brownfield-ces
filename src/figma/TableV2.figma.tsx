import figma from "@figma/code-connect"
import { TableV2 } from "../components/TableV2"

figma.connect(
  TableV2,
  "https://www.figma.com/design/bFdYFU2GuPydQd2EINrGma/Acme-Design-System?node-id=24-2",
  {
    example: () => (
      <TableV2
        headers={["Column 1", "Column 2", "Column 3"]}
        dataRows={[
          { id: "row-1", cells: ["Cell 1", "Cell 2", "Cell 3"] },
          { id: "row-2", cells: ["Cell 1", "Cell 2", "Cell 3"] },
        ]}
      />
    ),
  }
)
