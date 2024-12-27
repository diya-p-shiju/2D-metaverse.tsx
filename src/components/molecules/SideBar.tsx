import React from 'react'
import { Button } from '../ui/button'

const SideBar = () => {
  return (
    <section className="w-32 flex flex-col max-h-screen gap-10 overflow-hidden px-2 mt-5">
      <Button className='text-wrap  rounded-lg p-2'>Profile</Button>
      <Button className='text-wrap  rounded-lg p-2'>Profile</Button>
      <Button className='text-wrap  rounded-lg p-2'>Profile</Button>
      <Button className='text-wrap  rounded-lg p-2'>Profile</Button>
      <Button className="h-32 text-wrap  rounded-xl text-white font-serif">
Get our latest updates on instagram / telegram
      </Button>

    </section>
  )
}

export default SideBar