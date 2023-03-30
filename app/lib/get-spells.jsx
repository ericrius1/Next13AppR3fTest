export async function getSpells() {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return [
    { id: Math.random(), title: 'luminus' },
    { id: Math.random(), title: 'shnipple' },
    { id: Math.random(), title: 'nox' },
  ]

  // const res = await fetch('https://jsonplaceholder.typicode.com/users')

  // if (!res.ok) throw new Error('failed to fetch data')
  // return res.json()
}
