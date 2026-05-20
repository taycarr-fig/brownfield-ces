// url=https://www.figma.com/design/bFdYFU2GuPydQd2EINrGma/Acme-Design-System?node-id=23-7
// source=src/components/ToggleSwitch.jsx
// component=ToggleSwitch
import figma from 'figma'
const instance = figma.selectedInstance

const isOn = instance.getEnum('State', {
  'On': true,
  'Off': false,
})

export default {
  example: figma.code`<ToggleSwitch isOn={${isOn}} whenToggle={() => {}} />`,
  imports: ['import ToggleSwitch from "./ToggleSwitch"'],
  id: 'toggle-switch',
  metadata: { nestable: false },
}
