import figma from "@figma/code-connect"
import BigButton from "../components/BigButton"

figma.connect(
  BigButton,
  "https://www.figma.com/design/bFdYFU2GuPydQd2EINrGma/Acme-Design-System?node-id=19-14",
  {
    props: {
      label: figma.string("Label"),
      variant: figma.enum("Style", {
        Primary: "primary",
        Ghost: "ghost",
        Danger: "danger",
      }),
      disabled: figma.enum("State", {
        Default: false,
        Disabled: true,
      }),
    },
    example: (props) => (
      <BigButton variant={props.variant} disabled={props.disabled}>
        {props.label}
      </BigButton>
    ),
  }
)
