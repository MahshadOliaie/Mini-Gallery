import React from "react";
import MyHeader from './components/header/MyHeader'
import Albums from './components/albums/Albums'

export default async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = await res.json()
  console.log(data)
  return (
    <main>
      <MyHeader />
      <Albums data={data} />
    </main>
  )
}
