import figma from "@figma/code-connect"
import ToggleSwitch from "../components/ToggleSwitch"

figma.connect(
  ToggleSwitch,
  "https://www.figma.com/design/bFdYFU2GuPydQd2EINrGma/Acme-Design-System?node-id=23-7",
  {
    props: {
      checked: figma.enum("State", {
        Off: false,
        On: true,
      }),
    },
    example: (props) => (
      <ToggleSwitch checked={props.checked} onChange={(value) => {}} />
    ),
  }
)
