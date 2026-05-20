import figma from "@figma/code-connect"
import { CardThing } from "../components/CardThing"

figma.connect(
  CardThing,
  "https://www.figma.com/design/bFdYFU2GuPydQd2EINrGma/Acme-Design-System?node-id=21-2",
  {
    props: {
      title: figma.string("Label"),
      subtext: figma.string("Value"),
      footerNote: figma.string("Footer"),
    },
    example: (props) => (
      <CardThing
        title={props.title}
        subtext={props.subtext}
        footerNote={props.footerNote}
      />
    ),
  }
)
