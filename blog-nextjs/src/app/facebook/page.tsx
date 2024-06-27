"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from 'react-bootstrap'


const Facebook = () => {
  const router= useRouter()
  const handleBtn=()=>{
    router.push("/")
  }

  return (
    <div>Facebook
      <div>
        <Button variant='success'>hello Huyen</Button>
        <button onClick={()=>handleBtn()}>back home</button>
      </div>
    </div>
  )
}

export default Facebook