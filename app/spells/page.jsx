// 'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { getSpells } from '@/lib/get-spells'
import SpellList from './components/spell-list'
import Spell3D from './components/Spell3D'

{
  /* @ts-expect-error Async Server Component */
}
export default async function Page() {
  // const { title } = await getSpells()
  const spellData = getSpells() // this is a promise
  return (
    <>
      <div className='mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5'>
        <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left'>
          <Suspense fallback={<div>loading</div>}>
            <p className='w-full uppercase'>yo</p>
            <SpellList promise={spellData} />
          </Suspense>
          <Spell3D side={1} />
          <Spell3D side={2} />
          <Spell3D side={3} />

          <h1 className='my-4 text-5xl font-bold leading-tight'>Yo yoo</h1>
          <p className='mb-8 text-2xl leading-normal'>A minimalist starter for React, React-three-fiber and Threejs.</p>
        </div>
      </div>
    </>
  )
}
