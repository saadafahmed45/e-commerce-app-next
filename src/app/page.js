import Image from 'next/image'
import Product from './products/page'

export default function Home() {
  return (
    <main className="flex min-h-screen bg-purple-900 p-5 ">
      <Product />
    </main>
  )
}
