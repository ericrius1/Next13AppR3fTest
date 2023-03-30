export default async function SpellList({ promise }) {
  const spells = await promise
  const content = spells.map((spell) => {
    return <div key={spell.id}>{spell.title}</div>
  })

  return content
}
