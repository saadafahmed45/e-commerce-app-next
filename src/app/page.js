import Image from 'next/image'
import Product from './products/page'
import { Suspense } from 'react'
import Loading from './loading'

export default function Home() {
  return (
    <main className="flex min-h-screen bg-purple-900 p-5 ">


      <Suspense fallback={<Loading />}>
        <Product />
      </Suspense>
    </main>
  )
}
