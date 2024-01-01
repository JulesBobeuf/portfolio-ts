import Image from 'next/image'
import { Avatar } from './Avatar'
import Navbar from './Navbar/navbar'

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-8">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono lg:flex">
          <Avatar size={256} src={"/avatar/choix.jpg"}></Avatar>
        </div>
        <div className="">
          <p>cc</p>
        </div>

        <div className="">
          <p>cc</p>
        </div>

        <div className="">
          <p>cc</p>
        </div>

        <div className="">
          <p>cc</p>
        </div>
      </main>
    </>
  )
}
