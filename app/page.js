import React from "react";
import MyHeader from './components/header/MyHeader'
import Albums from './components/albums/Albums'

export default async function Home() {
  const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=50', {
    headers: {
      "x-api-key": "live_3gfLi49P7U65L6Xcc0YL0B2KQK12JVsgE69dUnmV71mEOdNjDCCBHkxL3x95chVt"
    }
  })
  const data = await res.json()

  return (
    <main>
      <MyHeader />
      <Albums data={data} />
    </main>
  )
}
