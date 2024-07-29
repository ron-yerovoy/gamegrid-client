'use client'
import Head from 'next/head'
import { useState } from 'react'
import React from 'react'
import Posts from '../../components/posts'


const ID_page = ({ params }) => {

  return (
    <div className="min-h-screen flex-auto w-full  ">
      <Head>
        <title>Lobby</title>
      </Head>
      <Posts userId={params}/>
    </div>

    
  )
}

export default ID_page
