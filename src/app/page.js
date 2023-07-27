import Image from 'next/image'
import Product from './products/page'
import { Suspense } from 'react'
import Loading from './loading'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="h-screen overflow-auto bg-purple-900 p-5 ">
      <Navbar />

      <Suspense fallback={<Loading />}>
        <Product />
      </Suspense>
    </main>
  )
}
