// url=https://www.figma.com/design/bFdYFU2GuPydQd2EINrGma/Acme-Design-System?node-id=19-14
// source=src/components/BigButton.jsx
// component=BigButton
import figma from 'figma'
const instance = figma.selectedInstance

const label = instance.getString('Label')
const variant = instance.getEnum('Style', {
  'Primary': 'primary',
  'Ghost': 'ghost',
  'Danger': 'danger',
})

// State=Disabled has no corresponding prop in BigButton (visual only in Figma)

export default {
  example: figma.code`<BigButton variant="${variant}">${label}</BigButton>`,
  imports: ['import BigButton from "./BigButton"'],
  id: 'big-button',
  metadata: { nestable: true },
}
