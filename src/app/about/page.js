'use client'
import Header from '../components/topBar'
import { useEffect, useState } from 'react'
export default function about() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      //   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/about`)
      const res = await fetch('http://localhost:3001/api/about')
      const json = await res.json()
      setData(json)
    }

    fetchData()
  }, [])

  //   if (!data) {
  //     document.getElementById('data').innerHTML = 'Loading...'
  //   }
  return (
    <div className="">
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Header</h1>
        <p id="data">{data ? data : 'Loading...loadinG'}</p>
        <p>Some information about us.</p>
      </div>
    </div>
  )
}
