// url=https://www.figma.com/design/bFdYFU2GuPydQd2EINrGma/Acme-Design-System?node-id=21-2
// source=src/components/CardThing.jsx
// component=CardThing
import figma from 'figma'
const instance = figma.selectedInstance

const stat = instance.getString('Label')
const subtext = instance.getString('Value')
const footerNote = instance.getString('Footer')

export default {
  example: figma.code`<CardThing stat="${stat}" subtext="${subtext}" footerNote="${footerNote}" />`,
  imports: ['import { CardThing } from "./CardThing"'],
  id: 'card-thing',
  metadata: { nestable: false },
}
