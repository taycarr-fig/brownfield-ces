import figma from "@figma/code-connect"
import { InputField } from "../components/InputField"

figma.connect(
  InputField,
  "https://www.figma.com/design/bFdYFU2GuPydQd2EINrGma/Acme-Design-System?node-id=22-14",
  {
    props: {
      labelText: figma.string("Label"),
      placeholder: figma.string("Placeholder"),
    },
    example: (props) => (
      <InputField
        labelText={props.labelText}
        id="field-id"
        placeholder={props.placeholder}
        value=""
        onChange={(e) => {}}
      />
    ),
  }
)
