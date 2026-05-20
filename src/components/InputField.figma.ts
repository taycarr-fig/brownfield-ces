// url=https://www.figma.com/design/bFdYFU2GuPydQd2EINrGma/Acme-Design-System?node-id=22-14
// source=src/components/InputField.jsx
// component=InputField
import figma from 'figma'
const instance = figma.selectedInstance

const labelText = instance.getString('Label')
const placeholder = instance.getString('Placeholder')

// State (Default/Focus/Disabled) is CSS/browser-driven — no corresponding code prop

export default {
  example: figma.code`<InputField labelText="${labelText}" id="field" value="" onChange={() => {}} placeholder="${placeholder}" />`,
  imports: ['import { InputField } from "./InputField"'],
  id: 'input-field',
  metadata: { nestable: false },
}
